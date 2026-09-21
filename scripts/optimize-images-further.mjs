#!/usr/bin/env node
/**
 * Batch-optimise the .webp files in public/images.
 *
 *   node scripts/optimize-images.mjs --dry      # show before/after, write nothing
 *   node scripts/optimize-images.mjs            # optimise in place
 *   node scripts/optimize-images.mjs --remote "<full image url>" --name hero-bg
 *                                                # download + optimise a hotlinked image
 *
 * Install once:  npm i -D sharp
 *
 * Safety:
 *  - Originals are copied to ./image-originals (outside /public, so never deployed)
 *    before anything is overwritten. Re-runs always start from those originals,
 *    so you never recompress an already-compressed file.
 *  - A file is only replaced if the result is at least 10% smaller.
 *  - Filenames are unchanged, so no component code needs to change to pick them up.
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, "public", "images");
const BACKUP_DIR = path.join(ROOT, "image-originals");

// ---- Per-file rules -------------------------------------------------------
// width = max output width in px (never upscales). quality = WebP quality.
const CARD = { width: 1000, quality: 70 };
const THUMB = { width: 800, quality: 70 };

const RULES = {
  // ~105x124 slot -> 2x is 210px wide
  "logo.webp": { width: 210, quality: 80 },

  // full-bleed CSS background
  "JWU1.webp": { width: 1600, quality: 70 },

  // small thumbnails (331px wide on mobile, 120x80 on md+)
  "JWU2.webp": THUMB,
  "JWU3.webp": THUMB,
  "JWU4.webp": THUMB,
  "JWU5.webp": THUMB,

  // card images
  "mental.webp": CARD,
  "homecare.webp": CARD,
  "disability-support.webp": CARD,
  "elderlycare.webp": CARD,
  "crisis-prevention.webp": CARD,
  "WWH1.webp": CARD,
};

// Any other .webp in the folder (services page images, home-2, carer-support...)
const DEFAULT_RULE = { width: 1200, quality: 72 };

// ---- Helpers --------------------------------------------------------------
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => {
  const i = args.indexOf(n);
  return i >= 0 ? args[i + 1] : undefined;
};
const DRY = flag("--dry");

const kib = (b) => (b / 1024).toFixed(1).padStart(7) + " KiB";
const exists = (p) => fs.access(p).then(() => true, () => false);

async function encode(buf, rule) {
  const meta = await sharp(buf).metadata();
  if ((meta.pages ?? 1) > 1) return { skip: "animated" };
  const { data, info } = await sharp(buf)
    .rotate() // respect EXIF orientation
    .resize({ width: rule.width, withoutEnlargement: true })
    .webp({ quality: rule.quality, effort: 5 })
    .toBuffer({ resolveWithObject: true });
  return { data, info, meta };
}

async function optimiseLocal(name) {
  const pub = path.join(IMG_DIR, name);
  const bak = path.join(BACKUP_DIR, name);
  const srcPath = (await exists(bak)) ? bak : pub;
  const srcBuf = await fs.readFile(srcPath);
  const rule = RULES[name] ?? DEFAULT_RULE;

  const res = await encode(srcBuf, rule);
  if (res.skip) return console.log(`skip   ${name} (${res.skip})`);

  const before = srcBuf.length;
  const after = res.data.length;
  const dims = `${res.meta.width}x${res.meta.height} -> ${res.info.width}x${res.info.height}`;

  // Not worth a lossy re-encode for less than a 10% gain.
  if (after > before * 0.9) {
    return console.log(`keep   ${name.padEnd(28)} already small (${kib(before)})`);
  }

  console.log(
    `${DRY ? "would " : "done  "} ${name.padEnd(28)} ${dims.padEnd(24)} ${kib(before)} -> ${kib(after)}  (-${(
      (1 - after / before) * 100
    ).toFixed(0)}%)`
  );

  if (!DRY) {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    if (!(await exists(bak))) await fs.copyFile(pub, bak);
    await fs.writeFile(pub, res.data);
  }
  return { before, after };
}

async function optimiseRemote(url, name) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Download failed: HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  const res = await encode(buf, { width: 1600, quality: 70 });
  if (res.skip) throw new Error("Remote image is animated; not converting.");
  const out = path.join(IMG_DIR, `${name}.webp`);
  console.log(
    `remote ${name}.webp  ${res.meta.width}x${res.meta.height} -> ${res.info.width}x${res.info.height}  ${kib(buf.length)} -> ${kib(res.data.length)}`
  );
  if (!DRY) {
    await fs.mkdir(IMG_DIR, { recursive: true });
    await fs.writeFile(out, res.data);
    console.log(`\nSaved ${path.relative(ROOT, out)}. Now point your CSS/JSX at "/images/${name}.webp".`);
  }
}

// ---- Main -----------------------------------------------------------------
const remote = opt("--remote");
if (remote) {
  await optimiseRemote(remote, opt("--name") ?? "remote-bg");
} else {
  const files = (await fs.readdir(IMG_DIR)).filter((f) => f.toLowerCase().endsWith(".webp")).sort();
  let totalBefore = 0;
  let totalAfter = 0;
  for (const f of files) {
    const r = await optimiseLocal(f);
    if (r) {
      totalBefore += r.before;
      totalAfter += r.after;
    }
  }
  console.log(
    `\n${DRY ? "Projected" : "Total"}: ${kib(totalBefore)} -> ${kib(totalAfter)}  (saved ${kib(totalBefore - totalAfter)})`
  );
  if (!DRY) console.log("Originals are in ./image-originals (add it to .gitignore if you don't want it committed).");
}

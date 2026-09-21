// optimize-images.mjs
//
// Resizes and converts every image in /public/images (recursively) to WebP.
// Run this before `next build` so the optimized files ship in your static export.
//
// Usage:
//   node optimize-images.mjs
//
// By default it writes optimized .webp files alongside the originals.
// Pass --replace to delete the original jpg/png after conversion instead.

import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import path from "path";

const SOURCE_DIR = path.resolve("public/images");
const MAX_WIDTH = 1600; // no image on the site needs to be wider than this
const WEBP_QUALITY = 80; // good balance of size vs visual quality
const REPLACE_ORIGINALS = process.argv.includes("--replace");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findImages(fullPath)));
    } else if (IMAGE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const originalSize = (await stat(filePath)).size;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  const pipeline =
    metadata.width && metadata.width > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH })
      : image;

  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outputPath);

  const newSize = (await stat(outputPath)).size;
  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

  console.log(
    `${path.relative(SOURCE_DIR, filePath)} → ${(originalSize / 1024).toFixed(
      0
    )} KiB → ${(newSize / 1024).toFixed(0)} KiB (${savings}% smaller)`
  );

  if (REPLACE_ORIGINALS) {
    const { unlink } = await import("fs/promises");
    await unlink(filePath);
  }
}

async function main() {
  try {
    await stat(SOURCE_DIR);
  } catch {
    console.error(`Could not find ${SOURCE_DIR}. Check the path and try again.`);
    process.exit(1);
  }

  const images = await findImages(SOURCE_DIR);

  if (images.length === 0) {
    console.log("No jpg/jpeg/png files found.");
    return;
  }

  console.log(`Found ${images.length} image(s). Optimizing...\n`);

  for (const filePath of images) {
    await optimizeImage(filePath);
  }

  console.log("\nDone. Update your <Image> src attributes to point to the .webp files.");
  if (!REPLACE_ORIGINALS) {
    console.log("Originals were kept — re-run with --replace to delete them once you've confirmed everything looks right.");
  }
}

main();

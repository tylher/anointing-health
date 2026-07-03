// components/ServicesHero.tsx
"use client";

import { heroImages } from "@/data/services-data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import RevealUp from "./RevealUp";

// Two accent tones pulled from the fixed-dim tier of the design system —
// they read clearly against the dark gradient overlay without fighting
// the white body copy the way the full-saturation primary/secondary do.
const ACCENT_MINT = "#88d8a0"; // --color-primary-fixed-dim
const ACCENT_GOLD = "#f6be43"; // --color-secondary-fixed-dim

// heroImages currently only exposes `left`/`right`, so those become the
// two slides in the loop. If you later add more images to heroImages
// (e.g. a `gallery` array), swap this line to read from that instead —
// everything else here just maps over LOOP_IMAGES.
const LOOP_IMAGES = [heroImages.left, heroImages.right].filter(Boolean);
const SLIDE_SECONDS = 6;

export default function ServicesHero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (LOOP_IMAGES.length < 2) return;
    const id = setInterval(() => {
      setActiveImage((i) => (i + 1) % LOOP_IMAGES.length);
    }, SLIDE_SECONDS * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Full-bleed image loop. AnimatePresence's default "sync" mode lets
          the outgoing and incoming slide animate at the same time, which
          is what gives the crossfade — the old one fades out while the
          new one fades in, rather than a hard cut or a flash of nothing
          between them. Each slide also drifts through a slow Ken Burns
          zoom for the full time it's on screen. */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={activeImage}
            src={LOOP_IMAGES[activeImage]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
              opacity: { duration: 1.8, ease: "easeInOut" },
              scale: { duration: SLIDE_SECONDS + 1.8, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,82,43,0.15) 0%, rgba(0,82,43,0.65) 100%)",
        }}
      />

      <div className="absolute w-full h-full bg-black/40" />

      <div className="absolute bottom-10 w-full pb-12 px-6 lg:px-8 max-w-[1280px] left-1/2 -translate-x-1/2 text-center md:text-left">
        <RevealUp>
          <h1 className="font-serif font-semibold text-white mb-2 text-5xl md:text-7xl leading-tight md:max-w-3xl">
            Everything we offer,{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              style={{ color: ACCENT_MINT }}
            >
              tailored
            </motion.span>{" "}
            to{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
              style={{ color: ACCENT_GOLD }}
            >
              you
            </motion.span>
          </h1>
        </RevealUp>
        <RevealUp delay={0.15}>
          <p className="text-lg md:text-xl font-sans text-white/90 max-w-2xl mt-3">
            From home care to mental health outreach — flexible, compassionate
            services across the UK.
          </p>
        </RevealUp>
      </div>
    </section>
  );
}

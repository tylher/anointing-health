// components/ServicesHero.tsx
"use client";

import { heroImages } from "@/data/services-data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import RevealUp from "./RevealUp";

const ACCENT_MINT = "#88d8a0"; // --color-primary-fixed-dim
const ACCENT_GOLD = "#f6be43"; // --color-secondary-fixed-dim

// Each slide pairs the image source with its own alt text.
// Update the alt strings so they describe what's actually in each photo.
const LOOP_IMAGES = [
  {
    src: heroImages.left,
    alt: "A carer sharing a warm moment with an older client in their home",
  },
  {
    src: heroImages.right,
    alt: "A support worker talking with a client during a community outreach visit",
  },
].filter((image) => Boolean(image.src));

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

  const current = LOOP_IMAGES[activeImage];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={activeImage}
            src={current.src}
            alt={current.alt}
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

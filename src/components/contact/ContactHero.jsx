"use client";

import { motion } from "framer-motion";
import { ITEM, REVEAL } from "./UseReveal";
import { HERO } from "@/data/contact-data";

export default function ContactHero() {
  return (
    <motion.section
      className="max-w-container-max mx-auto px-7 md:px-20 pt-24 pb-12"
      variants={REVEAL}
      initial="hidden"
      animate="visible" // animate (not whileInView) — this is above the fold
    >
      <motion.h1
        variants={ITEM}
        className="font-semibold font-serif text-xl md:text-3xl text-primary text-center mb-8"
      >
        {HERO.heading}
      </motion.h1>

      {/* Image wrapper clips the Ken-Burns scale so it never bleeds outside */}
      <motion.div
        variants={ITEM}
        className="w-full h-64 md:h-96 rounded-xl overflow-hidden relative shadow-sm border border-outline/10"
      >
        <motion.img
          src={HERO.image.src}
          alt={HERO.image.alt}
          className="w-full h-full object-cover"
          // Subtle Ken-Burns zoom on load — starts slightly enlarged and
          // settles to natural size so the image "arrives" with the text.
          initial={{ scale: 1.06, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  );
}

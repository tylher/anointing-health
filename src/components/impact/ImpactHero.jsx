"use client";

import { motion } from "framer-motion";

import { ITEM, REVEAL } from "./variants";
import StatCard from "./StatCard";
import { HERO, STAT_CARDS } from "@/data/impact";

export default function ImpactHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-7 md:px-20 py-16 overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        {/* Hero photo — Ken-Burns slow zoom on mount */}
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO.backgroundImage}')` }}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Dark colour wash, matches original rgba overlay */}
        <div className="absolute inset-0 bg-[#00522b]/80 mix-blend-multiply" />

        {/* Gradient vignette — lighter at top, denser at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
      </div>

      {/* ── Foreground content ── */}
      <motion.div
        className="relative z-10 w-full max-w-container-max mx-auto flex flex-col items-center"
        variants={REVEAL}
        initial="hidden"
        animate="visible" // above the fold — no scroll trigger needed
      >
        <motion.h1
          variants={ITEM}
          className="font-serif text-xl md:text-[52px] text-white text-center mb-16"
        >
          {HERO.heading}
        </motion.h1>

        {/* Stat cards — stagger is handled by the parent REVEAL container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {STAT_CARDS.map((card) => (
            <StatCard key={card.id} {...card} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

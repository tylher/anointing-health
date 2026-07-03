"use client";

import { valueCards } from "@/data/about";
import { motion } from "framer-motion";
import { ValueCard } from "./ValueCard";

// The three cards enter together as one orchestrated beat rather than
// each firing its own independent scroll trigger — staggerChildren on
// this wrapper is what gives that "the section arrives as a set" feel
// instead of three separate scattered pops.
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

export function MissionVisionValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-sans font-bold tracking-[0.14em] uppercase text-primary mb-3">
            What guides us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-on-background leading-tight">
            The principles behind every visit
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

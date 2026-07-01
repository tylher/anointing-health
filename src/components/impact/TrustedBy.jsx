"use client";

import { motion } from "framer-motion";

import { ITEM, REVEAL } from "./variants";
import { MdArrowForward } from "react-icons/md";
import { CTA, TRUSTED_LOGOS } from "@/data/impact";

export default function TrustedBy() {
  return (
    <motion.section
      className="py-16 px-7 md:px-20 bg-surface text-center"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-container-max mx-auto">
        {/* Eyebrow */}
        <motion.h3
          variants={ITEM}
          className="font-serif text-outline mb-12 uppercase tracking-widest text-sm"
        >
          {CTA.eyebrow}
        </motion.h3>

        {/* Logo strip — each logo handles its own grayscale/opacity transition
            so hovering one logo reveals only that logo, which is more intentional
            and accessible than the original single-container hover. */}
        <motion.div
          variants={ITEM}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {TRUSTED_LOGOS.map((logo, i) => (
            <motion.img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 w-auto object-contain"
              // Start muted; reveal on hover
              initial={{ opacity: 0, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 0.6, filter: "grayscale(100%)" }}
              whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
              viewport={{ once: true }}
              transition={{
                // Stagger the initial entrance
                opacity: { duration: 0.4, delay: i * 0.08 },
                filter: { duration: 0.4 },
              }}
            />
          ))}
        </motion.div>

        {/* CTA card */}
        <motion.div
          variants={ITEM}
          className="mt-24 bg-surface-container-low rounded-2xl p-12 max-w-3xl mx-auto border border-primary/5"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
            {CTA.heading}
          </h2>

          <motion.a
            href={CTA.href}
            className="inline-flex items-center gap-2 text-tertiary-container font-button-text text-button-text"
            whileHover={{ color: "#235492" }}
            transition={{ duration: 0.2 }}
          >
            {CTA.linkLabel}
            {/* Arrow nudges right on hover — replaces group-hover:translate-x-1 */}
            <motion.span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <MdArrowForward/>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
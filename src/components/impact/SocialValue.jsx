"use client";

import { motion } from "framer-motion";
import { PROGRESS_BARS, SOCIAL_VALUE_INTRO } from "../../data/impact";
import { ITEM, REVEAL } from "./variants";
import ProgressBar from "./ProgressBar";

export default function SocialValue() {
  return (
    <motion.section
      className="py-24 px-7 md:px-20 bg-surface-container-lowest border-y border-surface-variant"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-container-max mx-auto max-w-4xl">
        {/* Section intro */}
        <motion.div variants={ITEM} className="text-center mb-16">
          <h2 className="font-serif font-semibold text-lg text-primary mb-4">
            {SOCIAL_VALUE_INTRO.heading}
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            {SOCIAL_VALUE_INTRO.body}
          </p>
        </motion.div>

        {/* Progress bars — stagger via parent REVEAL container */}
        <div className="space-y-12">
          {PROGRESS_BARS.map((bar) => (
            <ProgressBar key={bar.id} {...bar} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
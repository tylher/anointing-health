"use client";

import { motion } from "framer-motion";
import { IMPACT_AREAS, IMPACT_AREAS_INTRO } from "../../data/impact";
import { ITEM, REVEAL } from "./variants";
import ImpactAreaCard from "./ImpactAreaCard";

export default function ImpactAreas() {
  return (
    <motion.section
      className="py-24 px-7 md:px-20 bg-surface"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-container-max mx-auto">
        {/* Section intro */}
        <motion.div variants={ITEM} className="text-center mb-16">
          <h2 className="font-serif text-xl font-semibold md:text-4xl text-primary mb-4">
            {IMPACT_AREAS_INTRO.heading}
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
            {IMPACT_AREAS_INTRO.body}
          </p>
        </motion.div>

        {/* 2 × 2 grid — cards inherit the parent stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMPACT_AREAS.map((area) => (
            <ImpactAreaCard key={area.id} {...area} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
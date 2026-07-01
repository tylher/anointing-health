"use client";

import { motion } from "framer-motion";
import PathwayCard from "./PathwayCard";
import { REVEAL } from "./UseReveal";
import { PATHWAY_CARDS } from "@/data/contact-data";

export default function PathwayCards() {
  return (
    <motion.section
      className="max-w-container-max mx-auto px-7 md:px-20 py-12"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {PATHWAY_CARDS.map((card) => (
          <PathwayCard key={card.id} {...card} />
        ))}
      </div>
    </motion.section>
  );
}

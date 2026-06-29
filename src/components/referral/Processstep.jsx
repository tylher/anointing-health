"use client";

import { motion } from "framer-motion";

export default function ProcessStep({
  number,
  title,
  description,
  badgeBg,
  isLast,
}) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: number * 0.15 }}
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full ${badgeBg} flex items-center justify-center font-bold font-ui z-10`}
        >
          {number}
        </div>
        {!isLast && (
          <motion.div
            className="w-0.5 bg-white/20 my-1 origin-top"
            style={{ height: 64 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: number * 0.15 + 0.2 }}
          />
        )}
      </div>
      <div className="pt-1">
        <h4 className="font-ui text-lg font-semibold text-white">
          {title}
        </h4>
        <p className="font-sans text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}

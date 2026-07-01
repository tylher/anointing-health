"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { ITEM } from "./variants";

export default function StatCard({
  animated,
  prefix,
  suffix,
  target,
  displayValue,
  barColor,
  label,
}) {
  return (
    <motion.div
      variants={ITEM}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
      transition={{ duration: 0.25 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg"
    >
      {/* Stat value — either a live counter or a static pre-formatted string */}
      <span className="font-serif text-lg font-semibold text-white mb-2 text-center">
        {animated ? (
          <AnimatedCounter to={target} prefix={prefix} suffix={suffix} />
        ) : (
          displayValue
        )}
      </span>

      {/* Accent divider bar — colour driven by data */}
      <div className={`w-12 h-1 ${barColor} rounded-full mb-4`} />

      <span className="font-sans text-sm text-white/90 text-center">
        {label}
      </span>
    </motion.div>
  );
}
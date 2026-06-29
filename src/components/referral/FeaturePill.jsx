"use client";

import { motion } from "framer-motion";

export default function FeaturePill({ icon: Icon, label, bg, text }) {
  return (
    <motion.span
      className={`px-4 py-2 ${bg} ${text} font-ui font-medium text-sm rounded-full flex items-center gap-2`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="material-symbols-outlined text-[18px]">
        <Icon />
      </span>
      {label}
    </motion.span>
  );
}

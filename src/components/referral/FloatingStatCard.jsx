"use client";

import { motion } from "framer-motion";

/**
 * Replaces Tailwind's `animate-bounce` (with inline animation-duration /
 * animation-delay styles) with a Framer Motion loop, plus a one-time
 * entrance animation when it scrolls into view.
 */
export default function FloatingStatCard({
  icon:Icon,
  label,
  value,
  position,
  iconBg,
  valueColor,
  borderColor,
  duration,
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute ${position} z-20`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.3 }}
    >
      <motion.div
        className={`bg-surface-glass backdrop-blur-xl p-4 rounded-xl shadow-lg border ${borderColor}`}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}
          >
            <span className="material-symbols-outlined"><Icon /></span>
          </div>
          <div>
            <p className="font-ui font-medium text-sm text-on-surface-variant">
              {label}
            </p>
            <p
              className={`font-serif text-xl ${valueColor} font-bold`}
            >
              {value}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

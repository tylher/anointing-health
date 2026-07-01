"use client";

import { motion } from "framer-motion";
import { PROGRESS_GRADIENT } from "../../data/impact";
import { ITEM } from "./variants";

/**
 * Animated progress bar.
 *
 * The original used a `.progress-bar-fill` class with a `data-width` attribute
 * that a vanilla JS IntersectionObserver read and applied as `style.width`.
 * Here, `whileInView` on the fill div handles the same trigger, and Framer
 * Motion's layout animation smoothly transitions width from 0 → percentage%.
 *
 * `viewport={{ once: true }}` mirrors the original — it only fires once.
 */
export default function ProgressBar({ label, percentage, note }) {
  return (
    <motion.div variants={ITEM}>
      {/* Label row */}
      <div className="flex justify-between items-end mb-3">
        <span className="font-serif text-lg text-on-surface">
          {label}
        </span>
        <motion.span
          className="font-ui text-sm text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {percentage}%
        </motion.span>
      </div>

      {/* Track */}
      <div className="w-full bg-surface-variant rounded-full h-4 overflow-hidden">
        {/* Fill — animates from width:0 to the target percentage once in view */}
        <motion.div
          className="h-full rounded-full"
          style={{ background: PROGRESS_GRADIENT }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <p className="font-sans text-on-surface-variant mt-2">
        {note}
      </p>
    </motion.div>
  );
}

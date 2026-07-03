"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Only rendered for the Values card, but harmless to define unconditionally.
// Nested variants inherit the "show" trigger from the card above it, so the
// checklist quietly cascades in a beat after the card itself has settled —
// no separate viewport observer needed.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function ValueCard({
  title,
  accent,
  accentText,
  tint,
  icon: Icon,
  content,
  values,
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`h-1 w-full ${accent}`} />

      <div className="p-8 flex flex-col gap-5">
        {/* Icon medallion — the card's signature element. A soft blurred
            glow in the same tint sits behind the icon for a bit of depth
            without reaching for a photo. */}
        <motion.div
          whileHover={{ rotate: -6, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className={`relative w-16 h-16 rounded-2xl ${tint} flex items-center justify-center`}
        >
          <div
            className={`absolute -inset-3 rounded-full ${tint} blur-2xl opacity-60 -z-10`}
          />
          <Icon className={`w-7 h-7 ${accentText}`} />
        </motion.div>

        <h3 className="text-[26px] leading-tight text-on-background font-serif font-semibold">
          {title}
        </h3>

        {content && (
          <p className="text-on-surface-variant font-body leading-relaxed">
            {content}
          </p>
        )}

        {values && (
          <motion.ul
            variants={listVariants}
            className="flex flex-col gap-3 mt-1"
          >
            {values.map(({ label, icon: ValueIcon }) => (
              <motion.li
                key={label}
                variants={listItemVariants}
                className="flex items-center gap-3 text-on-surface-variant"
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full ${tint} shrink-0`}
                >
                  <ValueIcon className={`w-3.5 h-3.5 ${accentText}`} />
                </span>
                <span className="font-body text-sm">{label}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

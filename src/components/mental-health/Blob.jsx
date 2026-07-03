"use client";

import { motion, useReducedMotion } from "framer-motion";

const RADIUS_KEYFRAMES = [
  "68% 32% 55% 45% / 40% 58% 42% 60%",
  "58% 42% 45% 55% / 50% 48% 52% 42%",
  "68% 32% 55% 45% / 40% 58% 42% 60%",
];

// A soft, organic decorative shape. `morph` gives it a slow, looping
// border-radius drift; without it, it's just a static rounded blob —
// used where the brief calls for something low-key like the closing
// CTA's background texture. Respects prefers-reduced-motion by simply
// not looping.
export default function Blob({
  className = "",
  style = {},
  morph = false,
  duration = 22,
}) {
  const reduceMotion = useReducedMotion();
  const shouldMorph = morph && !reduceMotion;

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={style}
      animate={shouldMorph ? { borderRadius: RADIUS_KEYFRAMES } : undefined}
      transition={
        shouldMorph
          ? { duration, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    />
  );
}

"use client";

import { motion } from "framer-motion";

const MICRO_BLOBS = [
  { className: "top-20 left-1/4", size: 16, opacity: 0.2, blur: 2, duration: 6, delay: 0 },
  { className: "top-1/3 right-1/3", size: 24, opacity: 0.3, blur: 3, duration: 7, delay: 0.4 },
  { className: "bottom-1/4 left-1/5", size: 12, opacity: 0.4, blur: 1, duration: 5, delay: 0.8 },
  { className: "bottom-20 right-1/4", size: 32, opacity: 0.15, blur: 4, duration: 8, delay: 0.2 },
  { className: "top-1/2 left-10", size: 20, opacity: 0.25, blur: 2, duration: 6.5, delay: 1 },
];

/**
 * The original markup had these as static dots. Giving each a slow,
 * staggered vertical drift makes the background feel alive without
 * competing with the foreground content.
 */
export default function MicroBlobs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {MICRO_BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-primary ${blob.className}`}
          style={{
            width: blob.size,
            height: blob.size,
            opacity: blob.opacity,
            filter: `blur(${blob.blur}px)`,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
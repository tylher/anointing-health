"use client";

import { motion } from "framer-motion";

/**
 * Soft, slowly-morphing gradient blob used as ambient background decoration.
 * Replaces the original SVG <animate attributeName="d"> (SMIL) with a
 * Framer Motion keyframe animation on the path's `d` attribute.
 */
const BLOB_PRESETS = {
  amber: {
    gradientId: "blobGradAmber",
    stops: ["#fef5e0", "#fdf0ce"],
    viewBox: "0 0 400 360",
    duration: 22,
    keyframes: [
      "M300,100 Q350,150 320,250 Q290,350 150,320 Q50,290 80,150 Q110,50 300,100 Z",
      "M280,120 Q380,180 340,280 Q300,380 180,340 Q60,300 100,180 Q140,60 280,120 Z",
      "M300,100 Q350,150 320,250 Q290,350 150,320 Q50,290 80,150 Q110,50 300,100 Z",
    ],
  },
  blue: {
    gradientId: "blobGradBlue",
    stops: ["#e3eef9", "#d4e6f5"],
    viewBox: "0 0 680 580",
    duration: 18,
    keyframes: [
      "M450,150 Q600,100 550,300 Q500,500 300,550 Q100,500 150,300 Q200,100 450,150 Z",
      "M480,180 Q550,150 580,320 Q610,490 320,530 Q130,570 120,350 Q110,130 480,180 Z",
      "M450,150 Q600,100 550,300 Q500,500 300,550 Q100,500 150,300 Q200,100 450,150 Z",
    ],
  },
};

export default function AnimatedBlob({ preset = "amber", className = "" }) {
  const blob = BLOB_PRESETS[preset];
  if (!blob) return null;

  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox={blob.viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={blob.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={blob.stops[0]} stopOpacity={1} />
            <stop offset="100%" stopColor={blob.stops[1]} stopOpacity={1} />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#${blob.gradientId})`}
          animate={{ d: blob.keyframes }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ITEM } from "./variants";

export default function ImpactAreaCard({
  image,
  badge,
  badgeBg,
  badgeText,
  heading,
  body,
}) {
  return (
    <motion.div
      variants={ITEM}
      // Card lift + shadow deepening on hover
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(3,97,53,0.12)" }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm flex flex-col"
    >
      {/* Image wrapper — overflow:hidden clips the zoom so it never bleeds out */}
      <div className="h-64 relative overflow-hidden">
        <motion.img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* Pill badge sits above the image — colour tokens from data */}
        <span
          className={`absolute top-4 left-4 ${badgeBg} ${badgeText} font-label-md text-label-md px-3 py-1 rounded-full shadow-sm backdrop-blur-sm bg-opacity-90`}
        >
          {badge}
        </span>
      </div>

      <div className="p-8">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
          {heading}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
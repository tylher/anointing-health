"use client";

import { motion } from "framer-motion";
import { ITEM } from "./UseReveal";
import { MdArrowForward } from "react-icons/md";

export default function PathwayCard({
  image,
  accentClass,
  accentColor,
  title,
  linkLabel,
  linkColor,
  linkHoverColor,
  href,
}) {
  return (
    <motion.div
      variants={ITEM}
      // Card lift on hover
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(3,97,53,0.13)" }}
      transition={{ duration: 0.25 }}
      className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(3,97,53,0.05)]"
    >
      {/* Image — scales via Framer Motion on card hover */}
      <div className="h-48 overflow-hidden">
        <motion.img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          // whileHover bubbles up from the parent motion.div because the
          // variant name "hover" is inherited through the motion tree.
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Content — accent border driven by data, not hardcoded class */}
      <div className={`p-6 border-t-4 ${accentClass}`}>
        <h3 className="font-serif text-xl text-primary mb-2">
          {title}
        </h3>

        <motion.a
          href={href}
          className={`inline-flex items-center ${linkColor} font-ui text-base font-bold mt-1`}
          // Colour transition handled by Framer Motion so it matches the
          // rest of the codebase; avoids mixing Tailwind group-hover with
          // Framer Motion hover states on the same element.
          whileHover={{ color: accentColor, x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {linkLabel}
          <span className="material-symbols-outlined ml-1 text-[18px]">
            <MdArrowForward />
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}

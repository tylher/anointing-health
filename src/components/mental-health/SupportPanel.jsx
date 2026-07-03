"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SupportPanel({ panel, isOpen, onToggle }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={!isOpen ? { y: -6 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm"
      style={{
        border: `1px solid ${isOpen ? panel.color : panel.tint}`,
        transition: "border-color 300ms ease",
      }}
    >
      <div
        className="h-1 w-full"
        style={{ backgroundColor: panel.color }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset"
        style={{ "--tw-ring-color": panel.color }}
      >
        <div className="h-[140px] w-full overflow-hidden relative group">
          <Image
            src={panel.photo}
            alt={panel.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif font-medium text-2xl text-[#181c20] mb-2">
            {panel.title}
          </h3>
          <p className="font-body text-sm text-[#3f4941] leading-relaxed line-clamp-2">
            {panel.teaser}
          </p>
          <span
            className="inline-block mt-3 text-[13px] font-sans font-bold"
            style={{ color: panel.color }}
          >
            {isOpen ? "Show less ↑" : "Learn more ↓"}
          </span>
        </div>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out px-6"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-body text-[15px] text-[#3f4941] leading-relaxed pb-4">
            {panel.description}
          </p>
          <ul className="flex flex-col gap-2 mb-4">
            {panel.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-[13px] font-sans font-bold"
                style={{ color: panel.color }}
              >
                <MdCheckCircle
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[#181c20]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block text-sm font-sans font-bold pb-6"
            style={{ color: panel.color }}
          >
            {panel.cta} →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

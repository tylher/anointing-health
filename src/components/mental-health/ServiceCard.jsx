"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

export default function ServiceCard({ card, index }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      <motion.div
        initial={{ borderLeftWidth: 1 }}
        whileHover={{ borderLeftWidth: 3, y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ borderLeftStyle: "solid", borderLeftColor: card.accent }}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full text-left px-8 py-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset"
          style={{ "--tw-ring-color": card.accent }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${card.tint}`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-medium text-[22px] text-[#181c20] mb-3">
                {card.title}
              </h3>
              <p className="font-body text-[15px] text-[#3f4941] leading-relaxed mb-3">
                {card.body}
              </p>
              <span
                className={`inline-block text-xs font-sans font-bold px-3 py-1 rounded-full ${card.tint}`}
              >
                {card.chip}
              </span>
            </div>
            <MdExpandMore
              aria-hidden="true"
              className={`w-6 h-6 flex-shrink-0 mt-1 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              style={{ color: card.accent }}
            />
          </div>
        </button>

        {/* Modern grid-template-rows accordion — animating 0fr -> 1fr is
            natively supported by current browsers and avoids measuring
            scrollHeight in JS. */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out px-8"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p className="font-body text-sm text-[#3f4941] leading-relaxed pb-7 pt-3 border-t border-outline-variant/60">
              {card.detail}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

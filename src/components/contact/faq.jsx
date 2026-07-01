"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { ITEM } from "./UseReveal";

export default function FaqItem({ id, dotColor, question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={ITEM} className="border-b border-[#e0e5f2] pb-4">
      <button
        id={id}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${dotColor} flex-shrink-0`} />
          <span className="font-sans md:text-lg text-on-surface font-semibold">
            {question}
          </span>
        </div>

        {/* Chevron rotates 180° when open — replaces the CSS transition-transform
            on the original .faq-icon span. */}
        <motion.span
          className="material-symbols-outlined text-outline-variant"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <MdExpandMore />{" "}
        </motion.span>
      </button>

      {/* AnimatePresence lets Framer Motion animate the element out when it
          unmounts. `height: "auto"` → `height: 0` produces a smooth
          accordion collapse without knowing the content height in advance. */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            role="region"
            aria-labelledby={id}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-sans text-sm md:text-base text-on-surface-variant py-2 pl-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

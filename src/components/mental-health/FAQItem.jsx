"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

export default function FAQItem({ item, index, dotColor }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
      className="border-b border-[#bfc9be]"
      style={{
        borderLeft: open ? "2px solid #036135" : "2px solid transparent",
        transition: "border-left-color 200ms ease",
      }}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center gap-3 py-5 pl-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <span
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: dotColor }}
          />
          <span
            className="flex-1 font-sans font-bold text-[15px]"
            style={{ color: open ? "#036135" : "#181c20" }}
          >
            {item.q}
          </span>
          <MdExpandMore
            aria-hidden="true"
            className={`w-5 h-5 flex-shrink-0 text-[#6f7a70] transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-in-out pl-6"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-body text-[15px] text-[#3f4941] leading-relaxed pb-5">
            {item.a}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

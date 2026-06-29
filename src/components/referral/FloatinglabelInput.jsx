"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Replaces the original CSS `peer` / `placeholder-shown` floating-label
 * trick with actual focus/value state, so the label position, size, and
 * color are driven by Framer Motion.
 */
export default function FloatingLabelInput({ id, label, type = "text", as = "input", rows }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  const sharedClassName = `w-full border-0 border-b-2 bg-transparent px-0 py-2 font-sans text-on-background focus:ring-0 transition-colors ${
    focused ? "border-primary" : "border-surface-variant"
  } ${as === "textarea" ? "resize-none" : ""}`;

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={sharedClassName}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={sharedClassName}
        />
      )}

      <motion.label
        htmlFor={id}
        className={`absolute left-0 font-sans pointer-events-none transition-colors ${
          isActive ? "text-primary" : "text-on-surface-variant"
        }`}
        initial={false}
        animate={{
          top: isActive ? "-1rem" : "0.5rem",
          fontSize: isActive ? "0.75rem" : "1rem",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>
    </div>
  );
}
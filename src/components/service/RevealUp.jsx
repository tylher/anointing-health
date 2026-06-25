// components/RevealUp.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.8,
        ease: [0.2, 0.8, 0.2, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

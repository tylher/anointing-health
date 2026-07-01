"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `to` once it enters the viewport.
 * `prefix` and `suffix` are string bookends around the integer (e.g. "↓ " / "%").
 * Uses Framer Motion's `animate()` with an `onUpdate` callback rather than a
 * motion value + useTransform, which avoids needing a motion.span and keeps
 * the number string a normal React child — easier to style.
 */
export default function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return (
    <span
      ref={ref}
      // tabular-nums keeps the layout stable as digits change width
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

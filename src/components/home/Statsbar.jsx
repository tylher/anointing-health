"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MdShield } from "react-icons/md";
import { stats } from "@/data/site";

/* ── Count-up hook ── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress); // ease-out quad
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ── Animated numeric stat ── */
function CountStat({ value, suffix, label }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-4">
      <div className="flex items-end gap-0.5">
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.25rem",
            fontWeight: 700,
            color: "var(--color-primary)",
            lineHeight: 1,
          }}
        >
          {count.toLocaleString()}
        </span>
        {suffix && (
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              lineHeight: 1,
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-on-surface-variant)",
          marginTop: "0.5rem",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Static string stat (e.g. "24/7") ── */
function StaticStat({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "2.25rem",
          fontWeight: 700,
          color: "var(--color-primary)",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-on-surface-variant)",
          marginTop: "0.5rem",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Icon stat ── */
function IconStat({ label }) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <MdShield
        className="text-4xl mb-1"
        style={{ color: "var(--color-primary)" }}
      />
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-on-surface-variant)",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Framer container ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="w-full py-10 relative z-20"
      style={{
        backgroundColor: "var(--color-surface-container-lowest)",
        borderTop: "1px solid var(--color-outline-variant)",
        borderBottom: "1px solid var(--color-outline-variant)",
      }}
    >
      <div className="page-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              {stat.type === "count" && (
                <CountStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              )}
              {stat.type === "static" && (
                <StaticStat value={stat.value} label={stat.label} />
              )}
              {stat.type === "icon" && <IconStat label={stat.label} />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { services } from "@/data/services-data";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MdArrowDownward, MdArrowForward, MdCheckCircle } from "react-icons/md";

// ─── Constants ────────────────────────────────────────────────────────────────

const TOTAL_PANELS = 6;
const SECTION_HEIGHT_VH = TOTAL_PANELS * 100;

const CV = {
  primary: "#036135",
  primaryContainer: "#2a7a4b",
  primaryFixed: "#a3f4ba",
  primaryFixedDim: "#88d8a0",
  secondary: "#7a5900",
  secondaryContainer: "#ffc64b",
  secondaryFixed: "#ffdea3",
  secondaryFixedDim: "#f6be43",
  tertiary: "#235492",
  tertiaryContainer: "#3f6dad",
  tertiaryFixed: "#d5e3ff",
  tertiaryFixedDim: "#a7c8ff",
  surface: "#f7f9ff",
  outlineVariant: "#bfc9be",
  onPrimary: "#ffffff",
  gradient: "linear-gradient(90deg, #036135 0%, #235492 50%, #7a5900 100%)",
};

// Each panel: a solid base color + the rgba version for the transparent end of the gradient
const PANEL_THEMES = [
  {
    solid: "#2a7a4b",
    solidRgb: "42,122,75",
    badge: "#a3f4ba",
    badgeText: "#00210e",
  },
  {
    solid: "#3f6dad",
    solidRgb: "63,109,173",
    badge: "#d5e3ff",
    badgeText: "#001b3c",
  },
  {
    solid: "#7a5900",
    solidRgb: "122,89,0",
    badge: "#ffdea3",
    badgeText: "#261900",
  },
  {
    solid: "#036135",
    solidRgb: "3,97,53",
    badge: "#88d8a0",
    badgeText: "#00210e",
  },
  {
    solid: "#1b3c52",
    solidRgb: "27,60,82",
    badge: "#a7c8ff",
    badgeText: "#001b3c",
  },
  {
    solid: "#3d2e00",
    solidRgb: "61,46,0",
    badge: "#f6be43",
    badgeText: "#261900",
  },
];

const DIRECTIONS = ["bottom", "top", "left", "right"];

// Carpet wipe: clipPath shrinks the hidden side from 100% → 0% as p goes 0 → 1
function carpetClip(dir, p) {
  const hidden = `${((1 - p) * 100).toFixed(2)}%`;
  const z = "0%";
  switch (dir) {
    case "bottom":
      return `inset(${hidden} ${z} ${z} ${z})`;
    case "top":
      return `inset(${z} ${z} ${hidden} ${z})`;
    case "left":
      return `inset(${z} ${hidden} ${z} ${z})`;
    case "right":
      return `inset(${z} ${z} ${z} ${hidden})`;
  }
}

// ─── Scroll helpers ───────────────────────────────────────────────────────────

function usePanelProgress(svp, index, total) {
  const start = index / total;
  const end = (index + 1) / total;
  return useTransform(svp, [start, end], [0, 1], { clamp: true });
}

// Active window: content starts entering at 15%, fully in at 80%
function useActiveProgress(pp) {
  return useTransform(pp, [0.1, 0.85], [0, 1], { clamp: true });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function CinematicServices() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Deterministic per-panel wipe direction. Math.random() here would run
  // during render and produce a different value on the server vs. the
  // client, which is a hydration mismatch waiting to happen. Cycling by
  // index keeps the variety but is stable across renders.
  const directions = useMemo(
    () => services.map((_, i) => DIRECTIONS[i % DIRECTIONS.length]),
    [],
  );

  // useLayoutEffect (not useEffect) so this resolves before the browser
  // paints — avoids a frame of the heavy desktop scroll-jacking layout
  // flashing on phones before swapping to <MobileServices />. Note this
  // only smooths the client-side transition; the very first server-rendered
  // paint is still the desktop markup, since `window` isn't available
  // during SSR. A fully flash-free version would need a CSS-only
  // (hidden/md:block) approach or server-side UA detection.
  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Mirrors the same index/total → (index+1)/total windows used by
    // usePanelProgress below. The previous Math.round(v * (total - 1))
    // used different bucket boundaries than the panels themselves, which
    // created a gap where the panel actually on screen had pointer-events
    // disabled while a still-hidden panel was marked "active" (and
    // therefore the only one receiving clicks).
    setActiveIndex(
      Math.max(0, Math.min(TOTAL_PANELS - 1, Math.floor(v * TOTAL_PANELS))),
    );
  });

  const scrollToPanel = useCallback(
    (i) => {
      // Skip if this dot is already active — otherwise clicking the
      // current panel's own dot snaps scroll back to the very start of
      // its window, which feels like an unintended jump backward.
      if (!containerRef.current || i === activeIndex) return;
      const h = containerRef.current.scrollHeight / TOTAL_PANELS;
      window.scrollTo({
        top: containerRef.current.offsetTop + h * i,
        behavior: "smooth",
      });
    },
    [activeIndex],
  );

  if (isMobile) return <MobileServices />;

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${SECTION_HEIGHT_VH}vh`, background: CV.surface }}
    >
      {/* Signature gradient rule — once per section */}
      <div
        className="absolute top-0 left-0 w-full z-50"
        style={{ height: 4, background: CV.gradient }}
      />

      <div
        className="h-screen sticky top-0 overflow-hidden w-full"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {services.map((service, index) => (
          <ServicePanel
            key={service.id}
            service={service}
            index={index}
            theme={PANEL_THEMES[index % PANEL_THEMES.length]}
            direction={directions[index]}
            scrollYProgress={scrollYProgress}
            total={TOTAL_PANELS}
            isActive={activeIndex === index}
          />
        ))}

        {/* Dot nav */}
        <nav
          className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50"
          aria-label="Service navigation"
        >
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPanel(i)}
              aria-label={`Go to service ${i + 1}`}
              style={{
                width: activeIndex === i ? 8 : 6,
                height: activeIndex === i ? 8 : 6,
                borderRadius: 9999,
                backgroundColor:
                  activeIndex === i ? CV.primary : CV.outlineVariant,
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}

function ServicePanel({
  service,
  index,
  theme,
  direction,
  scrollYProgress,
  total,
  isActive,
}) {
  const pp = usePanelProgress(scrollYProgress, index, total);
  const active = useActiveProgress(pp);

  // Carpet wipe — clipPath driven directly by scroll
  const clipPath = useTransform(active, (p) => carpetClip(direction, p));
  // Subtle scale bloom as carpet opens
  const carpetScale = useTransform(active, [0, 1], [0.67, 1.0]);

  // Image Ken Burns
  const imageScale = useTransform(active, [0, 1], [1.07, 1.0]);
  const imageOpacity = useTransform(active, [0, 0.25], [0.5, 1.0]);

  // Content stagger — each element owns a unique window on the active timeline
  const badgeOpacity = useTransform(active, [0.25, 0.52], [0, 1]);
  const badgeY = useTransform(active, [0.18, 0.52], [20, 0]);

  const iconOpacity = useTransform(active, [0.27, 0.56], [0, 1]);
  const iconY = useTransform(active, [0.29, 0.56], [20, 0]);

  const titleOpacity = useTransform(active, [0.36, 0.62], [0, 1]);
  const titleY = useTransform(active, [0.35, 0.62], [24, 0]);

  const descOpacity = useTransform(active, [0.43, 0.68], [0, 1]);
  const descY = useTransform(active, [0.38, 0.68], [20, 0]);

  const featOpacity = useTransform(active, [0.47, 0.74], [0, 1]);
  const featY = useTransform(active, [0.45, 0.74], [18, 0]);

  const ctaOpacity = useTransform(active, [0.54, 0.8], [0, 1]);
  const ctaY = useTransform(active, [0.52, 0.8], [16, 0]);

  return (
    <div
      className="absolute inset-0 flex items-center"
      style={{
        pointerEvents: isActive ? "auto" : "none",
        zIndex: isActive ? 2 : 1,
      }}
    >
      {/* ── Image column — full viewport height, sits behind carpet ── */}
      <div
        className="absolute right-0 top-0 bottom-0 overflow-hidden"
        style={{ width: "55%", zIndex: 0 }}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
          style={{ scale: imageScale, opacity: imageOpacity }}
        />
      </div>

      {/*
        ── Carpet ──
        - Width: 68% (left content area + ~25% into image)
        - Height: 78vh — shorter than the full-height image
        - Vertically centered so image peeks above and below
        - Background: solid→transparent gradient so image bleeds through
        - clipPath wipes in; stays fully revealed once active=1
      */}
      <motion.div
        className="absolute left-0"
        style={{
          width: "62%",
          height: "78vh",
          top: "50%",
          translateY: "calc(-50% + 60px)",
          clipPath,
          scale: carpetScale,
          transformOrigin: "center center",
          zIndex: 3,
          // Fixed left→right gradient, always
          background: `linear-gradient(to right,
      rgba(${theme.solidRgb}, 1) 0%,
      rgba(${theme.solidRgb}, 0.95) 50%,
      rgba(${theme.solidRgb}, 0.92) 80%,
      rgba(${theme.solidRgb}, 0.45) 100%)`,
          borderRadius: "0 1.5rem 1.5rem 0",
          boxShadow: `12px 0 56px rgba(${theme.solidRgb}, 0.22)`,
        }}
      >
        {/* Watermark number */}
        <div
          className="absolute bottom-0 left-4 pointer-events-none select-none"
          style={{
            fontFamily: "EB Garamond, serif",
            fontSize: "22rem",
            fontWeight: 700,
            color: "#ffffff",
            opacity: 0.04,
            lineHeight: 0.82,
          }}
        >
          {service.number}
        </div>

        {/* Brand gradient rule on right edge of carpet */}
        <div
          className="absolute top-8 bottom-8 right-0"
          style={{ width: 3, background: CV.gradient, borderRadius: 2 }}
        />
      </motion.div>

      {/* ── Content — sits on top of carpet, left 44%, vertically centered ── */}
      <div
        className="absolute left-0 flex flex-col justify-center"
        style={{
          width: "46%", // tighter — never reaches transparent zone
          height: "78vh",
          top: "50%",
          transform: "translateY(calc(-50% + 60px))", // clears navbar + filterbar
          paddingLeft: 64,
          paddingRight: 32,
          zIndex: 4, // above carpet
        }}
      >
        {/* Category badge + counter */}
        <motion.div
          style={{ opacity: badgeOpacity, y: badgeY }}
          className="mb-6 flex items-center gap-3"
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              backgroundColor: theme.badge,
              color: theme.badgeText,
              fontFamily: "DM Sans, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 4,
            }}
          >
            {service.category}
          </span>
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
            }}
          >
            0{index + 1} / 0{TOTAL_PANELS}
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div style={{ opacity: iconOpacity, y: iconY }} className="mb-5">
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 8,
              color: "#ffffff",
            }}
          >
            {/* react-icons renders an actual SVG, so the old
                `material-symbols-outlined` font-icon wrapper around it did
                nothing useful — sizing it directly via the `size` prop is
                explicit and matches how MdArrowDownward is already done
                below. */}
            <service.icon size={22} />
          </div>
        </motion.div>

        {/* Headline — EB Garamond, h2 spec from design guide */}
        <motion.h2
          style={{
            opacity: titleOpacity,
            y: titleY,
            fontFamily: "EB Garamond, serif",
            fontSize: 40,
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: 10,
          }}
        >
          {service.title}
        </motion.h2>

        {/* Description — Nunito Sans body-lg */}
        <motion.p
          style={{
            opacity: descOpacity,
            y: descY,
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.78)",
            marginBottom: 8,
          }}
        >
          {service.description}
        </motion.p>

        {/* Features */}
        <motion.ul
          style={{
            opacity: featOpacity,
            y: featY,
            marginBottom: 12,
            listStyle: "none",
            padding: 0,
          }}
        >
          {service.features.map((f, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                marginBottom: 7,
              }}
            >
              <MdCheckCircle
                size={16}
                style={{ marginTop: 3, color: theme.badge, flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                {f}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* CTA — DM Sans button spec */}
        <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
          <motion.a
            href={service.link}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              backgroundColor: "#ffffff",
              color: theme.solid,
              fontFamily: "DM Sans, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.02em",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(27,77,49,0.12)",
            }}
          >
            Explore {service.title}
            <MdArrowForward size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint — first panel only */}
      {index === 0 && isActive && (
        <motion.div
          className="absolute bottom-10 left-16 flex flex-col items-start gap-1 z-10"
          style={{ color: "rgba(255,255,255,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <MdArrowDownward size={14} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────

function MobileServices() {
  return (
    <section style={{ background: CV.surface, paddingBottom: 64 }}>
      <div style={{ height: 4, background: CV.gradient }} />

      {services.map((service, index) => {
        const theme = PANEL_THEMES[index % PANEL_THEMES.length];
        return (
          <div key={service.id} style={{ marginTop: index === 0 ? 0 : 12 }}>
            <div
              style={{
                width: "100%",
                height: 260,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                background: `linear-gradient(to bottom, ${theme.solid} 60%, rgba(${theme.solidRgb},0.85) 100%)`,
                padding: "28px 20px 36px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  backgroundColor: theme.badge,
                  color: theme.badgeText,
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: 4,
                  marginBottom: 16,
                }}
              >
                {service.category}
              </span>
              <h2
                style={{
                  fontFamily: "EB Garamond, serif",
                  fontSize: 30,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: 24,
                }}
              >
                {service.description}
              </p>

              <a
                href={service.link}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "13px 0",
                  backgroundColor: "#ffffff",
                  color: theme.solid,
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Explore {service.title}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

"use client";

import { services } from "@/data/services-data";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  forwardRef,
  Suspense,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

// Matches a filter-bar value against a service. Tries the most likely
// field names in order — adjust this if your services-data.js uses a
// different shape (e.g. an array of tags rather than a single category).
function matchesFilter(service, filter) {
  const needle = String(filter).toLowerCase();
  const candidates = [service.filter, service.category, service.id]
    .filter(Boolean)
    .map((v) => String(v).toLowerCase());
  return candidates.includes(needle);
}

// ─── Scroll helpers ───────────────────────────────────────────────────────────

function usePanelProgress(svp, index, total) {
  const start = index / total;
  const end = (index + 1) / total;
  return useTransform(svp, [start, end], [0, 1], { clamp: true });
}

// Active window: content starts entering at 15%, fully in at 80%
const ACTIVE_WINDOW = [0.2, 0.7];

function useActiveProgress(pp) {
  return useTransform(pp, ACTIVE_WINDOW, [0, 1], { clamp: true });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const CinematicServicesInner = forwardRef(
  function CinematicServicesInner(_props, ref) {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    // Deterministic per-panel wipe direction. Math.random() here would run
    // during render and produce a different value on the server vs. the
    // client, which is a hydration mismatch waiting to happen. Cycling by
    // index keeps the variety but is stable across renders.
    const directions = useMemo(
      () => services.map((_, i) => DIRECTIONS[i % DIRECTIONS.length]),
      [],
    );

    // useLayoutEffect (not useEffect) so this resolves before the browser
    // paints — avoids a frame of the heavy desktop layout flashing on phones
    // before swapping to <MobileServices />.
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

    // Cinematic background wash — the sticky viewport's own backdrop bleeds
    // from one panel's theme colour into the next as you scroll, so the
    // transition between panels feels like a mood/lighting change rather
    // than a hard cut. Framer Motion interpolates hex colour strings the
    // same way it interpolates numbers, so this is just a colour-valued
    // useTransform keyed to the same panel boundaries as everything else.
    const sectionBg = useTransform(
      scrollYProgress,
      Array.from({ length: TOTAL_PANELS }, (_, i) => i / TOTAL_PANELS),
      PANEL_THEMES.slice(0, TOTAL_PANELS).map((t) => t.solid),
    );

    useMotionValueEvent(scrollYProgress, "change", (v) => {
      // Mirrors the same index/total → (index+1)/total windows used by
      // usePanelProgress below, so the panel actually on screen is the one
      // marked active (and therefore the one receiving clicks).
      setActiveIndex(
        Math.max(0, Math.min(TOTAL_PANELS - 1, Math.floor(v * TOTAL_PANELS))),
      );
    });

    const REVEAL_POINT = 0.72;

    const scrollToPanel = useCallback((i) => {
      if (!containerRef.current) return;

      const panelHeight = window.innerHeight;
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;

      // Real scrollable distance for this section, matching what useScroll's
      // offset: ["start start", "end end"] actually measures — container
      // height minus one viewport height, NOT panelHeight * TOTAL_PANELS.
      // Using the wrong (larger) range here is what caused the overshoot
      // that grew with panel index.
      const totalScrollableDistance =
        containerRef.current.offsetHeight - panelHeight;

      // Map panel i's reveal point (in the same [0,1] progress space
      // usePanelProgress/scrollYProgress use) to an actual pixel offset.
      const targetProgress = (i + REVEAL_POINT) / TOTAL_PANELS;
      const target = containerTop + targetProgress * totalScrollableDistance;

      setIsNavigating(true);

      animate(window.scrollY, target, {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          window.scrollTo(0, value);
        },
        onComplete() {
          setIsNavigating(false);
        },
      });
    }, []);

    // Public API for the filter bar (or any other external trigger) to jump
    // to the panel matching a given category. Works on both the desktop
    // scroll-jacked layout and the mobile stacked layout.
    const scrollToCategory = useCallback(
      (filter) => {
        const targetIndex =
          !filter || filter === "all"
            ? 0
            : services.findIndex((s) => matchesFilter(s, filter));
        const idx = targetIndex === -1 ? 0 : targetIndex;

        if (isMobile) {
          document
            .getElementById(`service-panel-${services[idx].id}`)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          scrollToPanel(idx);
        }
      },
      [isMobile, scrollToPanel],
    );

    useImperativeHandle(ref, () => ({ scrollToCategory, scrollToPanel }), [
      scrollToCategory,
      scrollToPanel,
    ]);

    // Deep-link support: the Services sub-nav links to
    // `/services?service=<id>` (see data/site.js). Reading that query
    // param here and feeding it into the *same* scrollToCategory used by
    // the dot-nav means a sub-nav click lands exactly where a dot-nav
    // click would — no separate anchor-jump codepath, and therefore no
    // risk of landing on an in-between scroll offset where two panels'
    // clip-paths partially overlap.
    //
    // This re-runs whenever `requestedService` changes (clicking a
    // different sub-nav item while already on this page) or once
    // `isMobile` resolves to its real value (see the layout effect above),
    // so we don't jump using the wrong branch's scroll logic.
    const searchParams = useSearchParams();
    const requestedService = searchParams.get("service");

    useEffect(() => {
      if (!requestedService) return;
      scrollToCategory(requestedService);
    }, [requestedService, isMobile, scrollToCategory]);

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

        <motion.div
          className="h-screen sticky top-0 overflow-hidden w-full"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            backgroundColor: sectionBg,
          }}
        >
          {services.map((service, index) => (
            <ServicePanel
              key={service.id}
              service={service}
              id={service.id}
              index={index}
              isNavigating={isNavigating}
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
        </motion.div>
      </section>
    );
  },
);

export default forwardRef(function CinematicServices(props, ref) {
  // useSearchParams() inside CinematicServicesInner requires a Suspense
  // boundary — without one, Next.js bails out of static prerendering for
  // this whole route and the production build fails with "useSearchParams()
  // should be wrapped in a suspense boundary". This wrapper supplies that
  // boundary locally so the page file doesn't need to change, and forwards
  // the ref through to the actual component so scrollToCategory/
  // scrollToPanel are still reachable from outside (e.g. the sub-nav).
  return (
    <Suspense fallback={null}>
      <CinematicServicesInner {...props} ref={ref} />
    </Suspense>
  );
});

function ServicePanel({
  service,
  index,
  theme,
  direction,
  scrollYProgress,
  total,
  isActive,
  isNavigating,
  id,
}) {
  const pp = usePanelProgress(scrollYProgress, index, total);
  const scrollActive = useActiveProgress(pp);

  // Panel 0 should be fully visible the instant the page loads, not only
  // after the visitor starts scrolling — otherwise the hero sits blank
  // until they've scrolled ~10% into the first panel's window. We animate
  // a separate "entrance" progress from 0 → 1 on mount (only for the
  // first panel) and combine it with the scroll-driven progress via
  // Math.max, always using whichever is further along.
  //
  // Every other panel's entranceProgress must stay at its default of 0
  // (not 1) — Math.max(1, anything ≤ 1) is always 1, which would pin
  // those panels permanently "fully active" regardless of scroll.
  const entranceProgress = useMotionValue(0);

  useEffect(() => {
    if (index !== 0) return;
    const controls = animate(entranceProgress, 1, {
      duration: 1.1,
      ease: "easeOut",
      delay: 0.15,
    });
    return () => controls.stop();
  }, [index, entranceProgress]);

  const computedActive = useTransform(
    [entranceProgress, scrollActive],
    ([e, s]) => Math.max(e, s),
  );

  const active = computedActive;

  // Carpet wipe — clipPath driven directly by scroll (or the mount
  // animation, for panel 0)
  const clipPath = useTransform(active, (p) => carpetClip(direction, p));
  // Subtle scale bloom as carpet opens
  const carpetScale = useTransform(active, [0, 1], [0.67, 1.0]);

  // Image entrance — slides up or down into place (alternating per panel
  // for rhythm) while the existing Ken Burns scale/opacity still plays
  // underneath it, so the image arrives with both motion and a slow drift.
  const imageSlideFrom = index % 2 === 0 ? 70 : -70;
  const imageY = useTransform(active, [0, 0.6], [imageSlideFrom, 0], {
    clamp: true,
  });
  const imageScale = useTransform(active, [0, 1], [1.07, 1.0]);
  const imageOpacity = useTransform(active, [0, 0.3], [0, 1.0]);

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
      id={id}
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
          style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
        />
      </div>

      {/* ── Carpet ── */}
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

      {/* ── Content — sits on top of carpet, vertically centered ── */}
      <div
        className="absolute left-0 flex flex-col justify-center"
        style={{
          width: "46%",
          height: "78vh",
          top: "50%",
          transform: "translateY(calc(-50% + 60px))",
          paddingLeft: 64,
          paddingRight: 32,
          zIndex: 4,
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
            <service.icon size={22} />
          </div>
        </motion.div>

        {/* Headline */}
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

        {/* Description */}
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

        {/* CTA */}
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
          <div
            key={service.id}
            id={`service-panel-${service.id}`}
            style={{ marginTop: index === 0 ? 0 : 12, scrollMarginTop: 72 }}
          >
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

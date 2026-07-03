"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import RevealUp from "./RevealUp";
import { howItWorksSteps } from "@/data/services-data";

// ---- shared easing helpers ----
function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
// Ease-out cubic — arrives slowly rather than linearly, reads as more
// deliberate/cinematic than a plain smoothstep.
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// A distinct resting tilt per card index so the stack reads as fanned,
// not a uniform pile. Extend this array if you add more steps.
const TILTS = [-4, 5, -3, 6, -5];

// How much scroll (in "card units") each entrance plays out over. Kept at
// exactly 1 so a card's entry only starts once scroll actually reaches its
// own segment — at rest (scrollY = 0) every card except the first sits
// fully off-screen, 70vh below the container, with zero overlap into the
// previous card's segment.
const ENTRY_SPAN = 1;

function StepLayer({ step, index, total, scrollYProgress }) {
  const restTilt = TILTS[index % TILTS.length];
  const fanX = index % 2 === 0 ? -22 : 22;
  // The last step has nothing after it to hand off to — shrinking it away
  // once you scroll past its landing point would just leave blank space
  // for the rest of the track. It stays fully visible instead.
  const isLast = index === total - 1;

  // local < 0  -> hasn't entered yet, sitting below the container (70vh down)
  // local == 0 -> just landed, fully active, on top of the stack
  // local > 0  -> later cards have since entered on top of it; it recedes
  //               into the stack, tilted at its resting angle, blurred
  //               and dimmed so it reads as "behind glass" not clutter
  const local = useTransform(scrollYProgress, (v) => v * total - index);

  const yVh = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return lerp(70, 0, easeOutCubic(t));
    }
    const depth = clamp(l, 0, 5);
    return -depth * 3.2;
  });

  const scale = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return lerp(0.78, 1, easeOutCubic(t));
    }
    if (isLast) return 1;
    const depth = clamp(l, 0, 5);
    return clamp(1 - depth * 0.12, 0.52, 1);
  });

  const rotate = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return lerp(0, restTilt, easeOutCubic(t));
    }
    return restTilt;
  });

  const opacity = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return easeOutCubic(t);
    }
    const depth = clamp(l, 0, 5);
    return clamp(1 - depth * 0.16, 0.28, 1);
  });

  const x = useTransform(local, (l) => fanX * clamp(l, 0, 1));

  const blur = useTransform(local, (l) => {
    if (l <= 0) return 20;
    const depth = clamp(l, 0, 5);
    return 20 + depth * 9;
  });
  const brightness = useTransform(local, (l) => {
    if (l <= 0) return 1;
    const depth = clamp(l, 0, 5);
    return clamp(1 - depth * 0.14, 0.55, 1);
  });
  const backdropFilter = useTransform(
    [blur, brightness],
    ([b, br]) => `blur(${b}px) brightness(${br})`,
  );

  // Image cards get their own offset math, separate from the glass card's
  // yVh — the glass card is small enough that 70vh of travel hides it
  // completely, but this image is 86vh tall and nearly fills the sticky
  // viewport at rest. 70vh (let alone the 35vh it was getting via
  // yVh * 0.5) isn't nearly enough travel to clear the screen, which is
  // why an upcoming image was visibly creeping in from the bottom before
  // its turn. 115vh guarantees it's fully below the fold until it enters.
  const imgYVh = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return lerp(115, 0, easeOutCubic(t));
    }
    if (isLast) return 0;
    // Once its turn has passed, drift up slightly while it shrinks and
    // fades away below — reads as "lifting off the stack" rather than
    // just dissolving in place.
    const t = clamp(l / 0.6, 0, 1);
    return -t * 8;
  });
  const imgY = useTransform(imgYVh, (v) => `${v}vh`);
  const glassY = useTransform(yVh, (v) => `${v}vh`);

  // Image cards: scale-only, no opacity animation — same character as
  // before. Once a card's turn has passed, it now shrinks to nothing
  // within a short scroll window (depth 0 → 0.6) instead of settling at
  // a 0.48 floor — at that floor it never actually left, it just sat
  // there smaller, forever, underneath every image that followed. Only
  // the current step's image should ever be visible; scaling fully to 0
  // (rather than fading) is what makes that true while keeping the
  // original no-opacity feel.
  const imgScale = useTransform(local, (l) => {
    if (l <= 0) {
      const t = clamp((l + ENTRY_SPAN) / ENTRY_SPAN, 0, 1);
      return lerp(0.78, 1, easeOutCubic(t));
    }
    if (isLast) return 1;
    const t = clamp(l / 0.6, 0, 1);
    return lerp(1, 0, t * t); // ease-in — accelerates away rather than a linear shrink
  });

  // Static per-card stacking order: later steps render on top of earlier
  // ones once both are visible, matching the order they land in.
  const zIndex = 100 + index;

  return (
    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[0.8fr_1.6fr] items-center px-[6vw] gap-[3vw] pointer-events-none">
      <motion.div
        style={{
          x,
          y: glassY,
          rotate,
          scale,
          opacity,
          zIndex,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        }}
        // Note: base border/shadow live in Tailwind classes; the animated
        // backdropFilter above overrides the blur amount at runtime while
        // transition-[transform,opacity,filter] (also in classes) smooths
        // every scroll-driven update into a glide.
        className="pointer-events-auto bg-white/[0.055] border border-white/[0.16] rounded-[28px] p-9 md:p-10 max-w-[420px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] origin-center transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <span className="block font-headline italic text-[#C9A84C] text-sm tracking-[0.16em] mb-3">
          {step.number} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="font-headline font-medium text-white text-2xl md:text-[34px] mb-4 leading-tight">
          {step.title}
        </h3>
        <p className="text-white/75 text-base leading-relaxed">
          {step.description}
        </p>
      </motion.div>

      {/* Image card: 2–3x the visual weight of the content box (wider grid
          column + taller fixed height), sliding and scaling only — no
          opacity animation. Scale alone now goes fully to 0 on exit, so
          it disappears completely rather than lingering at a floor. */}
      <motion.div
        style={{ y: imgY, scale: imgScale, zIndex }}
        className="pointer-events-auto relative h-[86vh] rounded-[28px] overflow-hidden shadow-[0_50px_100px_-24px_rgba(0,0,0,0.65)] origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${step.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a14]/70 via-transparent to-transparent" />
        <div className="absolute right-6 bottom-4 font-headline text-white/10 text-[220px] leading-none">
          {step.number}
        </div>
      </motion.div>
    </div>
  );
}

function ProgressRail({ scrollYProgress, total, onDotClick }) {
  const [progress, setProgress] = useState(0);
  const fillHeight = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  // A card is "completely in view" the moment its local progress hits 0
  // (see StepLayer: local = v * total - index), which happens at
  // v = index / total. That's the activation threshold for each dot —
  // not the segment midpoint, so the dot lights up in sync with the
  // card actually landing rather than partway through its entrance.
  const dotThreshold = (i) => i / total;

  // Visual placement is a separate axis from activation: dots are spread
  // evenly across the full bar, first one pinned to the very top (0%),
  // last one pinned to the very bottom (100%) — not inset by half a
  // segment on each end.
  const dotPosition = (i) => (total > 1 ? i / (total - 1) : 0);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 w-5 h-[46vh] z-[50]">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/15 rounded-full">
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-0 left-0 w-full bg-[#1D9E75] rounded-full"
        />
      </div>

      {Array.from({ length: total }).map((_, i) => {
        const isActive = progress >= dotThreshold(i);
        return (
          <button
            key={i}
            aria-label={`Go to step ${i + 1}`}
            onClick={() => onDotClick(i)}
            style={{ top: `${dotPosition(i) * 100}%` }}
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 z-[2] ${
              isActive
                ? "bg-[#1D9E75] border-[#1D9E75] scale-125 shadow-[0_0_0_5px_rgba(29,158,117,0.22)]"
                : "bg-[#0e1a14] border-white/35"
            }`}
          />
        );
      })}
    </div>
  );
}

export default function HowItWorks() {
  const trackRef = useRef(null);
  const total = howItWorksSteps.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const handleDotClick = (i) => {
    if (!trackRef.current) return;
    const trackTop = trackRef.current.offsetTop;
    const trackHeight = trackRef.current.offsetHeight;
    const scrollable = trackHeight - window.innerHeight;
    // Matches dotThreshold in ProgressRail — lands exactly where that
    // card becomes fully visible, same moment the dot lights up.
    const targetProgress = i / total;
    window.scrollTo({
      top: trackTop + targetProgress * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0e1a14] w-full" id="how-it-works">
      {/* total * ~130vh gives each transition more scroll distance to play
          out over — that extra runway is what makes the motion read as
          slow/deliberate rather than snappy. Tune the multiplier to taste. */}
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${total * 150}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {howItWorksSteps.map((step, index) => (
            <StepLayer
              key={step.number}
              step={step}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <ProgressRail
        scrollYProgress={scrollYProgress}
        total={total}
        onDotClick={handleDotClick}
      />

      <div className="py-16 text-center">
        <RevealUp>
          <span className="inline-block px-8 py-3 rounded-full bg-[#1D9E75] text-[#0e1a14] text-sm font-bold shadow-sm">
            Available 7 days a week, flexible hours to suit you
          </span>
        </RevealUp>
      </div>
    </section>
  );
}
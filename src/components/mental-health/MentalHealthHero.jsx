"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { heroTrustChips, heroPhotos } from "@/data/mental-health-data";

export default function MentalHealthHero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Blob A drifts upward at 25% of scroll speed, Blob B at 15% — the
  // hero gradually reveals the next section instead of cutting hard.
  const blobAY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const blobBY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Deterministic scattered dot positions (not Math.random() at render
  // time — that would differ between server and client and trigger a
  // hydration mismatch). A simple spread formula gives enough visual
  // randomness without actually being random.
  const dots = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        top: `${8 + ((i * 37) % 84)}%`,
        left: `${6 + ((i * 53) % 88)}%`,
        size: 8 + (i % 4) * 3,
      })),
    [],
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#f7f9ff]"
    >
      {/* Blob A — dominant, upper-left, bleeding off the edges */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? undefined : blobAY }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 0.9,
            scale: 1,
            borderRadius: reduceMotion
              ? "68% 32% 55% 45% / 40% 58% 42% 60%"
              : [
                  "68% 32% 55% 45% / 40% 58% 42% 60%",
                  "58% 42% 45% 55% / 50% 48% 52% 42%",
                  "68% 32% 55% 45% / 40% 58% 42% 60%",
                ],
          }}
          transition={{
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 1, ease: "easeOut" },
            borderRadius: reduceMotion
              ? undefined
              : { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-20 -left-32 w-[900px] h-[700px]"
          style={{ backgroundColor: "#eaf5ef" }}
        />
      </motion.div>

      {/* Blob B — accent, bottom-right, with its own float loop */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduceMotion ? undefined : blobBY }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            borderRadius: reduceMotion
              ? "62% 38% 48% 52% / 44% 46% 54% 56%"
              : [
                  "62% 38% 48% 52% / 44% 46% 54% 56%",
                  "50% 50% 40% 60% / 55% 45% 55% 45%",
                  "62% 38% 48% 52% / 44% 46% 54% 56%",
                ],
            y: reduceMotion ? 0 : [0, -20, 0],
          }}
          transition={{
            borderRadius: reduceMotion
              ? undefined
              : { duration: 26, repeat: Infinity, ease: "easeInOut" },
            y: reduceMotion
              ? undefined
              : { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[320px]"
          style={{ backgroundColor: "#fef5e0", opacity: 0.75 }}
        />
      </motion.div>

      {/* Scattered detail circles — static */}
      {dots.map((d, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-primary/40"
          style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
        />
      ))}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 min-h-screen grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-12 py-24">
        {/* Left column — text */}
        <div>
          <span className="block font-sans font-bold text-[11px] tracking-[0.16em] uppercase text-primary mb-4">
            Mental Health Support &amp; Outreach
          </span>
          <h1 className="font-serif font-semibold text-[#181c20] text-4xl lg:text-[54px] leading-[1.12] tracking-[-0.02em] mb-5">
            Care that reaches you where you are
          </h1>
          <p className="font-body text-[17px] leading-[1.65] text-[#3f4941] max-w-[480px] mb-7">
            We provide proactive, community-based mental health support
            across the United Kingdom — meeting people at home, in crisis,
            and in recovery with the same consistency, dignity, and
            expertise.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {heroTrustChips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold ${chip.tint}`}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-7 h-[52px] rounded-lg bg-primary text-white font-sans font-bold text-[15px] hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Support Today
            </a>
            <a
              href="#refer"
              className="inline-flex items-center px-7 h-[52px] rounded-lg bg-tertiary text-white font-sans font-bold text-[15px] hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            >
              Refer Someone
            </a>
          </motion.div>
        </div>

        {/* Right column — layered photo composition */}
        <div className="relative h-[420px] sm:h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 right-0 w-[75%] aspect-[3/4] overflow-hidden border-[5px] border-white shadow-[0_24px_56px_rgba(3,97,53,0.16)]"
            style={{ borderRadius: "52% 48% 60% 40% / 48% 55% 45% 52%" }}
          >
            <Image
              src={heroPhotos.main}
              alt="A community mental health worker walking through a residential street, bag in hand"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-0 left-0 w-[38%] aspect-square rounded-[20px] overflow-hidden border-4 border-white shadow-lg"
          >
            <Image
              src={heroPhotos.secondary}
              alt="Close-up of a support worker and service user's hands together at a table"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.5 }}
            className="absolute top-4 left-0 bg-white rounded-[14px] px-[18px] py-3 shadow-[0_6px_20px_rgba(0,0,0,0.10)]"
          >
            <div className="font-serif font-semibold text-[28px] text-primary leading-none">
              12,000+
            </div>
            <div className="font-sans text-[11px] text-[#6f7a70] mt-1">
              individuals supported
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="absolute bottom-10 left-[34%] bg-[#C9961A] text-[#181c20] font-sans font-bold text-xs px-[14px] py-1.5 rounded-full"
          >
            CQC Regulated Service
          </motion.div>
        </div>
      </div>
    </section>
  );
}

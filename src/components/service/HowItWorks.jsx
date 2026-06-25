"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealUp from "./RevealUp";
import { howItWorksSteps } from "@/data/services-data";


function ParallaxCard({
  step,
  index,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[560px] overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${step.image})`,
          y: bgY,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0e1a14 0%, rgba(14,26,20,0.8) 40%, transparent 100%)",
        }}
      />
      <div className="relative h-full max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center">
        <div className="w-full md:w-1/3">
          <RevealUp>
            <div className="ghost-number font-headline text-[120px] md:text-[160px] leading-none mb-4 font-bold">
              {step.number}
            </div>
            <h3 className="font-headline font-medium text-white text-2xl md:text-[32px] mb-4">
              {step.title}
            </h3>
            <p className="text-base md:text-lg text-white/80 line-clamp-2">
              {step.description}
            </p>
          </RevealUp>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-[#0e1a14] w-full" id="how-it-works">
      {howItWorksSteps.map((step, index) => (
        <ParallaxCard key={step.number} step={step} index={index} />
      ))}
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

// components/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import RevealUp from "./RevealUp";
import { heroImages } from "@/data/services-data";


export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={heroImages.left}
          />
        </div>
        <div className="w-1/2 h-full">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={heroImages.right}
          />
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,82,43,0.15) 0%, rgba(0,82,43,0.65) 100%)",
        }}
      />

      <div className="absolute w-full h-full bg-black/40"></div>

      <div className="absolute bottom-10 w-full pb-12 px-6 lg:px-8 max-w-[1280px] left-1/2 -translate-x-1/2 text-center md:text-left">
        <RevealUp>
          <h1 className="font-serif font-semibold text-white mb-2 text-5xl md:text-7xl leading-tight md:max-w-3xl">
            Everything we offer, tailored to you
          </h1>
        </RevealUp>
        <RevealUp delay={0.15}>
          <p className="text-lg md:text-xl font-sans text-white/90 max-w-2xl mt-3">
            From home care to mental health outreach — flexible, compassionate
            services across the UK.
          </p>
        </RevealUp>
      </div>
    </section>
  );
}
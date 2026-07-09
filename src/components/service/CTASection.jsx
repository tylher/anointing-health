"use client";

import { ctaBackgroundImage } from "@/data/services-data";
import { motion } from "framer-motion";
import RevealUp from "./RevealUp";

export default function CTASection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute bg-gradient-to-b from-[#036135] to-[#235492] opacity-60 h-full w-full z-10" />
      <div className="absolute inset-0">
        <img
          alt="Supportive care"
          className="w-full h-full object-cover"
          src={ctaBackgroundImage}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(201,150,26,0.35), transparent)",
          }}
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <RevealUp>
          <h2 className="font-headline text-3xl md:text-4xl text-white mb-4">
            Ready to find the right support?
          </h2>
        </RevealUp>
        <RevealUp delay={0.15}>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            Speak to our team today, no pressure, no obligation.
          </p>
        </RevealUp>
        <RevealUp delay={0.3}>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.a
              className="px-8 py-3 bg-white text-[#036135] font-medium rounded-full shadow-lg cursor-hoverable"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
            >
              Get Support
            </motion.a>
            <motion.a
              className="px-8 py-3 bg-[#235492] text-white font-medium rounded-full shadow-lg cursor-hoverable"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/referral"
            >
              Refer Someone
            </motion.a>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { quoteBreakPhoto } from "@/data/mental-health-data";

export default function QuoteBreak() {
  return (
    <section
      className="relative w-full h-[360px] md:h-[520px] bg-cover md:bg-fixed"
      style={{
        backgroundImage: `url(${quoteBreakPhoto})`,
        backgroundPosition: "center 40%",
      }}
      aria-label="A support worker and service user sitting together outdoors in conversation"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(3,97,53,0.82) 0%, rgba(3,97,53,0.55) 45%, rgba(3,97,53,0.10) 80%)",
        }}
      />
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 lg:pl-[8%] flex items-center">
        <div className="max-w-[520px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="w-12 h-0.5 bg-[#C9961A] mb-6"
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-serif italic font-semibold text-white text-3xl md:text-[44px] leading-[1.15] mb-4"
          >
            Recovery is not a destination. It&apos;s a direction.
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="font-body text-[15px] text-white/80"
          >
            Everything we do is designed to move people one step further
            toward the life they want to live.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

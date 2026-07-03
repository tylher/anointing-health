"use client";

import { motion } from "framer-motion";
import Blob from "./Blob";

const buttons = [
  { label: "Get Support", href: "/contact", cls: "bg-white text-primary" },
  {
    label: "Refer Someone",
    href:"/referral",
    cls: "bg-transparent text-white border border-white",
  },
  { label: "Call Us Now", href: "tel:+44", cls: "bg-[#C9961A] text-[#181c20]" },
];

export default function ClosingCTA() {
  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #036135 0%, #1A4E8C 100%)" }}
    >
      <Blob
        className="w-[600px] h-[600px] -top-40 -left-40"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      />
      <Blob
        className="w-[400px] h-[400px] -bottom-32 -right-32"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-[640px] mx-auto px-6 text-center"
      >
        <h2 className="font-serif italic font-semibold text-3xl md:text-[44px] text-white mb-5">
          You don&apos;t have to navigate this alone.
        </h2>
        <p className="font-body text-base md:text-[17px] leading-relaxed text-white/85 mb-9">
          Whether you&apos;re looking for support for yourself, searching
          on behalf of someone you love, or making a professional referral
          — we&apos;re here. A real person will answer.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {buttons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              className={`inline-flex items-center justify-center h-11 px-6 rounded-lg font-sans font-bold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${btn.cls}`}
            >
              {btn.label}
            </motion.a>
          ))}
        </div>

        <p className="font-sans text-xs text-white/55">
          Lines open 7 days · CQC regulated · DBS checked staff
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { liveInCareFeatures, liveInCarePhoto } from "@/data/mental-health-data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LiveInCare() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Halo blob unifying the photo and panel columns */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(3,97,53,0.05)" }}
      />

      <div className="relative flex flex-col lg:flex-row min-h-[640px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] min-h-[360px] lg:min-h-0"
        >
          <Image
            src={liveInCarePhoto}
            alt="An elderly person relaxing in their sitting room while a live-in carer prepares something in the kitchen behind them"
            fill
            className="object-cover lg:rounded-r-[24px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.4 }}
            className="absolute bottom-4 right-[-16px] lg:right-[-20px] bg-white rounded-[14px] px-5 py-3 shadow-lg z-10"
          >
            <div className="font-serif font-semibold text-[22px] text-tertiary leading-none">
              24/7
            </div>
            <div className="font-sans text-[11px] text-[#6f7a70] mt-1">
              care support
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="w-full lg:w-[55%] px-8 py-16 lg:px-14 lg:py-16"
          style={{ backgroundColor: "#00522b" }}
        >
          <span className="block font-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#88d8a0] mb-4">
            Live-in Care
          </span>
          <h2 className="font-serif italic font-semibold text-3xl lg:text-[40px] text-white mb-5">
            Constant care, in the comfort of your own home.
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed mb-10 max-w-[520px]">
            Live-in care means a trained, dedicated carer stays with you
            around the clock — providing fully personalised support that
            adapts to your needs, preserving your independence and the
            familiarity of your own home.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col gap-5 mb-10"
          >
            {liveInCareFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.id}
                  variants={cardVariants}
                  className="rounded-2xl px-7 py-6"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <Icon
                    className="w-6 h-6 mb-3"
                    style={{ color: "#88d8a0" }}
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-bold text-base text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-white/72 leading-relaxed mb-4">
                    {f.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {f.chips.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full text-[11px] font-sans font-bold text-white"
                        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.a
            href="#contact"
            whileHover={{ y: -2, filter: "brightness(1.08)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-[52px] rounded-[10px] bg-primary text-white font-sans font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Enquire About Live-in Care →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

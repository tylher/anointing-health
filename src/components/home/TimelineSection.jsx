"use client";

import { timelineSteps } from "@/data/timeline-data";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const lineControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      lineControls.start("visible");
    }
  }, [isInView, lineControls]);

  const stepVariants = (idx) => {
    return {
      hidden: { opacity: 0, x: idx % 2 == 0 ? -30 : 30 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
      }),
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      id="our-approach"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed w-full"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida/AP1WRLsZowYYqUul8LU9WdeKDDMwqaY7dimgl3sl1d5nliu6x0r5s9ICR1MTZakI7yhKxOAnFLoziE6bFpb2qV-nrb8LkYKhahX02p-ikVq8iCrMgAOxQhQdMCC3b-IA_-9-gxL_r5XJZIusChYfzxV-z1af5Clnx2xEysp8M7Hn9Y8Bx-jGkPVoFe8TFo2Jh3fcDXfiGVe9cP4vC3t8AaznKpAJqX-dPX2ft6j39sK0PubzKx3Ml8qgj7mJX75G')",
        }}
      >
        <div className="absolute inset-0 bg-[#00522b]/82 opacity-40 backdrop-blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-container-max mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[36px] md:text-[52px] font-medium italic text-white mb-4">
            Your journey with us
          </h2>
          <p className="font-sans text-[16px] text-[#b5ffc9]">
            From first contact to lasting independence — we're with you at every
            step.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <motion.div
            className="hidden md:block absolute top-5 left-0 w-full h-0.5 border-t-2 border-dashed border-white/35 z-0"
            initial={{ width: "0%" }}
            animate={lineControls}
            variants={{
              visible: {
                width: "100%",
                transition: { duration: 2, ease: "easeOut" },
              },
            }}
          />

          {/* Mobile connecting line */}
          <motion.div
            className="md:hidden absolute left-[calc(50%-1px)] top-0 h-full w-0.5 border-l-2 border-dashed border-white/35 z-0"
            initial={{ height: "0%" }}
            animate={lineControls}
            variants={{
              visible: {
                height: "100%",
                transition: { duration: 2, ease: "easeOut" },
              },
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={stepVariants(idx)}
                className={`group flex flex-col md:items-center md:text-center gap-4 w-full `}
              >
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "#C9961A" }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 transition-all duration-300 absolute md:relative left-[calc(50%-20px)] md:left-0"
                >
                  <span className="font-bold font-serif text-primary group-hover:text-[#181c20] transition-colors">
                    {step.number}
                  </span>
                </motion.div>
                <div
                  className={`md:w-auto w-1/2 ${idx % 2 == 0 ? "self-start md:self-center pr-5 md:pr-0" : "self-end pl-8 md:self-center md:pl-0"}`}
                >
                  <h4 className="font-ui text-[14px] font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="font-sans text-[13px] text-[#b5ffc9]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo strip */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:flex md:justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {timelineSteps.flatMap((step) =>
            step.images.map((img, i) => (
              <img
                key={`${step.id}-${i}`}
                alt={img.alt}
                className="w-full md:w-[120px] h-[80px] object-cover rounded-lg border-2 border-white opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-105"
                src={img.src}
              />
            )),
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { clinicalApproach, pillars } from "@/data/about";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PillarCard } from "./PillarCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const MotionImage = motion(Image);

export function ClinicalApproachSection() {
  const imageWrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
  return (
    <section className="py-10 lg:py-16 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading title="Our Clinical Approach" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column: image + quote */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            <motion.div
              ref={imageWrapRef}
              className="relative rounded-[24px] overflow-hidden shadow-lg h-[500px]"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <MotionImage
                src={clinicalApproach.image}
                alt={clinicalApproach.author}
                width={800}
                height={1000}
                style={{ y: imageY, scale: 1.12 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10 h-full w-full" />

              <motion.div
                className="absolute bottom-0 left-0 p-8 z-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={quoteReveal}
              >
                <blockquote className="text-[32px] text-on-primary leading-tight mb-4 font-ui italic">
                  "{clinicalApproach.quote}"
                </blockquote>
                <div>
                  <div className="text-on-primary font-serif font-semibold">
                    {clinicalApproach.author}
                  </div>
                  <div className="text-primary-fixed-dim text-sm font-sans">
                    {clinicalApproach.role}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.p
              className="text-on-surface-variant font-sans"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {clinicalApproach.description}
            </motion.p>
          </div>

          {/* Right column: pillar grid */}
          <motion.div
            className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridContainer}
          >
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} index={i} {...pillar} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedBlob from "./AnimatedBlob";
import MicroBlobs from "./MicroBlob";
import FeaturePill from "./FeaturePill";
import FloatingStatCard from "./FloatingStatCard";
import {
  HERO_BADGE,
  HERO_HEADING,
  HERO_PARAGRAPH,
  FEATURE_PILLS,
  HERO_IMAGE,
  FLOATING_STATS,
} from "../../data/referral";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ReferralsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-white ">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AnimatedBlob
          preset="amber"
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px]"
        />
        <AnimatedBlob
          preset="blue"
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px]"
        />
      </div>

      {/* Drifting micro particles */}
      <MicroBlobs />

      <div className="max-w-container-max mx-auto px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="inline-block px-3 py-1 bg-surface-container-low text-primary font-ui text-xs font-semibold rounded-full mb-4 border border-primary/10"
              >
                {HERO_BADGE}
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-3xl md:text-5xl font-bold text-on-background mb-6"
              >
                {HERO_HEADING}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans md:text-lg font-medium text-on-surface-variant max-w-xl"
              >
                {HERO_PARAGRAPH}
              </motion.p>
            </div>

          

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 "
            >
              <motion.a
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-ui text-sm shadow-sm font-medium"
                href="#referral-form"
              >
                Submit a Referral
              </motion.a>
             
            </motion.div>
          </motion.div>

          {/* Right content: image + floating stats */}
          <div className="relative h-[600px] flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-primary/10 blob-mask scale-110"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: -12, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.img
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              className="relative w-[400px] h-[500px] object-cover blob-mask border-4 border-white shadow-[0_8px_30px_rgba(3,97,53,0.15)] z-10"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            />

            {FLOATING_STATS.map((stat) => (
              <FloatingStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

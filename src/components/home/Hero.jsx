"use client";

import { heroImages, trustChips } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MdAdminPanelSettings,
  MdArrowDownward,
  MdArrowForward,
  MdEventAvailable,
  MdHealthAndSafety,
  MdStarHalf,
  MdStarRate,
  MdVerified,
} from "react-icons/md";

/* ── Chip icons mapped by label ── */
const chipIcons = {
  "CQC Compliant": <MdVerified className="text-[color:var(--color-primary)]" />,
  "DBS Checked": (
    <MdAdminPanelSettings className="text-[color:var(--color-primary)]" />
  ),
  "7 Days a Week": (
    <MdEventAvailable className="text-[color:var(--color-primary)]" />
  ),
};

/* ── Framer variants ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const floatUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="hero-gradient min-h-[90vh] pt-16 pb-20 relative overflow-hidden flex items-center  px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
      {/* Background blobs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(0,71,37,0.06) 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(255,198,75,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">
        {/* ──────── Left: Text ──────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 z-10"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
            }}
          >
            Mental Health · Home Care · Outreach
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "var(--color-on-background)",
            }}
            className="text-[2rem] md:text-[3rem]"
          >
            Bringing Care to the{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--color-primary)" }}
            >
              Heart
              <svg
                className="absolute w-full h-3 -bottom-1 left-0"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ color: "var(--color-secondary-container)" }}
              >
                <motion.path
                  d="M0 5 Q 50 10 100 5"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            of Your Community
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--color-on-surface-variant)",
            }}
          >
            We deliver flexible, person-centred mental health outreach and home
            care services designed to empower individuals and support
            independent living in familiar surroundings.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-primary">
                Get Support <MdArrowForward />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/referral" className="btn-secondary">
                Refer Someone
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {trustChips.map((chip, i) => (
              <motion.span
                key={chip.label}
                variants={floatUp}
                custom={i}
                className="trust-chip"
              >
                {chipIcons[chip.label]}
                {chip.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ──────── Right: Photo collage ──────── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative h-[580px] w-full hidden lg:block"
        >
          {/* Primary blob */}
          <motion.div
            className="blob ambient-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[520px] overflow-hidden z-10 border-4 border-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={heroImages.primary}
              alt="A carer supporting a client in their home"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Secondary — bottom left */}
          <motion.div
            className="absolute bottom-4 left-0 w-48 h-48 rounded-2xl overflow-hidden ambient-shadow z-20 border-4 border-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: "0 16px 32px rgba(3,97,53,0.15)" }}
          >
            <Image
              src={heroImages.secondary}
              alt="Mental health support session"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Tertiary — top right */}
          <motion.div
            className="absolute top-10 right-4 w-40 h-56 rounded-full overflow-hidden ambient-shadow z-0 border-4 border-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: "0 16px 32px rgba(3,97,53,0.15)" }}
          >
            <Image
              src={heroImages.tertiary}
              alt="Community outreach worker"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Credential card */}
          <motion.div
            className="absolute bottom-24 right-0 glass-card p-4 rounded-xl z-30 flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{
                backgroundColor: "rgba(0,71,37,0.1)",
                color: "var(--color-primary)",
              }}
            >
              <MdHealthAndSafety />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--color-on-surface)",
                }}
              >
                CQC Regulated Service
              </p>
              <div
                className="flex items-center gap-0.5 mt-0.5"
                style={{ color: "var(--color-secondary-container)" }}
              >
                {[...Array(4)].map((_, i) => (
                  <MdStarRate key={i} className="text-base" />
                ))}
                <MdStarHalf className="text-base" />
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    color: "var(--color-on-surface-variant)",
                    marginLeft: 4,
                  }}
                >
                  4.9/5
                </span>
              </div>
            </div>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full"
            style={{ backgroundColor: "var(--color-secondary-container)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full"
            style={{ backgroundColor: "var(--color-primary)" }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>

     
    </section>
  );
}

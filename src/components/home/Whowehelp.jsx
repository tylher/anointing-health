"use client";

import { whoWeHelpTabs } from "@/data/site";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdArrowForward, MdCheckCircle } from "react-icons/md";

/* ── Variants ── */
const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  enter: { opacity: 0, x: 30, scale: 0.97 },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -20,
    scale: 0.97,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

const contentVariants = {
  enter: { opacity: 0, y: 16 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ── Tab button ── */
function TabButton({ label, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: active ? 1 : 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`px-6 py-2.5 rounded-full transition-colors relative overflow-hidden ${
        active ? "tab-btn-active" : "tab-btn-inactive"
      }`}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "0.875rem",
        fontWeight: 600,
      }}
    >
      {active && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: "var(--color-primary)" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

export default function WhoWeHelp() {
  const [activeId, setActiveId] = useState(whoWeHelpTabs[0].id);
  const activeTab = whoWeHelpTabs.find((t) => t.id === activeId);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="who-we-help"
      ref={sectionRef}
      className="py-12 px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Our Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 500,
              color: "var(--color-on-background)",
            }}
          >
            Support that meets you where you are
          </motion.h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {whoWeHelpTabs.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              active={activeId === tab.id}
              onClick={() => setActiveId(tab.id)}
            />
          ))}
        </motion.div>

        {/* Tab content — AnimatePresence for crossfade */}
        <div className="relative min-h-115">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative aspect-5/5 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={activeTab.imageUrl}
                  alt={activeTab.imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,71,37,0.25) 0%, transparent 50%)",
                  }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--color-on-surface-variant)",
                    marginBottom: "1.75rem",
                  }}
                >
                  {activeTab.description}
                </p>

                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 mb-10"
                >
                  {activeTab.checkItems.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="flex items-start gap-3"
                    >
                      <MdCheckCircle
                        className="text-xl mt-0.5 shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "1rem",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={activeTab.ctaHref}
                    className="inline-flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      fontSize: "1rem",
                      transition: "color 200ms",
                    }}
                  >
                    {activeTab.ctaLabel}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MdArrowForward />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

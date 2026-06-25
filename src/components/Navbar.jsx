"use client";

import { navLinks } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowForward, MdClose, MdMenu } from "react-icons/md";

/* Framer variants */
const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const linkStagger = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const linkItem = {
  hidden: { x: 24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={[
          "fixed top-0 w-full z-50 transition-all duration-300",
          "flex justify-between items-center h-24",
          "px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)",
          "max-w-[1280px] mx-auto left-0 right-0",
          scrolled ? "nav-scrolled" : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={"/images/logo.png"} width={70} height={70} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#refer" className="btn-ghost !py-2 !px-4 text-sm">
            Refer Someone
          </Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="#support" className="btn-primary !py-2 !px-5 text-sm">
              Get Support <MdArrowForward />
            </Link>
          </motion.div>
        </div>

        {/* Mobile burger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-[color:var(--color-primary)] text-2xl"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <MdClose /> : <MdMenu />}
        </motion.button>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-6 pb-10"
            style={{
              backgroundColor: "rgba(247,249,255,0.97)",
              backdropFilter: "blur(16px)",
            }}
          >
            <motion.nav
              variants={linkStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkItem}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "var(--color-on-background)",
                    }}
                    className="block py-3 border-b border-[color:var(--color-outline-variant)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-col gap-3"
            >
              <Link
                href="#refer"
                className="btn-ghost text-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Refer Someone
              </Link>
              <Link
                href="#support"
                className="btn-primary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Support <MdArrowForward />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

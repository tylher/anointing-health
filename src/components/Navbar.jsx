"use client";

import { navLinks } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowForward, MdClose, MdKeyboardArrowDown, MdMenu } from "react-icons/md";

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

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentService = searchParams.get("service");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer state resets when it closes
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  const isActive = (href, subLinks) => {
    if (href === "/") return pathname === "/";
    // Parent stays highlighted for the whole /services section regardless
    // of which sub-service (if any) is selected via ?service=.
    if (pathname === href) return true;
    return pathname?.startsWith(href + "/");
  };

  return (
    <div>
      {/* ── Main bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={[
          "fixed top-0 w-full z-50 transition-all duration-300",
          "flex justify-between items-center h-28",
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
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.subLinks);

            if (link.subLinks) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={[
                      "nav-link flex items-center gap-1 rounded-full px-4 py-2 transition-colors duration-200",
                      active
                        ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-semibold"
                        : "",
                    ].join(" ")}
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={[
                        "text-lg transition-transform duration-200",
                        servicesOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                    {/* {active && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[color:var(--color-primary)]"
                      />
                    )} */}
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 pt-3 w-64"
                      >
                        <div className="rounded-2xl border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface)] shadow-xl p-2">
                          {link.subLinks.map((sub) => {
                            const subActive =
                              pathname === "/services" &&
                              currentService === sub.id;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                scroll={false}
                                onClick={() => setServicesOpen(false)}
                                className={[
                                  "block rounded-xl px-4 py-2.5 text-sm transition-colors duration-150",
                                  subActive
                                    ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-semibold"
                                    : "text-[color:var(--color-on-background)] hover:bg-[color:var(--color-primary)]/5",
                                ].join(" ")}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "nav-link relative rounded-full px-4 py-2 transition-colors duration-200",
                  active
                    ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-semibold"
                    : "",
                ].join(" ")}
              >
                {link.label}
                {/* {active && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[color:var(--color-primary)]"
                  />
                )} */}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/referral" className="btn-ghost !py-2 !px-4 text-sm">
            Refer Someone
          </Link>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn-primary !py-2 !px-5 text-sm">
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
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
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
              {navLinks.map((link) => {
                const active = isActive(link.href, link.subLinks);

                if (link.subLinks) {
                  return (
                    <motion.div key={link.href} variants={linkItem}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        style={{ fontFamily: "var(--font-serif)" }}
                        className={[
                          "w-full flex items-center justify-between py-3 border-b",
                          "border-[color:var(--color-outline-variant)]",
                          active
                            ? "text-[color:var(--color-primary)]"
                            : "text-[color:var(--color-on-background)]",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "text-[1.75rem] font-semibold rounded-lg",
                            active
                              ? "bg-[color:var(--color-primary)]/10 px-3 -mx-3"
                              : "",
                          ].join(" ")}
                        >
                          {link.label}
                        </span>
                        <MdKeyboardArrowDown
                          className={[
                            "text-3xl transition-transform duration-200",
                            mobileServicesOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col py-2 pl-4 gap-1">
                              {link.subLinks.map((sub) => {
                                const subActive =
                                  pathname === "/services" &&
                                  currentService === sub.id;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    scroll={false}
                                    onClick={() => setMobileOpen(false)}
                                    className={[
                                      "py-2.5 px-3 rounded-lg text-lg transition-colors duration-150",
                                      subActive
                                        ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-semibold"
                                        : "text-[color:var(--color-on-background)]/80",
                                    ].join(" ")}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div key={link.href} variants={linkItem}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: active
                          ? "var(--color-primary)"
                          : "var(--color-on-background)",
                      }}
                      className={[
                        "block py-3 border-b border-[color:var(--color-outline-variant)]",
                        active ? "bg-[color:var(--color-primary)]/10 px-3 -mx-3 rounded-lg" : "",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-col gap-3"
            >
              <Link
                href="/referral"
                className="btn-ghost text-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Refer Someone
              </Link>
              <Link
                href="/support"
                className="btn-primary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Support <MdArrowForward />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
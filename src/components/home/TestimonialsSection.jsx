// components/TestimonialsSection.js
"use client";

import { testimonialsData } from "@/data/testimonials-data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonialsData.length;
  const maxIndex = Math.max(totalSlides - slidesPerView, 0);
  const canSlide = totalSlides > slidesPerView;

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!canSlide || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [canSlide, isPaused, maxIndex]);

  const visibleTestimonials = useMemo(() => {
    return testimonialsData.slice(currentIndex, currentIndex + slidesPerView);
  }, [currentIndex, slidesPerView]);

  const nextSlide = () => {
    if (!canSlide) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!canSlide) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    if (!canSlide) return;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setDirection(clampedIndex > currentIndex ? 1 : -1);
    setCurrentIndex(clampedIndex);
  };

  const rowVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 220 : -220,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: "easeInOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -220 : 220,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 bg-surface"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,97,53,0.14),transparent_38%),radial-gradient(circle_at_top_right,rgba(138,218,162,0.16),transparent_32%),linear-gradient(to_bottom,#f8fbf8,#f5f8ff)]" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-tertiary-container/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-container-max px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center font-ui rounded-full border border-primary/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
            Testimonials
          </span>
          <h2 className="mt-5 font-serif text-[32px] font-medium text-on-background md:text-[52px]">
            What people say about us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-on-surface-variant md:text-base font-sans">
            Real feedback from people who have used our service and loved the
            experience.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 p-3 shadow-[0_20px_70px_rgba(3,97,53,0.08)] backdrop-blur-xl md:p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={rowVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="w-full shrink-0 px-2 md:w-1/3"
                >
                  <div className="group relative h-full overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-8 shadow-[0_18px_45px_rgba(3,97,53,0.08)] transition-all duration-500 hover:shadow-[0_28px_70px_rgba(3,97,53,0.16)]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.35))]" />
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary-fixed to-transparent" />

                    <div className="relative z-10 flex h-full flex-col">
                      <span className="pointer-events-none absolute right-2 top-0 select-none text-[110px] leading-none font-semibold text-primary/10">
                        “
                      </span>

                      <div className="mb-6 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="h-2 w-2 rounded-full bg-primary-fixed" />
                        <span className="h-2 w-2 rounded-full bg-tertiary-container" />
                      </div>

                      <p className="relative z-10 mb-8 flex-1 text-[17px] font-sans leading-8 text-on-surface-variant">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center gap-4 pt-2">
                        {testimonial.avatarUrl ? (
                          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-primary/10">
                            <Image
                              alt={testimonial.author}
                              src={testimonial.avatarUrl}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                        ) : (
                          <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-primary via-primary-fixed to-tertiary-container ring-4 ring-primary/10" />
                        )}

                        <div>
                          <p className="font-ui text-base font-bold text-on-surface">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 overflow-hidden rounded-full bg-black/5">
          <motion.div
            key={`${currentIndex}-${isPaused ? "paused" : "playing"}`}
            className="h-1 rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: canSlide ? "100%" : "100%" }}
            transition={{ duration: canSlide ? 10 : 0, ease: "linear" }}
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            disabled={!canSlide}
            className="rounded-full bg-white p-3 shadow-md transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} className="text-primary" />
          </button>

          <div className="flex gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-7 bg-primary-container"
                    : "w-3 bg-outline-variant hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={!canSlide}
            className="rounded-full bg-white p-3 shadow-md transition-colors hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}

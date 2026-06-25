"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Subscribe to Daylight",
    description:
      "Choose a plan that fits your energy needs and get started in minutes.",
    color: "bg-blue-600",
  },
  {
    number: "02",
    title: "We Install",
    description:
      "Our team handles installation and setup so you don't have to.",
    color: "bg-emerald-600",
  },
  {
    number: "03",
    title: "Power On",
    description: "Enjoy uninterrupted electricity with real-time monitoring.",
    color: "bg-orange-500",
  },
];

export default function DaylightScrollSequence() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Step 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);

  // Step 2
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.6, 0.7],
    [40, 0, 0, -40],
  );

  const scale2 = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.6, 0.7],
    [0.96, 1, 1, 0.96],
  );

  // Step 3
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);

  const y3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [40, 0, 0]);

  const scale3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0.96, 1, 1]);

  // Text states
  const textOpacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0.35],
  );

  const textOpacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.6, 0.7],
    [0.35, 1, 1, 0.35],
  );

  const textOpacity3 = useTransform(
    scrollYProgress,
    [0.6, 0.75, 1],
    [0.35, 1, 1],
  );

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center gap-10">
            <motion.div style={{ opacity: textOpacity1 }} className="max-w-md">
              <p className="mb-3 text-sm font-medium text-zinc-500">
                {steps[0].number}
              </p>

              <h2 className="mb-4 text-4xl font-bold text-zinc-900">
                {steps[0].title}
              </h2>

              <p className="text-lg text-zinc-600">{steps[0].description}</p>
            </motion.div>

            <motion.div style={{ opacity: textOpacity2 }} className="max-w-md">
              <p className="mb-3 text-sm font-medium text-zinc-500">
                {steps[1].number}
              </p>

              <h2 className="mb-4 text-4xl font-bold text-zinc-900">
                {steps[1].title}
              </h2>

              <p className="text-lg text-zinc-600">{steps[1].description}</p>
            </motion.div>

            <motion.div style={{ opacity: textOpacity3 }} className="max-w-md">
              <p className="mb-3 text-sm font-medium text-zinc-500">
                {steps[2].number}
              </p>

              <h2 className="mb-4 text-4xl font-bold text-zinc-900">
                {steps[2].title}
              </h2>

              <p className="text-lg text-zinc-600">{steps[2].description}</p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center">
            <div className="relative h-[650px] w-full max-w-md overflow-hidden rounded-[40px] border border-zinc-200 bg-zinc-100 shadow-2xl">
              <motion.div
                className={`absolute inset-0 ${steps[0].color}`}
                style={{
                  opacity: opacity1,
                  y: y1,
                  scale: scale1,
                }}
              />

              <motion.div
                className={`absolute inset-0 ${steps[1].color}`}
                style={{
                  opacity: opacity2,
                  y: y2,
                  scale: scale2,
                }}
              />

              <motion.div
                className={`absolute inset-0 ${steps[2].color}`}
                style={{
                  opacity: opacity3,
                  y: y3,
                  scale: scale3,
                }}
              />

              {/* Example content overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-3xl bg-white/10 px-8 py-4 backdrop-blur-md">
                  <p className="text-lg font-medium text-white">
                    Product preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

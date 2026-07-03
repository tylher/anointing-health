"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientBorderCard } from "../ui/GradientBordercard";

// Alternate direction/rotation per card for a "unique" feel per position
const getCardVariant = (index) => {
  const fromLeft = index % 2 === 0;
  return {
    hidden: {
      opacity: 0,
      x: fromLeft ? -30 : 30,
      rotate: fromLeft ? -1.5 : 1.5,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export function PillarCard({
  featured,
  icon: Icon,
  title,
  description,
  image,
  iconClass,
  index = 0,
}) {
  const cardVariant = getCardVariant(index);

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "backOut", delay: 0.15 },
    },
  };

  if (featured) {
    return (
      <motion.div
        className="md:col-span-2"
        variants={cardVariant}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
      >
        <GradientBorderCard>
          <div className="p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1">
              <motion.div
                variants={iconVariant}
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${iconClass}`}
              >
                <span className="material-symbols-outlined">
                  <Icon />
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold font-serif text-on-background mb-3">
                {title}
              </h3>
              <p className="text-on-surface-variant font-sans">{description}</p>
            </div>
            {image && (
              <motion.div
                className="w-full sm:w-[200px] h-[150px] relative rounded-xl overflow-hidden"
                initial={{ opacity: 0, scale: 1.15 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={image} alt={title} fill className="object-cover" />
              </motion.div>
            )}
          </div>
        </GradientBorderCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <GradientBorderCard>
        <div className="p-6 flex flex-col gap-3 h-full">
          <motion.div
            variants={iconVariant}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${iconClass}`}
          >
            <span className="material-symbols-outlined">
              <Icon />
            </span>
          </motion.div>
          <h3 className="text-xl font-bold font-serif text-on-background">
            {title}
          </h3>
          <p className="text-sm text-on-surface-variant font-sans">
            {description}
          </p>
        </div>
      </GradientBorderCard>
    </motion.div>
  );
}

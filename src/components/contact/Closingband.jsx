"use client";

import { motion } from "framer-motion";
import { CLOSING_BAND } from "../../data/contact-data";

// Avatar-specific variants — each one slides up and fades in from behind
// its neighbour, reinforcing the "overlap stack" visual.
const avatarContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const avatarItem = {
  hidden: { opacity: 0, y: 16, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ClosingBand() {
  return (
    <motion.section
      className="mt-12 py-16 text-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(3,97,53,0.1) 0%, rgba(201,150,26,0.1) 50%, rgba(35,84,146,0.1) 100%)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="max-w-container-max px-12 relative z-10 flex flex-col items-center">
        {/* Avatar stack */}
        <motion.div className="flex -space-x-4 mb-6" variants={avatarContainer}>
          {CLOSING_BAND.avatars.map((avatar, i) => (
            <motion.div
              key={i}
              variants={avatarItem}
              className="w-16 h-16 rounded-full border-2 border-white overflow-hidden bg-surface-dim"
              // Lift the hovered avatar above its neighbours
              whileHover={{ y: -6, zIndex: 10 }}
              transition={{ duration: 0.22 }}
              style={{ position: "relative" }}
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h3
          className='font-serif text-lg font-medium text-primary max-w-lg'
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
        >
          {CLOSING_BAND.heading}
        </motion.h3>
      </div>
    </motion.section>
  );
}

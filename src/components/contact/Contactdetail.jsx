"use client";

import { motion } from "framer-motion";
import { ITEM } from "./UseReveal";
import { CONTACT_DETAILS, MAP_IMAGE } from "@/data/contact-data";

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <motion.h2
          variants={ITEM}
          className="font-serif font-bold text-xl md:text-4xl  text-primary mb-6"
        >
          Contact Details
        </motion.h2>

        <div className="space-y-4">
          {CONTACT_DETAILS.map((detail) => (
            <motion.div
              key={detail.label}
              variants={ITEM}
              className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg"
              // Subtle left-nudge on hover so the row feels interactive
              // without implying it's a clickable link when it isn't.
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-primary">
                <detail.icon/>
              </span>
              <div>
                <p className="font-ui font-medium text-on-surface-variant">
                  {detail.label}
                </p>
                <p className="font-sans text-sm text-on-surface">
                  {detail.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map */}
      <motion.div
        variants={ITEM}
        className="h-64 rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm relative"
        // Gentle scale-in so the map panel feels like it "loads in"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={MAP_IMAGE.src}
          alt={MAP_IMAGE.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ITEM, REVEAL } from "./UseReveal";
import { FAQ_ITEMS } from "@/data/contact-data";
import FaqItem from "./faq";

export default function FaqSection() {
  return (
    <motion.section
      className="max-w-container-max mx-auto px-7 md:px-20 py-12"
      variants={REVEAL}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h2
        variants={ITEM}
        className="font-serif text-xl md:text-3xl font-semibold text-primary text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item) => (
          <FaqItem key={item.id} {...item} />
        ))}
      </div>
    </motion.section>
  );
}

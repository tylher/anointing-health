"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqItems } from "@/data/mental-health-data";

const DOT_COLORS = ["#036135", "#235492", "#C9961A"];

export default function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[780px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif font-medium text-[36px] text-[#181c20] mb-3">
            Your questions, answered
          </h2>
          <p className="font-body text-[15px] text-[#6f7a70]">
            If you don&apos;t see your question below, our team is always
            happy to talk.
          </p>
        </motion.div>

        <div>
          {faqItems.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              dotColor={DOT_COLORS[i % DOT_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

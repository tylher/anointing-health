"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SupportPanel from "./SupportPanel";
import { supportPanels } from "@/data/mental-health-data";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function SupportPanels() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-[#f1f4fa] py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif font-medium text-[40px] text-[#181c20] mb-3">
            Mental Health Support
          </h2>
          <p className="font-body text-base text-[#3f4941]">
            Three pillars of a recovery-focused approach — delivered in
            your home, at your pace.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {supportPanels.map((panel) => (
            <SupportPanel
              key={panel.id}
              panel={panel}
              isOpen={openId === panel.id}
              onToggle={() =>
                setOpenId((cur) => (cur === panel.id ? null : panel.id))
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

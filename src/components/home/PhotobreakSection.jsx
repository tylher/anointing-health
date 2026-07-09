// components/PhotoBreakSection.js
"use client";

import { motion } from "framer-motion";

export default function PhotoBreakSection() {
  return (
    <section className="relative w-full h-[560px] overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh2Ih1Mu4YI7zeecxHVcBRNa1duvsWn0Mo4RkDa6I3ylhgAvXfDwHXX-SMsLDVN48R8_zzPToL6zMrYIZiRonRZ3aX6IeYNf79cIQkYPo2zSl3bsG7EL8oY9xYh4yOU1AvOwKlIX59U-KOA4i3hGrzh-EAZM8_uu9y1d2Fv_LXGpmbNJyuRB2n6DHyXC49ZKBe--uYTCwTDRUi8qr8uJVsY7FB68AOzyPBUqJ_43bekGV_MDH3w1lqDzZTjTmWHK5odch2JI7miPxr')",
          backgroundPosition: "center 30%",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-[#00522b]/90 via-transparent to-transparent backdrop-blur-[2px]"></div>

      <div className="relative h-full flex items-center w-full px-margin-mobile md:px-margin-desktop pl-[8%] max-w-container-max mx-auto">
        <motion.div
          className="max-w-[700px]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        
          <h2 className="mb-4 text-white font-serif font-semibold italic text-6xl leading-tight">
            Care is not a service. <span className="block">It's a relationship.</span>
          </h2>
          <p className="text-white/85 font-sans text-lg">
            Every visit, every conversation, every moment of support - built on
            trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

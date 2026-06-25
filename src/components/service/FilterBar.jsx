// components/FilterBar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { filterCategories } from "@/data/services-data";




const colorMap = {
  green: {
    active: "bg-[#036135] text-white",
    inactive: "bg-[#ebefe8] text-[#3f4941]",
  },
  blue: {
    active: "bg-[#235492] text-white",
    inactive: "bg-[#ebefe8] text-[#3f4941]",
  },
  gold: {
    active: "bg-[#C9961A] text-[#181c20]",
    inactive: "bg-[#ebefe8] text-[#3f4941]",
  },
};

export default function FilterBar({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <section className="bg-surface-container-lowest py-2 border-b border-primary-fixed-dim/20 sticky top-18 z-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-2">
        {filterCategories.map((category) => {
          const isActive = activeFilter === category.filter;
          const colors = colorMap[category.colorGroup];

          return (
            <motion.button
              key={category.id}
              onClick={() => handleFilterClick(category.filter)}
              className={`cursor-hoverable px-6 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 ${
                isActive ? colors.active : colors.inactive
              }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
            >
              {category.label}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
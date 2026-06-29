// components/FilterBar.tsx
"use client";

import { filterCategories } from "@/data/services-data";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <section
      className="
sticky
top-18
z-50
border-b
border-primary/10
backdrop-blur-xl
bg-white/75
supports-backdrop-filter:bg-white/60
"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="px-6 pt-3">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Browse by Category
          </p>
        </div>

        <div
          className="
                flex
                overflow-x-auto
                scrollbar-hide
                gap-2
                px-6
                pb-3
                "
        >
          {filterCategories.map((category) => {
            const isActive = activeFilter === category.filter;
            const colors = colorMap[category.colorGroup];

            return (
              <motion.button
                key={category.id}
                onClick={() => handleFilterClick(category.filter)}
                className={`
                relative
                rounded-full
                px-5
                py-2
                text-sm
                font-semibold
                transition-all
                duration-300
                whitespace-nowrap
                shadow-sm

                ${
                  isActive
                    ? `${colors.active}
                ring-2
                ring-primary/20
                shadow-lg`
                    : `${colors.inactive}
                hover:bg-primary/5`
                }
                `}
                animate={{ scale: isActive ? 1.04 : 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute bottom-1 left-4 right-4 h-[2px] bg-white rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

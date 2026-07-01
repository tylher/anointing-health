// app/page.tsx
"use client";

import CinematicServices from "@/components/service/CinematicServices";
import ComparisonTable from "@/components/service/ComparisonTable";
import CTASection from "@/components/service/CTASection";
import FilterBar from "@/components/service/FilterBar";
import HowItWorks from "@/components/service/HowItWorks";
import ServicesHero from "@/components/service/ServicesHero";
import { useRef } from "react";

export default function HomePage() {
  const servicesRef = useRef(null);

  const handleFilterChange = (filter) => {
    servicesRef.current?.scrollToCategory(filter);
  };

  return (
    <>
      <main className="flex-grow pt-20">
        <ServicesHero />
        <div className="tricolour-rule" />
        <>
          <FilterBar onFilterChange={handleFilterChange} />
          <CinematicServices ref={servicesRef} />
        </>
        <HowItWorks />
        <ComparisonTable />
        <CTASection />
      </main>
    </>
  );
}

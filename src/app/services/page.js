// app/page.tsx

import CinematicServices from "@/components/service/CinematicServices";
import ComparisonTable from "@/components/service/ComparisonTable";
import CTASection from "@/components/service/CTASection";
import FilterBar from "@/components/service/FilterBar";
import HowItWorks from "@/components/service/HowItWorks";
import ServicesHero from "@/components/service/ServicesHero";


export default function HomePage() {
  return (
    <>
      <main className="flex-grow pt-20">
        <ServicesHero />
        <div className="tricolour-rule" />
        <FilterBar />
        <CinematicServices />
        <HowItWorks />
        <ComparisonTable />
        <CTASection />
      </main>
    </>
  );
}

import CoverageSection from "@/components/approach/CoverageSection";
import EligibilityChecker from "@/components/approach/EligibilityChecker";
import HeroSection from "@/components/approach/HeroSection";
import DailyTimelineSection from "@/components/approach/OurTimeline";
import WhoWeServeSection from "@/components/approach/WhoWeServe";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <WhoWeServeSection />
      <DailyTimelineSection />
      {/* <CoverageSection /> */}
      <EligibilityChecker />
    </main>
  );
}

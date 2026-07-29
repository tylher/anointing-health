import HeroSection from "@/components/approach/HeroSection";
import DailyTimelineSection from "@/components/approach/OurTimeline";
import WhoWeServeSection from "@/components/approach/WhoWeServe";

export default function HomePage() {
  return (
    <main className="max-w-screen overflow-hidden">
      <HeroSection />
      <WhoWeServeSection />
      <DailyTimelineSection />
      {/* <CoverageSection /> */}
      {/* <EligibilityChecker /> */}
    </main>
  );
}

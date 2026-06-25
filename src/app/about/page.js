import { AboutHeroSection } from "@/components/about/AboutHero";
import { ClinicalApproachSection } from "@/components/about/ClinicalApproachSection";
import CQCComplianceSection from "@/components/about/CQCCompliance";
import { MissionVisionValuesSection } from "@/components/about/MissionVisionValuesSection";
import SafetySection from "@/components/about/SafetySection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />

      <div className="w-full h-1 tricolour-gradient" />

      <MissionVisionValuesSection />
      <ClinicalApproachSection />
      <SafetySection />
      <CQCComplianceSection />
    </>
  );
}

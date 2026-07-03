import MentalHealthHero from "@/components/mental-health/MentalHealthHero";
import CommunityOutreach from "@/components/mental-health/CommunityOutreach";
import QuoteBreak from "@/components/mental-health/QuoteBreak";
import SupportPanels from "@/components/mental-health/SupportPanels";
import LiveInCare from "@/components/mental-health/LiveInCare";
import FAQSection from "@/components/mental-health/FAQSection";
import ClosingCTA from "@/components/mental-health/ClosingCTA";

export const metadata = {
  title: "Mental Health Support & Outreach | Anointing Health Care",
  description:
    "Proactive, community-based mental health support across the UK — home visits, crisis prevention, emotional support, and live-in care, delivered with dignity and consistency.",
};

export default function MentalHealthPage() {
  return (
    <main>
      <MentalHealthHero />
      <CommunityOutreach />
      <QuoteBreak />
      <SupportPanels />
      <LiveInCare />
      <FAQSection />
      <ClosingCTA />
    </main>
  );
}

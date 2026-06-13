import Hero from "@/components/home/Hero";
import PhotoBreakSection from "@/components/home/PhotobreakSection";
import ServicesSection from "@/components/home/ServiceSection";
import StatsBar from "@/components/home/Statsbar";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TimelineSection from "@/components/home/TimelineSection";
import WhoWeHelp from "@/components/home/Whowehelp";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <WhoWeHelp />
      <ServicesSection />
      <TimelineSection />
      <PhotoBreakSection />
      <TestimonialsSection/>
    </main>
  );
}

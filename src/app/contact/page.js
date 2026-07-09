import ClosingBand from "@/components/contact/Closingband";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";
import PathwayCards from "@/components/contact/PathwayCards";


// Server component — all animation logic lives in the "use client" children.
export const metadata = {
  title: "Contact Us | Anointing Healthcare",
  description:
    "Get in touch with Anointing Healthcare. We're here to help patients, families, and professionals across Cumbria.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <ContactHero />
      <PathwayCards />
      <ContactSection />
      <FaqSection />
      {/* <ClosingBand /> */}
    </main>
  );
}

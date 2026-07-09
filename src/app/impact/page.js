import ImpactAreas from "@/components/impact/ImpactAreas";
import ImpactHero from "@/components/impact/ImpactHero";
import SocialValue from "@/components/impact/SocialValue";
import TrustedBy from "@/components/impact/TrustedBy";


export const metadata = {
  title: "Our Impact | Anointing Healthcare",
  description:
    "Measurable outcomes, social value commitments, and community impact across Cumbria.",
};

// Server component — animation logic lives in the "use client" leaf components.
export default function ImpactPage() {
  return (
    <main className="pt-20">
      <ImpactHero />
      <ImpactAreas />
      {/* <SocialValue /> */}
      <TrustedBy />
    </main>
  );
}

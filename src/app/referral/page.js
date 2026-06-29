import ReferralForm from "@/components/referral/ReferralForm";
import ReferralsHero from "@/components/referral/ReferralHero";
import TricolorRule from "@/components/referral/Tricolorrule";


export default function ReferralsPage() {
  return (
    <>
      <TricolorRule />
      <ReferralsHero />
      <TricolorRule />
      <ReferralForm />
      <TricolorRule />
    </>
  );
}

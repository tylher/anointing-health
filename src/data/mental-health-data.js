import {
  MdHome,
  MdCrisisAlert,
  MdPsychology,
  MdLocalHospital,
  MdGroups,
  MdDirectionsWalk,
  MdNightlight,
  MdAssignment,
} from "react-icons/md";

export const heroTrustChips = [
  { label: "Nationwide Outreach", tint: "bg-primary/10 text-primary" },
  { label: "7 Days a Week", tint: "bg-tertiary/10 text-tertiary" },
  { label: "Recovery-Focused", tint: "bg-[#C9961A]/15 text-[#7a5900]" },
];

// Photography placeholders — see the Photography Notes at the end of the
// page 8 brief before commissioning real shots. No distress imagery;
// calm/engaged expressions; outdoor for outreach, indoor for support,
// lived-in (not clinical) for live-in care.
export const heroPhotos = {
  main: "/images/mental-1.jpg",
  secondary: "/images/mental-2.jpg",
};
export const outreachStickyPhoto = "/images/mental-3.jpg";
export const quoteBreakPhoto = "/images/mental-4.jpg";
export const liveInCarePhoto = "/images/livein-care.jpg";

export const outreachCards = [
  {
    id: "welfare-checks",
    icon: MdHome,
    accent: "#036135",
    tint: "bg-primary/10 text-primary",
    title: "Welfare Checks & Home Visits",
    body: "Proactive, scheduled welfare visits to check on individuals who may be isolated, at risk, or recently discharged — delivered with care and without judgment.",
    chip: "Available 7 days",
    detail:
      "Our outreach workers are trained in lone-worker safety, risk assessment, and de-escalation. Every visit is documented and shared with the relevant care team.",
  },
  {
    id: "crisis-prevention",
    icon: MdCrisisAlert,
    accent: "#C9961A",
    tint: "bg-[#C9961A]/15 text-[#7a5900]",
    title: "Crisis Prevention & Early Intervention",
    body: "Recognising the signs before they escalate — our teams respond rapidly to referrals from GPs, crisis lines, and family members to prevent hospital admission.",
    chip: "Same-day response",
    detail:
      "We coordinate directly with AMHPs, S136 suites, and community mental health teams to ensure every crisis receives a proportionate, skilled response.",
  },
  {
    id: "emotional-support",
    icon: MdPsychology,
    accent: "#235492",
    tint: "bg-tertiary/10 text-tertiary",
    title: "Emotional & Psychological Support",
    body: "Brief, trauma-informed emotional support delivered in the person's home — listening, stabilising, and helping people reconnect with their own strengths.",
    chip: "Trauma-informed",
    detail:
      "Our support workers are trained in active listening, motivational interviewing, and recognising trauma responses. We are not a counselling service but we bridge the gap before specialist therapy begins.",
  },
  {
    id: "healthcare-access",
    icon: MdLocalHospital,
    accent: "#036135",
    tint: "bg-primary/10 text-primary",
    title: "Access to Healthcare & Community Services",
    body: "We actively support people in navigating fragmented systems — attending appointments, liaising with GPs, and connecting individuals to community resources they wouldn't find alone.",
    chip: "Systemic support",
    detail:
      "We maintain relationships with food banks, housing teams, debt advisors, and peer support groups across Cumbria — bridging clinical care with real-world practical needs.",
  },
  {
    id: "social-engagement",
    icon: MdGroups,
    accent: "#C9961A",
    tint: "bg-[#C9961A]/15 text-[#7a5900]",
    title: "Social Engagement Support",
    body: "Isolation amplifies mental health difficulties. We work with people to gradually re-engage with their community — at their own pace, on their terms.",
    chip: "Recovery-led",
    detail:
      "Social prescribing referrals, accompanied community visits, and introductions to peer support groups form the backbone of our social re-engagement approach.",
  },
  {
    id: "independence-structure",
    icon: MdDirectionsWalk,
    accent: "#235492",
    tint: "bg-tertiary/10 text-tertiary",
    title: "Promoting Independence & Structure",
    body: "Daily structure is a foundation of mental health recovery. We support people in building sustainable routines, self-care habits, and a sense of agency over their own lives.",
    chip: "Strengths-based",
    detail:
      "Goal-setting is done collaboratively. We use SMART goals aligned to the individual's own priorities — not a template — reviewed at every visit and formally at each care plan review.",
  },
];

export const supportPanels = [
  {
    id: "emotional-wellbeing",
    color: "#036135",
    tint: "#a3f4ba",
    title: "Emotional Wellbeing Support",
    photo: "/images/mental-5.jpg",
    teaser: "Active listening, emotional validation, and a consistent, trusted presence.",
    description:
      "We provide non-judgemental emotional support in the person's home, helping them feel heard and understood. Our workers are trained to recognise deteriorating mental state and escalate appropriately. Sessions are unscripted — following the person's agenda, not a checklist.",
    features: ["Weekly scheduled visits", "Consistent named worker", "Linked to crisis planning"],
    cta: "Talk to our team",
  },
  {
    id: "structured-routines",
    color: "#235492",
    tint: "#d5e3ff",
    title: "Structured Routines",
    photo: "/images/mental-6.jpg",
    teaser: "Building the daily framework that underpins recovery and prevents relapse.",
    description:
      "We work collaboratively with each person to establish morning, afternoon, and evening routines that balance activity, self-care, and rest. Structure reduces anxiety, improves sleep, and creates a sense of purpose — particularly in the early stages of recovery. We review and adapt routines at every visit, never imposing rigidity.",
    features: ["Personalised daily schedules", "Gradual progression goals", "Family and carer involvement"],
    cta: "See how it works",
  },
  {
    id: "recovery-care-plans",
    color: "#C9961A",
    tint: "#ffdea3",
    title: "Recovery-Focused Care Plans",
    photo: "/images/mental-7.jpg",
    teaser:
      "Every care plan is built with you — capturing your goals, strengths, and the support you need to move forward.",
    description:
      "Our care plans are living documents. They start with a biopsychosocial assessment conducted in the person's home, and are co-written with the service user. They capture personal goals (not just clinical objectives), known triggers and protective factors, and named steps toward independence. Plans are reviewed formally every 6 weeks and informally at every visit.",
    features: ["Co-produced with service user", "Strengths-based, not deficit-focused", "Shared with referrer and family"],
    cta: "Read our approach",
  },
];

export const liveInCareFeatures = [
  {
    id: "247-support",
    icon: MdNightlight,
    title: "24/7 Care Support",
    body: "Day and night support — meals, personal care, medication, mobility. Our live-in carers are always present, never intrusive.",
    chips: ["Overnight cover", "Emergency response", "Medication monitoring"],
  },
  {
    id: "personalised-plans",
    icon: MdAssignment,
    title: "Fully Personalised Care Plans",
    body: "Your care plan is built around your routines, preferences, and health goals — reviewed and updated as your needs evolve.",
    chips: ["Co-produced care plan", "Regular reviews", "Family kept informed"],
  },
];

export const faqItems = [
  {
    q: "Do I need a GP referral to access mental health support?",
    a: "No. You can self-refer, or be referred by a family member, care coordinator, or any professional involved in your care. We will contact your GP to inform them of our involvement, with your consent.",
  },
  {
    q: "What happens during the first visit?",
    a: "Your first visit is an introductory meeting — there is no pressure. One of our community workers will visit your home at a time that suits you, listen to what you're going through, and explain how we might be able to help. Nothing is agreed until you're ready.",
  },
  {
    q: "Will I always see the same person?",
    a: "We work hard to ensure consistency. You will be assigned a named key worker who leads your support. Where cover is needed, we introduce alternatives in advance wherever possible.",
  },
  {
    q: "How quickly can you start?",
    a: "Following a referral, we aim to make first contact within 24 hours and begin visits within 3–5 working days, depending on urgency. Urgent cases are prioritised and can be seen the same day.",
  },
  {
    q: "What if I'm in crisis right now?",
    a: "If you are in immediate danger, please call 999. For urgent mental health support, contact the NHS Crisis Line: 0800 xxx xxxx. Our outreach team can also respond rapidly to referrals from crisis teams — contact us and we will do our best to help.",
  },
  {
    q: "Are your services available outside Cumbria?",
    a: "Our community mental health outreach currently focuses on Cumbria. However, our home care and live-in care services are available more widely across the UK. Contact us to discuss your specific location.",
  },
  {
    q: "Is what I share kept confidential?",
    a: "Yes. Everything discussed with our team is treated with strict confidentiality in line with UK GDPR and the Caldicott Principles. Information is only shared with other professionals where there is a significant safeguarding risk or with your explicit consent.",
  },
  {
    q: "How do I make a complaint or give feedback?",
    a: "We take all feedback seriously. You can speak directly with your key worker, contact our registered manager, or submit a formal complaint via our written complaints process. Details are available on our Policies page.",
  },
];

// ─── Section 6.1: Impact Hero ─────────────────────────────────────────────────

export const HERO = {
  heading: "Real change. Real people.",
  backgroundImage: "/images/real-people.webp",
};

// `animated: true` cards count up from 0 on scroll.
// `animated: false` cards display a pre-formatted static string.
export const STAT_CARDS = [
  {
    id: "stat-admissions",
    prefix: "↓ ",
    suffix: "%",
    target: 40,
    animated: true,
    barColor: "bg-primary",
    label: "Hospital Admissions",
  },
  {
    id: "stat-access",
    prefix: "↑ ",
    suffix: "%",
    target: 87,
    animated: true,
    barColor: "bg-secondary-container",
    label: "Community Care Access",
  },
  {
    id: "stat-lives",
    displayValue: "12,000+",
    animated: false,
    barColor: "bg-tertiary-container",
    label: "Lives Supported",
  },
  {
    id: "stat-investment",
    displayValue: "£3.2M",
    animated: false,
    barColor: "bg-secondary-container",
    label: "Reinvested in Local Care",
  },
];

// ─── Section 6.2: Impact Areas ────────────────────────────────────────────────

export const IMPACT_AREAS_INTRO = {
  heading: "Targeted Impact Areas",
  body: "Measurable outcomes across critical community health indicators.",
};

export const IMPACT_AREAS = [
  {
    id: "area-admissions",
    image: {
      src: "/images/ease-acute.webp",
      alt: "Reduced Hospital Admissions",
    },
    badgeBg: "bg-primary",
    badgeText: "text-white",
    badge: "Reduced Hospital Admissions",
    heading: "Easing Acute Pressures",
    body: "Through proactive community interventions and robust discharge support, we significantly reduce the likelihood of unnecessary hospital readmissions.",
  },
  {
    id: "area-ae",
    image: {
      src: "/images/avoid-crisis.webp",
      alt: "Lower A&E Demand",
    },
    badgeBg: "bg-secondary-container",
    badgeText: "text-on-secondary-container",
    badge: "Lower A&E Demand",
    heading: "Diverting Crisis Care",
    body: "Providing accessible out-of-hours support and rapid community response teams to manage minor urgencies outside the emergency department setting.",
  },
  {
    id: "area-independence",
    image: {
      src: "/images/daily-living.webp",
      alt: "Improved Independence",
    },
    badgeBg: "bg-tertiary-container",
    badgeText: "text-white",
    badge: "Improved Independence",
    heading: "Empowering Daily Living",
    body: "Reablement programs designed to restore confidence and functional ability, allowing individuals to remain safely in their own homes longer.",
  },
  {
    id: "area-isolation",
    image: {
      src: "/images/fostering-connection.webp",
      alt: "Reduced Isolation",
    },
    badgeBg: "bg-primary",
    badgeText: "text-white",
    badge: "Reduced Isolation",
    heading: "Fostering Connection",
    body: "Integrating social prescribing and community hubs to tackle loneliness, recognizing mental wellbeing as foundational to physical health.",
  },
];

// ─── Section 6.3: Social Value ────────────────────────────────────────────────

export const SOCIAL_VALUE_INTRO = {
  heading: "Our Social Value Commitment",
  body: "Tracking our progress toward sustainable community investment goals.",
};

export const PROGRESS_BARS = [
  {
    id: "progress-employment",
    label: "Local Employment Initiatives",
    percentage: 78,
    note: "Target: 80% local workforce sourcing by 2025.",
  },
  {
    id: "progress-partnerships",
    label: "Community Partnerships Developed",
    percentage: 65,
    note: "Target: Active collaborations with 50+ local VCSE organizations.",
  },
  {
    id: "progress-wellbeing",
    label: "Community Wellbeing Projects Funded",
    percentage: 82,
    note: "Target: £500k reinvested into grassroots health initiatives.",
  },
];

// Shared gradient used by all progress bar fills — extracted once so
// a design-token update only touches this single string.
export const PROGRESS_GRADIENT =
  "linear-gradient(90deg, #036135, #ffc64b, #235492)";

// ─── Section 6.5: Trusted By & CTA ───────────────────────────────────────────

export const TRUSTED_LOGOS = [
  {
    id: "logo-nhs",
    src: "/images/NHS.webp",
    alt: "NHS",
  },
  {
    id: "logo-local-authority",
    src: "/images/CLA.webp",
    alt: "Local Authority",
  },
  {
    id: "logo-icb",
    src: "/images/ICB.webp",
    alt: "ICB",
  },
  {
    id: "logo-housing",
    src: "/images/uk-association.webp",
    alt: "Housing Association",
  },
];

export const CTA = {
  eyebrow: "Commissioned & Trusted By",
  heading: "Want to discuss a commissioning partnership?",
  linkLabel: "Let's build better care pathways together",
  href: "/contact",
};

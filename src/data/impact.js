// ─── Section 6.1: Impact Hero ─────────────────────────────────────────────────

export const HERO = {
  heading: "Real change. Real people.",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtf3VDbXIpJipfjMQeJ_nl-GC0ZYjrv-O7oOF6rNTl5D6-NRFb3iCd8r6sjfJwDXjD3lHNRPDzr7YgebkO2PQ2EEBiZFykg6CUpbCBquljjMqglVLwVBhxFlFcZsmgjqnXMXg934mZ6MEkrGNK7hR-ozLG2PfsoOqao68Q6ixtkv4tA6fQ2PVOm-tXaeKcf0n68lqPOz9FHmgdF3XSNsmOct2wGe0G4-PAorFlwG3VGCzmoyQs0t0fjNhxKJdR3lJbBZDPf98EncN",
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
      src: "/images/ease-acute.jpg",
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
      src: "/images/avoid-crisis.jpg",
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
      src: "/images/daily-living.jpg",
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
      src: "/images/fostering-connection.jpg",
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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEWCXDaHvAlO2YcqHe4Z7lryHADzqdnXjZrSeaJt-rPmdXZxRLUXcF_Zu2VKJxcuMoYrpfupOfC11OTnA2G7GGjybYDU6HWbCoxdMOylRYQEvt3BtaXpqqiW4fFfFvjwXFtpLbW9tUmUKJI3hN-7o-4v8J_EjHJDQmFIx7ludhbdlpyz7oP2xa_ADPw0CAtDes06RrT7_b83MPQj8ptIZbTS4IekuvQmgWThD8WjEoS3Il6VNHB7ww8lTQ1L_kt-16koZVArKNi424",
    alt: "NHS",
  },
  {
    id: "logo-local-authority",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZV7nlX3v0SFQ0-ayCcu5hlbrccGpcgYeRm_QmEfKXv-i0obnrZNayMKE0ZC4y3spWKPwp5pbyj2SJIlpK40b9snzb-H7lLBUI_WDKINmii8I6ambgIcCwA4o6NBXwOzHEFcm1XrUHxOO9bBxLZ44s35mh4Xkm5R6QX1p1aIfGcSNyNox2f2CYB4YhcXBXhCzNWptZo5j7iYviZumqAwqSB4AJOqa5bed82N63mHXtO5cUHJP62OTJoG6H2ppwWiv22nxLZEunwi1O",
    alt: "Local Authority",
  },
  {
    id: "logo-icb",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtUTOmenlilCi-HYrj68nhZ1NAhR5V76aLCdkkrtIeVBa3skJ3XEQxFuQ7ljKOJfHafqDsWjdYaKLAiigxvZtAM5JW9NQyVZJVqRv98wAmU8WyvKwG5_ir17vGP4gY9VJW8lmvfjs0qqLJhi5ydh7rUtbf2FFPLu5hzLKv63wHGdmAMFHOGqFWHLB3dEQ0ZX9Sxegch6eUEdMfOKlOZgq7Z42qJ1RCGVp0TOj9YDLCgn5GmJTaVh1aPO8O2lA2KuJanALRm8oR4D5b",
    alt: "ICB",
  },
  {
    id: "logo-housing",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgiMbO0xJPENYmHQubnIuGivLVSDZ6HildGcXGXm9fsg1288oN7ib1ecBR6fPEai2p1It_ZVVs2Ms7sa7PjWpCwMEkdf-9SuWTtdb4lB-sT0afuIzSENe7Sq9xvpFZx8Ptt5yXrp2A0pVPThEmGBU-ZeoglpjdRc0kyI_s1mssdDv5-qOLwPR5z9GjNfpdWDLF1gfcgsTs9PsBRRQqRI0EcfIMIogiql60mPDQ1GsBZ67sEH91bjBNXLbS-9GUk-qfRjW6aC4o5-qn",
    alt: "Housing Association",
  },
  {
    id: "logo-voluntary",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxA3I9SuwwG1Y3uwBQmI7DdhdJT8SmAUq7ew-ICnxpn_2Jc4TXsQ5O7JmBSJQ3IDjCKoNDwF3Q0VaOs7kc4qI44HZFFuH1oumC2-_Ebxzw_axz_4mXFncDkJWXakEACEdXWrXMMiv3zmMg2tSIKPrvcAkP6EZAQ2sFabQtH0KoOwENbwkv27vx6vLliIIc__5RJ63jgn-aqDl9CXAIdAGSXXajp1zx",
    alt: "Voluntary Partner",
  },
];

export const CTA = {
  eyebrow: "Commissioned & Trusted By",
  heading: "Want to discuss a commissioning partnership?",
  linkLabel: "Let's build better care pathways together",
  href: "/contact",
};

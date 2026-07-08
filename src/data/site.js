import { FaFacebookF, FaInstagram, FaShareAlt } from "react-icons/fa";
import {
  MdAccessibilityNew,
  MdHealthAndSafety,
  MdPeopleAlt,
  MdPsychology,
} from "react-icons/md";

/* ─── Navigation ──────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  {
    label: "Services",
    href: "/services",
    // `id` must match a `services-data.js` → `services[].id` value —
    // that's what CinematicServices uses to pick which panel to jump to.
    subLinks: [
      {
        label: "Home Care",
        href: "/services?service=home-care",
        id: "home-care",
      },
      {
        label: "Mental Health Outreach",
        href: "/services/mental-health",
        id: "mental-health",
      },
      {
        label: "Elderly & Dementia Care",
        href: "/services?service=elderly",
        id: "elderly",
      },
      {
        label: "Disability Support",
        href: "/services?service=disability",
        id: "disability",
      },
      {
        label: "Crisis Prevention",
        href: "/services?service=crisis",
        id: "crisis",
      },
      { label: "Carer Support", href: "/services?service=carer", id: "carer" },
    ],
  },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

/* ─── Hero trust chips ────────────────────────────────────── */
export const trustChips = [
  { label: "CQC Compliant" },
  { label: "DBS Checked" },
  { label: "7 Days a Week" },
];

/* ─── Hero images ─────────────────────────────────────────── */
export const heroImages = {
  primary: "/images/home-2.jpg",
  secondary: "/images/home-1.jpg",
  tertiary: "/images/home-3.jpg",
};

/* ─── Stats bar ───────────────────────────────────────────── */
// type: "count" | "static" | "icon"
export const stats = [
  { type: "count", value: 12000, suffix: "+", label: "Individuals Supported" },
  { type: "count", value: 6, label: "Coverage Areas" },
  { type: "count", value: 7, label: "Days Weekly" },
  { type: "icon", label: "CQC Regulated" },
  { type: "static", value: "24/7", label: "Crisis Support" },
];

/* ─── Who We Help tabs ────────────────────────────────────── */
export const whoWeHelpTabs = [
  {
    id: "individuals",
    label: "Individuals",
    imageUrl: "/images/WWH1.jpg",
    imageAlt: "Individuals Support",
    description:
      "Adults experiencing mental health challenges, isolation, or difficulty accessing traditional services.",
    checkItems: [
      "Severe mental health conditions",
      "Risk of hospital admission",
      "Frequent crisis episodes",
      "Rural or hard-to-reach location",
      "Disengaged from existing care",
    ],
    ctaLabel: "Learn about individual support",
    ctaHref: "/services",
  },
  {
    id: "families",
    label: "Families & Carers",
    imageUrl: "/images/WWH2.jpg",
    imageAlt: "Families and Carers Support",
    description: "We support the people who support others.",
    checkItems: [
      "Understanding your loved one's care",
      "Carer wellbeing support",
      "Guidance on crisis situations",
      "Signposting to carer resources",
    ],
    ctaLabel: "Explore carer resources",
    ctaHref: "/services",
  },
  {
    id: "professionals",
    label: "Professionals & Referrers",
    imageUrl: "/images/WWH3.jpg",
    imageAlt: "Professionals and Referrers",
    description:
      "We work with NHS, local authority, and voluntary sector partners.",
    checkItems: [
      "GPs and crisis teams",
      "Hospitals and social care",
      "Housing and voluntary sector",
      "Integrated Care Boards",
    ],
    ctaLabel: "Information for referrers",
    ctaHref: "/services",
  },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "About", href: "/about" },
  { label: "Referrals", href: "/referral" },
  { label: "Impact", href: "/impact" },
];

export const services = [
  {
    label: "Home Care",
    href: "/services?service=home-care",
    id: "home-care",
  },
  {
    label: "Mental Health Outreach",
    href: "/services/mental-health",
    id: "mental-health",
  },
  {
    label: "Elderly & Dementia Care",
    href: "/services?service=elderly",
    id: "elderly",
  },
  {
    label: "Disability Support",
    href: "/services?service=disability",
    id: "disability",
  },
  {
    label: "Crisis Prevention",
    href: "/services?service=crisis",
    id: "crisis",
  },
  { label: "Carer Support", href: "/services?service=carer", id: "carer" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Safeguarding Policy", href: "#" },
  { label: "Complaints", href: "#" },
  { label: "CQC Information", href: "#" },
];

export const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaShareAlt, href: "#" },
  { icon: FaInstagram, href: "#" },
];

// ─── Who We Serve ────────────────────────────────────────────────────────────

export const WHO_WE_SERVE = [
  {
    id: "severe-mental-illness",
    title: "Adults with Severe Mental Illness",
    description:
      "Living with schizophrenia, bipolar disorder, or severe depression who need consistent community support",
    color: "#036135",
    icon: MdPsychology,
    image: "/images/mental.jpg",
  },
  {
    id: "risk-of-hospital",
    title: "People at Risk of Hospital Admission",
    description:
      "Those experiencing escalating crisis who could benefit from intensive outreach to prevent acute admission",
    color: "#C9961A",
    icon: MdHealthAndSafety,
    image: "/images/approach-3.jpg",
  },
  {
    id: "isolated-individuals",
    title: "Isolated Individuals",
    description:
      "Older adults or those in rural areas who have disengaged from care or have limited social connections",
    color: "#235492",
    icon: MdPeopleAlt,
    image: "/images/approach-2.jpg",
  },
  {
    id: "personal-care",
    title: "Individuals Requiring Personal Care",
    description:
      "Adults who need day-to-day assistance with personal care, medication, and daily living tasks",
    color: "#036135",
    icon: MdAccessibilityNew,
    image: "/images/approach-4.jpg",
  },
];

// ─── A Typical Day Timeline ───────────────────────────────────────────────────

export const DAILY_TIMELINE = [
  {
    id: "scene-1",
    time: "8:30am",
    description: "Morning check-in and route planning.",
    image: "/images/morning-routines.jpg",
  },
  {
    id: "scene-2",
    time: "10:00am",
    description: "First home visit of the day.",
    image: "/images/community-care.jpg",
  },
  {
    id: "scene-3",
    time: "1:00pm",
    description: "Lunch, conversation, and connection.",
    image: "/images/conversations.jpg",
  },
  {
    id: "scene-4",
    time: "4:00pm",
    description: "Care notes updated, ready for tomorrow.",
    image: "/images/care-notes.jpg",
  },
];

// ─── Coverage Areas ───────────────────────────────────────────────────────────

export const COVERAGE_AREAS = [
  {
    id: "barrow",
    name: "Barrow-in-Furness",
    subtitle: "Urban & Coastal Support",
    color: "#036135",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQIVszB1Bw2sqIxAikHD9qQ-sNlbyOScC4TW6OkSoeufjkMNL5vPdu7bsLdie6CjuqOPVR60MzagSqy_4XnHBdbhM565FCRpHrpTl0gsskNFRtJ_p12aWGpDL_vyuW4EkuNUA_1megS881VdDc4weJa5jJMkN31bdchkSSqC9CsQwnT4TW7WItYTQYjY0unx6zCmZcOFmbVNeyx4IOT7P1CoLDj5gwi1jq_oDIMaPCZ40XECkwI8IedyLWKEBSCJGX_lnhMg6l4_cY",
  },
  {
    id: "carlisle",
    name: "Carlisle",
    subtitle: "City & Heritage Outreach",
    color: "#235492",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmB7HUxzkeJd1BThfLMUIBT_wi3YKMa7jpTNzpDHH3E7rgBC6lFXew_6TVTUdGXmqzE-1imGw7Ak2ABdkXIFdM198Ns7M1IYxJNBqcclJ6cNx1EET0-vBEIR8nUFpW8g4onNggmru6f53DpIN9-kMfjaXUzt7FQaqk73rpzetXs3E-M2hqFKFRTTZBmeT6gDNNu6PAq508mcQRyoXinUU0FweUdcAK9M0PnjDTiMSGWF_fXXcAE-OwMIG-7UFAknuXB3tY6EVxqCyH",
  },
  {
    id: "eden",
    name: "Eden",
    subtitle: "Rural Fellside Care",
    color: "#036135",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgtaFDEe-FgX1ZOQdYyudTWyJyUz-jgLQJfei7gbVC5R9t3M4Nn6Hy1h1wUyUpAYdZLPWo5pGLs4vG1Cd3cQefsmsm6j-erfokFSPzVO_IA7XZ24gOYsnnn6HCOdIL6PEgrJPswgSnzpV5p8CWDSBHtbRTfJZoypggu5AFbx02SUZ8FIQDtiT4023Klb3rXYECE8VDDAuorg-7oixXhvzY-4vEkVICE7bLENUc9dZwgHYhIS-zUjweu3YERZRgO5VI_m27X4VUNLM",
  },
  {
    id: "copeland",
    name: "Copeland",
    subtitle: "West Coast Community",
    color: "#235492",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKWJ4YW5IU19XofanPXVMXsoupW62bOYa-OxDUi3-cCiflZUXhsMdwdTteTGWQmlKcvjbJwPOuRYnSoTl72mfPLiH4ktlcUXYJvE3D27UpCqIRlDY4V_oGwDAc0PubuVlW1LOfzhu9DMRMKsEEiEZmMeWuTJIOdptyHulYmb1pV_mjw5IqRcXrxaP7rVAqPeBHJ-YWQsFZC6szZckl3Hj90FC_T243I_-1PLPDkrqZNiytwAyb26ly6qBTHMM1M2uv3KmkSzgY-7KI",
  },
  {
    id: "allerdale",
    name: "Allerdale",
    subtitle: "Lakeland & Coastal Reach",
    color: "#036135",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuUehgmnlphXl1ygD9DxZBPDBcm8q0agEVV_k2xCBKdky1kX4oPXQk4nY1KvQKFGRJq0d6fWb2GylA3fHHeTWaNSphhBhSWAA6yg-lp3FYbtkTUxHOuB179bDwYtcvKavS5TKAPoRDh_VkNNBcixR1M0XRItISe3qSze7Vz-SSl9Z3DwayxMdn3dp9XxQgIuzMkL4BOpBV-MbGltBgPlGs_p51_Q45h5RpeLTntnODUCW09ogxXQKVvhebrtLfO_paf9P0QpBA6",
  },
  {
    id: "south-lakeland",
    name: "South Lakeland",
    subtitle: "National Park Support",
    color: "#235492",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuFOCC36QH-g8hQKRpgQPlwDxA3WmGVbaDcbEBJt1ZKV8KbJ9QnLng1bLDttm9spyNWrtdiVLB4XqVUDrzno3DNEEb8AGM0Do-WB_RIkB3wuFXDty9mQJbLTjLp3FSQ3SIEsIUJF8JHFemdvGMwEhD1zkBdPMWUeoZWqkEBwAtSVFGRBb8d3SgI9Gb3nOipyxnIpw86E9AR9_t3tCcIaV3kcr1Q_MCOm2M5B_irkwEGTJe1QQN_pnp35NFYe6LNanvuppMzfnoL4-o",
  },
];

// ─── Eligibility Checker Steps ────────────────────────────────────────────────

export const ELIGIBILITY_STEPS = [
  {
    id: 1,
    question: "Are you an adult (18+) based in Cumbria or the UK?",
    type: "binary",
    options: [
      { label: "Yes", value: "yes" },
      { label: "Not sure", value: "not_sure" },
    ],
  },
  {
    id: 2,
    question: "Are you experiencing any of the following?",
    type: "multi",
    options: [
      { label: "Mental health challenges", value: "mental_health" },
      { label: "Physical care needs", value: "physical_care" },
      { label: "Social isolation", value: "isolation" },
      { label: "At risk of hospital", value: "hospital_risk" },
      { label: "Caring for someone else", value: "carer" },
    ],
  },
  {
    id: 3,
    question: "How would you prefer to be contacted?",
    type: "binary",
    options: [
      { label: "Phone call", value: "phone" },
      { label: "Email", value: "email" },
    ],
  },
];
// ─── Hero Content ─────────────────────────────────────────────────────────────

export const HERO = {
  heading: "Whoever you are, we're here",
  subheading:
    "We support adults of all backgrounds who are finding it hard to manage their mental health, live independently, or access mainstream services. You don't need to be in crisis to reach out.",
  heroBannerImage: "/images/approach-1.jpg",
  ctaPrimary: { label: "Am I eligible?", href: "#eligibility" },
  ctaSecondary: { label: "Talk to us first", href: "/contact" },
  floatingChip: "Every story matters",
};

// ─── Section Headings ─────────────────────────────────────────────────────────

export const SECTION_HEADINGS = {
  typicalDay: "A typical day with Anointing Health Care",
  coverage: "Our Reach Across Cumbria",
  coverageFooter: "Wider UK coverage via our specialized home care services",
};

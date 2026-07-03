// data/servicesData.js
import {
  FaBrain,
  FaHandsHoldingCircle,
  FaHouseMedical,
  FaPersonCane,
  FaTriangleExclamation,
  FaWheelchair,
} from "react-icons/fa6";

export const servicesData = [
  {
    id: 1,
    title: "Mental Health Outreach",
    description:
      "Proactive, community-based support designed to engage individuals who may be struggling to access traditional services, helping prevent crisis and promote recovery.",
    imageUrl: "/images/mental.jpg",
    href: "/services/mental-health",
    isFeatured: true,
    badge: "Core Service",
  },
  {
    id: 2,
    title: "Home Care Services",
    description:
      "Compassionate daily assistance to help you or your loved one live independently and comfortably at home.",
    imageUrl: "/images/homecare.jpg",
    href: "/services/home-care",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Elderly & Dementia Care",
    description:
      "Specialised, patient-centred care fostering dignity, memory support, and a safe living environment.",
    imageUrl: "/images/elderlycare.jpg",
    href: "/services/elderly-dementia-care",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Disability Support",
    description:
      "Empowering individuals with disabilities to actively participate in their community and achieve personal goals.",
    imageUrl: "/images/disability-support.jpg",
    href: "/services/disability-support",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Crisis Prevention",
    description:
      "Responsive interventions designed to de-escalate situations and maintain stability before hospitalisation is needed.",
    imageUrl: "/images/crisis-prevention.jpg",
    href: "/services/crisis-prevention",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Carer Support",
    description:
      "Respite and guidance for family members, ensuring they have the strength and resources to continue caring.",
    imageUrl: "/images/carer-support.jpg",
    href: "/services/carer-support",
    isFeatured: false,
  },
];

export const filterCategories = [
  { id: "all", label: "All Services", filter: "all", colorGroup: "green" },
  {
    id: "home-care",
    label: "Home Care",
    filter: "home-care",
    colorGroup: "green",
  },
  {
    id: "mental-health",
    label: "Mental Health",
    filter: "mental-health",
    colorGroup: "green",
  },
  {
    id: "elderly",
    label: "Elderly & Dementia",
    filter: "elderly",
    colorGroup: "blue",
  },
  {
    id: "disability",
    label: "Disability Support",
    filter: "disability",
    colorGroup: "blue",
  },
  {
    id: "crisis",
    label: "Crisis Prevention",
    filter: "crisis",
    colorGroup: "gold",
  },
  {
    id: "carer",
    label: "Carer Support",
    filter: "carer",
    colorGroup: "gold",
  },
];

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80";

export const services = [
  {
    id: "home-care",
    number: "01",
    title: "Home Care",
    category: "Home Care",
    colorGroup: "green",
    color: "#036135",
    bgColor: "bg-[#E3F2EB]",
    bgHex: "#E3F2EB",
    icon: FaHouseMedical,
    description:
      "Personal care, medication monitoring, meal prep, mobility assistance delivered with dignity in the comfort of your own home.",
    features: [
      "Individual care plan",
      "Regular reviews",
      "CQC-regulated staff",
    ],
    link: "#",
    image: "/images/home-care.jpg",
  },
  {
    id: "mental-health",
    number: "02",
    title: "Mental Health Outreach",
    category: "Mental Health",
    colorGroup: "green",
    color: "#036135",
    bgColor: "bg-[#E3F2EB]",
    bgHex: "#E3F2EB",
    icon: FaBrain,
    description:
      "Assertive outreach, home-based assessments, crisis prevention, and dedicated medication support for complex needs.",
    features: [
      "Biopsychosocial approach",
      "Trauma-informed care",
      "7 days a week availability",
    ],
    link: "#",
    image: "/images/mental-outreach2.jpg",
  },
  {
    id: "elderly",
    number: "03",
    title: "Elderly & Dementia",
    category: "Elderly & Dementia",
    colorGroup: "blue",
    color: "#235492",
    bgColor: "bg-[#E3EEF9]",
    bgHex: "#E3EEF9",
    icon: FaPersonCane,
    description:
      "Specialist companionship, dementia care, falls prevention, and dedicated assistance for daily living activities.",
    features: [
      "Dementia-trained staff",
      "Dedicated family liaison",
      "Consistent familiar faces",
    ],
    link: "#",
    image: "/images/elderly-care.jpg",
  },
  {
    id: "disability",
    number: "04",
    title: "Disability Support",
    category: "Disability Support",
    colorGroup: "blue",
    color: "#235492",
    bgColor: "bg-[#E3EEF9]",
    bgHex: "#E3EEF9",
    icon: FaWheelchair,
    description:
      "Empowering independent living through community access, routine assistance, and collaborative goal-setting.",
    features: [
      "Person-centred plans",
      "Community partnerships",
      "Flexible support hours",
    ],
    link: "#",
    image: "/images/disability-support2.jpg",
  },
  {
    id: "crisis",
    number: "05",
    title: "Crisis Prevention",
    category: "Crisis Prevention",
    colorGroup: "gold",
    color: "#C9961A",
    colorDark: "#7a5900",
    bgColor: "bg-[#FEF5E0]",
    bgHex: "#FEF5E0",
    icon: FaTriangleExclamation,
    description:
      "Rapid-response within hours, short-term stabilization, prevention of hospital admission, and multi-agency coordination.",
    features: [
      "Rapid deployment",
      "Experienced crisis staff",
      "AMHP coordination",
    ],
    link: "#",
    image: "/images/crisis-prevention2.jpg",
  },
  {
    id: "carer",
    number: "06",
    title: "Carer Support",
    category: "Carer Support",
    colorGroup: "gold",
    color: "#C9961A",
    colorDark: "#7a5900",
    bgColor: "bg-[#FEF5E0]",
    bgHex: "#FEF5E0",
    icon: FaHandsHoldingCircle,
    description:
      "Information for family carers, emotional wellbeing, signposting to vital resources and facilitated peer support.",
    features: [
      "Regular carer reviews",
      "Resource signposting",
      "Peer support referrals",
    ],
    link: "#",
    image: "/images/carer-support2.jpg",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Referral submitted",
    description:
      "Your journey begins with a simple referral from a GP, social worker, or family member.",
    image: '/images/referral-placed.jpg',
  },
  {
    number: "02",
    title: "Rapid acknowledgement",
    description:
      "We respond within 24 hours to confirm receipt and begin coordinating your initial consultation.",
    image: '/images/referral-acknowledgement.jpg',
  },
  {
    number: "03",
    title: "Home assessment arranged",
    description:
      "Our clinical lead visits your home to understand your environment, needs, and personal goals.",
    image: '/images/home-assessment.jpg',
  },
  {
    number: "04",
    title: "Personalised care plan created",
    description:
      "We co-design a detailed clinical pathway tailored specifically to your health and wellbeing.",
    image: '/images/curated-plan.jpg',
  },
  {
    number: "05",
    title: "Regular visits begin",
    description:
      "Your dedicated care team starts scheduled visits, providing consistent and compassionate support.",
    image: '/images/regular-visits.jpg',
  },
  {
    number: "06",
    title: "Review, adapt, and plan discharge",
    description:
      "We continually monitor your progress, adjusting the plan to ensure optimal outcomes and independence.",
    image: '/images/plan-review.jpg',
  },
];

export const comparisonRows = [
  {
    feature: "Visit frequency",
    homeCare: "Daily / Multiple",
    mentalHealth: "Weekly / Flexible",
    crisisPrevention: "Intensive (Daily)",
  },
  {
    feature: "Typical duration",
    homeCare: "Long-term",
    mentalHealth: "Medium-term",
    crisisPrevention: "Short-term (2-6 wks)",
  },
  {
    feature: "Staff qualification",
    homeCare: "NVQ 2/3 Care",
    mentalHealth: "Mental Health Spec.",
    crisisPrevention: "Crisis Practitioners",
  },
  {
    feature: "Available 7 days",
    homeCare: true,
    mentalHealth: true,
    crisisPrevention: true,
  },
  {
    feature: "Crisis response",
    homeCare: false,
    mentalHealth: false,
    crisisPrevention: true,
  },
  {
    feature: "Family updates",
    homeCare: true,
    mentalHealth: true,
    crisisPrevention: true,
  },
];

export const heroImages = {
  left: "/images/service-hero-1.jpg",
  right: "/images/service-hero-2.jpg",
};

export const ctaBackgroundImage = PLACEHOLDER_IMG;

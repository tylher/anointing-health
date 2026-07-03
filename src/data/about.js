import { FaArrowTrendUp } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import {
  MdExplore,
  MdFamilyRestroom,
  MdFavorite,
  MdGroups,
  MdHealthAndSafety,
  MdMedicalServices,
  MdShield,
  MdVerified,
  MdVolunteerActivism,
  MdWorkspacePremium,
} from "react-icons/md";

import { PiPlantLight } from "react-icons/pi";

export const companyInfo = {
  eyebrow: "Who We Are",
  title: "Compassionate care, rooted in community",
  description:
    "Anointing Health Care is a professional home care and mental health outreach provider serving adults across the United Kingdom. We believe every person deserves to live safely, independently, and with dignity — in their own home and community.",
};

export const badges = [
  {
    label: "Est. in Cumbria",
    className: "bg-primary/10 text-primary",
  },
  {
    label: "CQC Regulated",
    className: "bg-secondary-container/20 text-secondary-container",
  },
  {
    label: "12,000+ Supported",
    className: "bg-tertiary-container/10 text-tertiary-container",
  },
];

export const collageImages = [
  {
    id: 1,
    src: "/images/about-hero-2.jpg",
    alt: "Healthcare professionals standing together",
    className:
      "absolute right-[10%] top-[10%] w-[55%] h-[65%] rounded-[28px] z-20",
  },
  {
    id: 2,
    src: "/images/about-hero-4.jpg",
    alt: "Care worker supporting elderly woman",
    className:
      "absolute left-[5%] top-[5%] w-[40%] h-[45%] rounded-[20px] z-30 -translate-y-6 border-4 border-white",
    featured: true,
  },
  {
    id: 3,
    src: "/images/about-hero-3.jpg",
    alt: "Hands writing on clipboard",
    className:
      "absolute left-[35%] top-[35%] w-[35%] h-[35%] rounded-full z-40 border-[5px] border-white",
  },
  {
    id: 4,
    src: "/images/about-hero-1.jpg",
    alt: "Administrative staff working together",
    className:
      "absolute left-[10%] bottom-[5%] w-[45%] h-[35%] rounded-[20px] z-10",
  },
  {
    id: 5,
    src: "/images/about-hero-5.jpg",
    alt: "Service user enjoying time with care staff",
    className:
      "absolute right-[5%] bottom-[15%] w-[30%] h-[25%] rounded-full z-30",
  },
];

// Photography here was doing more harm than good — three cropped,
// generically-lit stock frames (the `aida-public` URLs) squeezed into a
// 140px strip don't say anything specific about this brand, and any one
// of them could belong to any other healthcare site. A small set of line
// icons, tinted with each card's own accent, reads as considered and
// on-brand instead, scales cleanly at any size, and never breaks if an
// external image host goes away.
export const valueCards = [
  {
    title: "Our Mission",
    accent: "bg-primary",
    accentText: "text-primary",
    tint: "bg-primary/10",
    icon: MdVolunteerActivism,
    content:
      "To provide exceptional, person-centred care that empowers individuals to live with dignity, independence, and joy within the comfort of their own homes and communities.",
  },
  {
    title: "Our Vision",
    accent: "bg-tertiary",
    accentText: "text-tertiary",
    tint: "bg-tertiary-container/15",
    icon: MdExplore,
    content:
      "To be the UK's most trusted partner in community health, setting the gold standard for compassionate outreach and clinical excellence in home-based care.",
  },
  {
    title: "Our Values",
    accent: "bg-[#C9961A]",
    accentText: "text-[#C9961A]",
    tint: "bg-secondary-container/20",
    icon: MdWorkspacePremium,
    values: [
      { label: "Compassion First", icon: MdFavorite },
      { label: "Integrity & Transparency", icon: MdVerified },
      { label: "Community Rooted", icon: MdGroups },
      { label: "Clinical Excellence", icon: MdMedicalServices },
    ],
  },
];
export const clinicalApproach = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUJzBvwMpuCqYD7LtfXK6VsyixJjIpCWbU0_Sdbvkap9A9ABwaFvnHGMwzBsuDin4JUXg8Nsm9Tcy878_2Gz4RBfi4_mLP9vx2IS3qN4T1ZKUUALRgy7VYcd-3LWBnvDB9VLfOB2LR-tiiu1uzkk5SBW_ezpJyStad0kzsxQahw9KCTjH8U3vco4sOaZlUy7Gi34zTkKv0OD-6Aseiohxp4-PvPIgPHEo-5RTDcLztZWfcn33aSechOPU1yVwbhhiK4Ds0R6ZSacSJ",
  quote: "Clinical excellence is a human relationship.",
  author: "Sarah Jenkins",
  role: "Community Outreach Lead",
  description:
    "Our approach bridges the gap between rigorous clinical standards and deep, empathetic community care. We don't just treat conditions; we support entire lives.",
};

export const pillars = [
  {
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbgTdlcw_02B0v1JuQGbxVs1NFURNr1gnM2kZiMJSzFZ6KuYgfjwtZO9h1ziEuPrWmUWryLhzFVeOnjgBA7QZbZ_ZUgcgnpm4ts7bRz0TSHTXITUAoieJPYyQ4DHtRbExL3OMlPJcjhwiRdC598deTou7ThmksQEF9aTU6XoHiQOOL7ykLItnIgV1OJHxv-rJtBMmKuBUkpzr5Nibf_5wab_OdNe-Jk22vwEbcsjkeTtlMu7FKTO3mS5OsJZi3dj9VM38TZONYEp6W",
    icon: MdHealthAndSafety,
    title: "Crisis Intervention",
    description:
      "Rapid-response support teams deployed to de-escalate mental health crises within the home environment, reducing hospital admissions.",
    iconClass: "bg-error/10 text-error",
  },

  {
    icon: PiPlantLight,
    title: "Trauma-Informed Care",
    description:
      "All staff are trained to recognize and respond to the impact of trauma, ensuring safety and rebuilding trust.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: GiNotebook,
    title: "Evidence-Based Practice",
    description:
      "Interventions rooted in the latest clinical research, adapted for community settings.",
    iconClass: "bg-tertiary/10 text-tertiary",
  },
  {
    icon: MdFamilyRestroom,
    title: "Family Integration",
    description:
      "We work alongside families, providing psychoeducation and systemic support to strengthen the care network.",
    iconClass: "bg-[#C9961A]/10 text-[#C9961A]",
  },
  {
    icon: FaArrowTrendUp,
    title: "Continuous Monitoring",
    description:
      "Dynamic care plans that adapt to changing needs, utilizing digital health tools for proactive adjustments.",
    iconClass: "bg-primary/10 text-primary",
  },
];

export const safetyData = {
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCv0CJhwRaU5r8zz9Gaxm4BNzYW2NZ_Wd-uD7zcyBNNFq64JerlkRQwgelmepR2FRvPwq4UuNHcNbm-js41sWtR-jmLEYHtyxE06Qmw9QcZY1Rk5G7wjVifDni3ACC9xhvcoIsM_n_BytjvnnqwbeIU37EkruSf-sm34vmPnPtXZ3Dm78DPWpwBUAx9SqmfyfNfTHUcDBnRCu1iLYyj1NmJteVwJf-tnPlL3MNFw1-_UBVn2Bl8ADFngnOkRSHToNqvSK0OjSO5KQA_",

  icon: MdShield,

  title: "Safety is never an afterthought",

  description:
    "Every member of our team is DBS checked, safeguarding-trained, and operates within strict lone-worker protocols. We have zero tolerance for abuse or neglect, with clear incident reporting and multi-agency coordination.",

  chips: [
    {
      label: "Full DBS Checks",
      className: "bg-white text-[#00522b]",
      delay: "180ms",
    },
    {
      label: "Lone Worker Protocols",
      className: "bg-[#C9961A] text-[#181c20]",
      delay: "260ms",
    },
    {
      label: "Zero Tolerance Policy",
      className: "bg-white text-[#00522b]",
      delay: "340ms",
    },
    {
      label: "CQC Compliant",
      className: "bg-[#E3EEF9] text-[#235492]",
      delay: "420ms",
    },
  ],
};

export const cqcStandards = [
  {
    title: "Safe",
    color: "#036135",
    delay: 100,
  },
  {
    title: "Effective",
    color: "#235492",
    delay: 180,
  },
  {
    title: "Caring",
    color: "#C9961A",
    delay: 260,
  },
  {
    title: "Responsive",
    color: "#036135",
    delay: 340,
  },
  {
    title: "Well-led",
    color: "#235492",
    delay: 420,
  },
];

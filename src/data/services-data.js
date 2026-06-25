// data/servicesData.js
import {
  FaHouseMedical,
  FaBrain,
  FaPersonCane,
  FaWheelchair,
  FaTriangleExclamation,
  FaHandsHoldingCircle,
} from "react-icons/fa6";

export const servicesData = [
  {
    id: 1,
    title: "Mental Health Outreach",
    description:
      "Proactive, community-based support designed to engage individuals who may be struggling to access traditional services, helping prevent crisis and promote recovery.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhx_PL5rFmFW9a6-sHy_OxKaBwkOJ98tZcv_VNBRauB-W-conIiQj5HyMgyj97aLOYDzg3T4SHmRGMZC7fcQDo5SgX2sZP_1GmLn3Gb0rTck1WDBMMB4JQR3xwqg0f0ubGgfUzhCrGAtrml7P1gsNgW27ToescBwx05ml07Fba979r5V6kZxy_SSDWEUnRiz-7cnDWR9fzoTIMMU0BeT4GnOfWsLZLVPEievPhqsD940-_EXrtQKfGNqVOO7qJkJhmOqEnCYL6S90A",
    href: "/services/mental-health-outreach",
    isFeatured: true,
    badge: "Core Service",
  },
  {
    id: 2,
    title: "Home Care Services",
    description:
      "Compassionate daily assistance to help you or your loved one live independently and comfortably at home.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiZFoZ79iRX6kFC-PHsDeYWgmuEt8Tc9NcF_-a-8IQvFsqNVkPJ0NvgKdyjt-BbRLSbCiwzi9TQq0uFuoNfKbv0IuflY445msfLTwvBi-EVDrtvkahBjHWO_KhrozMN0miTORCbYi4RO978157_d7_8VEioDApgQwykfCD62fvyUxislCTezdjw5irf9hfZ3g47dCrKrzhGXR-lGDLrxk6LQ4v4SQrBpkUrCllp7TUK-xWFtgTUlg0KWoHiHDffyhp1nqxNjRMSEgY",
    href: "/services/home-care",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Elderly & Dementia Care",
    description:
      "Specialised, patient-centred care fostering dignity, memory support, and a safe living environment.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG4U14bUBZ0uGeCL62DA_aN7C1eVUyirWdSr9T7Eiy4Uw1aOCUYBmzphxDdy-fQUcwHIq426nBKs_dcrWcj9B2pNlzGekbWnBkstOUEUHxgjNayizfQwDv3InCx6JwSoDIZ_ePem7TgJbMBXr2EvsrOmRz225oP7H7IFvgO1utnUJRUO2C0kNOIWPWOreKjeIXorKXsnov0c23orcU-FetIK87WN307P4pYR-4FQFfcoJjm2ZBSU_6se1XschRS_zOrgyB9VvT_u21",
    href: "/services/elderly-dementia-care",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Disability Support",
    description:
      "Empowering individuals with disabilities to actively participate in their community and achieve personal goals.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxe7s3OotR9FeBNzxMxTySHgEKJKo_QliFu5SNK3gT2K1rJ8Qw3EGUZqxUNp4WXEQWHNQM5pmQChBRsxz-Pk-Rf4TGg-jUtV5AS_5UftmC1YeOHXkQzN8210jx_RRyy97I0xooRCrTf4Do5r03pbK6uPaxg5sxdJ8wxoNaqGCMbHnO1nI7AGwolaCbIs7ZnJaeOjSYI2Vk3gRXva3j7JtdWW89ekMbxLExsUXQNlxE7V-N6bWa1BIJc8Raqd1nyXiO9FdeKkTKahB",
    href: "/services/disability-support",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Crisis Prevention",
    description:
      "Responsive interventions designed to de-escalate situations and maintain stability before hospitalisation is needed.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACMZJGzPiXIrRh4XvwTOheyDOGIECBnKIWdOq8MAF6NuNjGzg0GNQsJpXaRZgBIpRKC6QiWsX_Rm6haI8guArFmibe3zFjvW9JQeSehvZ5ShFV_19CKGC6KrX5JGksmkT4xgoxH3rfY0QBAwJJmDqsCZIX9m8ixeum6z52c3cNtwW0wA_cjm27RbpVeu9UspIdJthq-sTkvCY5AfwQH_jxCZhhLZcr6Fl1m-y56SXDuZ3WsV2PbnYqPPEhWX0c2ii35BLwezllsBrc",
    href: "/services/crisis-prevention",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Carer Support",
    description:
      "Respite and guidance for family members, ensuring they have the strength and resources to continue caring.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQjkjeL0-sXOxctKqt1FtG1yF-pjb-eaOI2WsDIXhg06Fg2d4iXeEQ_CKkvUG0vWLb7N4-4-Oud72-MU1_jLHYqN5OJcsOKTETxnM47JKnOZIwuqUlRJMqyjZl1Pv8IE2NEit6GtGgc09Keqxnu7D8B87aQZ3Z1NLlmLpVALEsmzyWi0NgVeRN3qSBzN4NT0TtrQQ5ejg_bGMAdBusN0XM1xKQg_8QDs_kG-2K7IzJK_K1jRv8nNFhMEIzZ3648yGvSom39fxV0NsO",
    href: "/services/carer-support",
    isFeatured: false,
  },
];



export const filterCategories= [
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
    image: PLACEHOLDER_IMG,
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
    image: PLACEHOLDER_IMG,
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
    image: PLACEHOLDER_IMG,
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
    image: PLACEHOLDER_IMG,
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
    image: PLACEHOLDER_IMG,
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
    image: PLACEHOLDER_IMG,
  },
];

export const howItWorksSteps= [
  {
    number: "01",
    title: "Referral submitted",
    description:
      "Your journey begins with a simple referral from a GP, social worker, or family member.",
    image: PLACEHOLDER_IMG,
  },
  {
    number: "02",
    title: "Rapid acknowledgement",
    description:
      "We respond within 24 hours to confirm receipt and begin coordinating your initial consultation.",
    image: PLACEHOLDER_IMG,
  },
  {
    number: "03",
    title: "Home assessment arranged",
    description:
      "Our clinical lead visits your home to understand your environment, needs, and personal goals.",
    image: PLACEHOLDER_IMG,
  },
  {
    number: "04",
    title: "Personalised care plan created",
    description:
      "We co-design a detailed clinical pathway tailored specifically to your health and wellbeing.",
    image: PLACEHOLDER_IMG,
  },
  {
    number: "05",
    title: "Regular visits begin",
    description:
      "Your dedicated care team starts scheduled visits, providing consistent and compassionate support.",
    image: PLACEHOLDER_IMG,
  },
  {
    number: "06",
    title: "Review, adapt, and plan discharge",
    description:
      "We continually monitor your progress, adjusting the plan to ensure optimal outcomes and independence.",
    image: PLACEHOLDER_IMG,
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
  left: PLACEHOLDER_IMG,
  right: PLACEHOLDER_IMG,
};

export const ctaBackgroundImage = PLACEHOLDER_IMG;
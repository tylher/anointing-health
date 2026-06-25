import { FaFacebookF, FaInstagram, FaShareAlt } from "react-icons/fa";

/* ─── Navigation ──────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

/* ─── Hero trust chips ────────────────────────────────────── */
export const trustChips = [
  { label: "CQC Compliant" },
  { label: "DBS Checked" },
  { label: "7 Days a Week" },
];

/* ─── Hero images ─────────────────────────────────────────── */
export const heroImages = {
  primary:
    "https://lh3.googleusercontent.com/aida/AP1WRLvwEMaqc4EXOvVl2Is83DvhckKPc027qy-s_WBuFrqJrmlXmj-9bayfARv4oUwteBRhBHxKfKAlSmJJRCztLLVxjYkAJOo4tIrXTSPwR4Evnk-gr7oK14UgDX1dcPYoRE5k12pEmy1szTkFsW-N9KKFJC6sZ_fg9rukWX67NxtxsHDju-ek86jLkc4p8fz-l279XKYzgU_H1FqYLt_8i2RHqz8EmJR6klgfeTr85ImJ2RrQ3DMYqwhUOo96",
  secondary:
    "https://lh3.googleusercontent.com/aida/AP1WRLsBBPEuW67gSC5MaKsCTQyFgLWL3SRNvV1yuKAhWHoJIrG3-iPpJIhSC3AnXMIkUBGVNn_FqPbgbI1zDX8ObgsPqdpItTPLDRwUKwplR5FkoJZ4JwyJSgrOimNYF955cfdKSOr8UyQAf9dhsrtw_s8SVBgz6-hcaKZHN2Rs9raGwcnyrJF-xZYwGI1KprHW8uSXAbKW1AW_2j-EuT3vm07XRP9LotBDN6UvdzxrSB_Go6RZKo9a51eUaSk",
  tertiary:
    "https://lh3.googleusercontent.com/aida/AP1WRLsTJxiW4_fbX6lgF9EhTYbWE8r5IxcSXH_UpuNh-RfPUJrqQG7dOf23ms5EMtvsQ-UNUL6ygf6LibmOzGibsxEfgYL6ONDMDbhBpIBf3HtNPy6oBwB5VIbmdtucbETMfO4zyvvSn6MXMXnazwEuid20VvWmCeL0PL9ZxOyA4DQCNBrAyhNTrA_bWbwq3DwufyM8Op-CSkdwhD34Q6XhT6_wxsffaAS5EGr2GPXorqRGxi2pBco7LpdVY8I",
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
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyf8w38J3f61cODddUH462v3n20WP55Shr6ewWE_Il8wsHqlj6F7mmlue74z9CuusWIvKZNEtoio9MVO7WbTz-x2F2xpmrfG9SIHWSwDRAl7--dqHSua1RFyAEcJ-XmfVceCR8ZdPJK72RsGtz6GsJuU7ilnNnTOpMBTsDgKFptCqrrHqyhyrJockISXcCtMt7z9jGJv_FSnI-P8VZER43jyALsjZRv-vhWg_0r2sLqm4nNrdUHtn95z9eoscMgK8f19jaHdHvhtQV",
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
    ctaHref: "#",
  },
  {
    id: "families",
    label: "Families & Carers",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDotAT5nvyUtuAD0NlV5ih8D63mNnWA7j2qlkyuaTbt40vDOREo86th9tzrP6_3eQ39zzuY3OgPtEhZfXG1_Zmhzl7AjRyGfTEPHBaCY36NqjbDTb0TrvS0tHePsQ2XKIsN2WafgJqX_J4DW7EyeAdGWf_-mdAkSsQQorDi1JB3dMirZc_JH7GQHmI4xjC4Fo6mgXjPT9iTKU62x1IO-12ijPx2WKBMbE_FEIjx6n-Ws__YquOn3Kyaohzk5YGOj95nJH51KZY0iDru",
    imageAlt: "Families and Carers Support",
    description: "We support the people who support others.",
    checkItems: [
      "Understanding your loved one's care",
      "Carer wellbeing support",
      "Guidance on crisis situations",
      "Signposting to carer resources",
    ],
    ctaLabel: "Explore carer resources",
    ctaHref: "#",
  },
  {
    id: "professionals",
    label: "Professionals & Referrers",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCR09dKuK8OMTVxX9hUgCLElm4fgws01ZOPh8hPGXVSSvs0ghIBCL4cTm89zTxvKnXoCBRcDgp2d_TSnTN_54qikKdBN-ck8LZ3F0pMN8jUzZAjl5OXATPbcUG56TEI8OUfWcB1f7rBTIpAOrevohTPIobM-BdBM1w73ooNBK0RkV2X4VuTmX1FBNP0we8NfQTT9JQymI1YtXxtFQN8FJzy0OVv_Ut0cd4E50Cx-snzzO-sNcaR3KHm32LBcBlBMJK9B7Eo5ZWGAgUs",
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
    ctaHref: "#",
  },
];

export const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Who We Help", href: "#" },
  { label: "About", href: "#" },
  { label: "Referrals", href: "#" },
  { label: "Impact", href: "#" },
];

export const services = [
  { label: "Home Care", href: "#" },
  { label: "Mental Health Outreach", href: "#" },
  { label: "Elderly Care", href: "#" },
  { label: "Disability Support", href: "#" },
  { label: "Crisis Prevention", href: "#" },
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

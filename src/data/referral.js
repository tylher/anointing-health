// All copy, image, and config data extracted from the referrals markup.
// Keeping this separate from the components makes the copy easy for
// non-engineers to edit, and keeps the JSX focused on layout + motion.

import { MdCalendarMonth, MdEventAvailable, MdHub, MdSpeed, MdTimer, MdVerified } from "react-icons/md";

export const HERO_BADGE = "FOR PROFESSIONALS";

export const HERO_HEADING =
  "Fast, straightforward referrals — because your patients can't wait";

export const HERO_PARAGRAPH =
  "We understand the critical nature of timely interventions. Our streamlined referral process ensures a rapid response within 24 hours, connecting your patients with expert care immediately.";

export const FEATURE_PILLS = [
  {
    icon: MdTimer,
    label: "24hr Response Target",
    bg: "bg-primary-container/10",
    text: "text-primary",
  },
  {
    icon: MdEventAvailable,
    label: "7 Days Available",
    bg: "bg-secondary-container/20",
    text: "text-on-secondary-container",
  },
  {
    icon: MdVerified,
    label: "CQC Regulated",
    bg: "bg-tertiary-container/10",
    text: "text-tertiary",
  },
  {
    icon: MdHub,
    label: "Multi-agency Coordination",
    bg: "bg-primary-container/10",
    text: "text-primary",
  },
];

export const HERO_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyXkDh08S3fah6wT8hr9F1_vJM43TiegndzYFizKWF9dkr3mVnHuEJeQKiNEsytU-nuk_gRyqcPQ10VJ9gj9sft3qz2LzNnKovOY0tJzp3KYQisvOaNc86WdEsoJ4q2X8V7cw_itUOqRRN2TguJ8DpMMrUoEUbGOa2TAG9mJoWjyRXs8UuCVC10DV65Yyo9bMy04o0jFca8NyRE6gKElDpNCHTKZ5lqvF7r4HUrydY_0Wf7HkZg-E0J0nMKN-fPsv4PkYOyuA2Ik5_",
  alt: "Professional documentary-style photography for a healthcare website. A female GP or senior nurse in her 40s, wearing a stethoscope, seated at a clean modern desk in a bright UK clinical office. She is focused but calm while reviewing patient notes on a laptop. Soft natural window light, warm-lifted shadows, high-quality editorial photography. Forest green accents in the background.",
};

export const FLOATING_STATS = [
  {
    icon: MdSpeed,
    label: "Average response",
    value: "< 24hrs",
    position: "top-20 right-0",
    iconBg: "bg-primary-container text-on-primary-container",
    valueColor: "text-primary",
    borderColor: "border-primary/10",
    duration: 4,
    delay: 0,
  },
  {
    icon: MdCalendarMonth,
    label: "Weekly availability",
    value: "7 Days",
    position: "bottom-20 -left-10",
    iconBg: "bg-secondary-container text-on-secondary-container",
    valueColor: "text-secondary",
    borderColor: "border-secondary/10",
    duration: 5,
    delay: 1,
  },
];

export const PROCESS_INTRO = {
  heading: "Your referral starts a chain of care.",
  paragraph:
    "Our streamlined process ensures that every patient is reviewed quickly and appropriately matched to our clinical services.",
};

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "You submit",
    description: "Complete the secure form",
    badgeBg: "bg-secondary-container text-on-secondary-container",
  },
  {
    number: 2,
    title: "We review",
    description: "Clinical triage within 24hrs",
    badgeBg: "bg-white/20 text-white",
  },
  {
    number: 3,
    title: "We act",
    description: "Care coordination begins",
    badgeBg: "bg-white/20 text-white",
  },
];

export const FORM_TABS = [
  { label: "Referrer", active: true },
  { label: "Patient", active: false },
  { label: "Clinical", active: false },
];

export const FORM_FIELDS = [
  { id: "firstName", label: "First Name", type: "text", half: true },
  { id: "lastName", label: "Last Name", type: "text", half: true },
  { id: "email", label: "Professional Email", type: "email", half: false },
  { id: "org", label: "Organization / Trust", type: "text", half: false },
];

export const NOTES_FIELD = {
  id: "notes",
  label: "Brief Clinical Summary",
  rows: 4,
};

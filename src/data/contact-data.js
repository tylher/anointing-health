// ─── Hero ─────────────────────────────────────────────────────────────────────

import { MdCall, MdEmail, MdMail, MdPhone, MdSchedule } from "react-icons/md";

export const HERO = {
  heading: "Let's talk. We're here to help.",
  image: {
    src: "/images/contact-1.jpg",
    alt: "Friendly healthcare receptionist answering phone call",
  },
};

// ─── Pathway cards ────────────────────────────────────────────────────────────

export const PATHWAY_CARDS = [
  {
    id: "support",
    image: {
      src: "/images/contact-2.jpg",
      alt: "Hand reaching out in support",
    },
    accentColor: "#036135", // primary
    accentClass: "border-primary",
    title: "Get Support",
    linkLabel: "Start here",
    linkColor: "text-primary",
    linkHoverColor: "text-surface-tint",
    href: "#contact-form",
  },
  {
    id: "refer",
    image: {
      src: '/images/contact-3.jpg',
      alt: "Healthcare professional reviewing notes",
    },
    accentColor: "#3f6dad", // tertiary-container
    accentClass: "border-tertiary-container",
    title: "Refer Someone",
    linkLabel: "Submit a referral",
    linkColor: "text-tertiary-container",
    linkHoverColor: "text-primary",
    href: "/referral",
  },
  {
    id: "partner",
    image: {
      src: "/images/contact-4.jpg",
      alt: "Professionals in a collaborative meeting",
    },
    accentColor: "#C9961A",
    accentClass: "border-[#C9961A]",
    title: "Partner With Us",
    linkLabel: "Get in touch",
    linkColor: "text-[#C9961A]",
    linkHoverColor: "text-primary",
    href: "#contact-form",
  },
];

// ─── Contact form ─────────────────────────────────────────────────────────────

export const FORM_ROLE_OPTIONS = [
  "Patient",
  "Family Member",
  "Healthcare Professional",
  "Other",
];

// ─── Contact details ──────────────────────────────────────────────────────────

export const CONTACT_DETAILS = [
  {
    icon: MdMail,
    label: "Email",
    value: "hello@anointinghealthcare.co.uk",
  },
  {
    icon: MdCall,
    label: "Phone",
    value: "01228 123 456",
  },
  {
    icon: MdSchedule,
    label: "Hours",
    value: "Mon - Fri: 9am - 5pm",
  },
];

export const MAP_IMAGE = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADRkkPwhVjWJ9TfNHMGWXZLWDy1eBbAjXOqF7q7z831l7qBJNgfOj4AIODYHT7og92dvo3KeR88O5myG_WZQkTeZF6N7rJRHz21PxFUtKPGk6eKFN3WglLJB1FT11c7iTmvUfUL2qe6dTu4RcsZUSPCZcKmCRevFZ2g1L2FvoY9KMJ8wONOekglo_9eQdMwEnc-3ogdzhddAG_t_pGZ3OcQV4dk4cLlNC2NR_x11E_Vv5vA-b8bk-uJr-61s8t3y_R7yelig4haM1C",
  alt: "Map of the Cumbria region",
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    dotColor: "bg-primary",
    question: "How quickly can care begin?",
    answer:
      "We typically aim to commence care within 48 hours of an initial assessment, depending on the complexity of needs.",
  },
  {
    id: "faq-2",
    dotColor: "bg-tertiary-container",
    question: "Do you cover all of Cumbria?",
    answer:
      "Yes, we provide services across most of Cumbria. Please contact us with your specific location to confirm availability.",
  },
  {
    id: "faq-3",
    dotColor: "bg-[#C9961A]",
    question: "Can I change my care package later?",
    answer:
      "Absolutely. Care needs evolve, and our plans are fully flexible to accommodate changes.",
  },
];

// ─── Closing band ─────────────────────────────────────────────────────────────

export const CLOSING_BAND = {
  heading: "However you reach out, a real person will respond.",
  avatars: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2vt5lQkoPRZIVH6r01WN1hG9x1HJSBjNXa5GfouZpbFuRvlTFBetgG7geD6gOJ4txDyvIn9aCt3U4ztbixfxSYggpKbDEDJJxIJbdSEiOwagMvPOLoTrURvSTtg0f8A0RRlblSlVg0ukm9SosUDygbosRviNSnDFVsKYQLRgze5JVizjOyW3p1tu2jn8quPIYvb46NDhGVuH2hnMGRvAlep2I3U2gjqPjpq5yLCYPjDblmf7yfa0k6Dtymw0W80e_mfhCbtkJ141T",
      alt: "Smiling female healthcare worker in a smart green uniform",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUOgoYpvV5c9K5SG8n0r5uOI2V9I3-G_xl2RPVFlcOmpZjCxCl2qLRIU-8iNYJFvsk9QPvIyWbvYb1Mr4UdOhwzrbLDUj0Mif9rWIkrrtPGLjC4DbE-Lx5IfOO2BP7bLfdLPfcNxrRMBoNuQRJ5gXSZU_YmIj6RMBHYaUV089CIxkBGhvNl_s_fjfzb9a_0LnAo-IoR8d4eT-wUZMLY8OoKe6FGyBy7tjLUysOQZHIGOSHYAwzLuuwm3Mi4ZtdnTeR6g506mapyvnr",
      alt: "Compassionate male care coordinator in a crisp white shirt",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADzyGkf1W-nvk0OjwFpzNk1HZ4LEvJeZWIDShp31IAzgjQs8c_HGF69vXjx9P-gxD5co5zUUKdY23GJtVYIM3Msib83l8XDWHS0qFJflEv128RdDM35bYhxMmVmkFLpwWcwpq8M0zvWXKUg3-xdlxKVWvfzCEsjnsI7v4zoOE6PS_Z2jI9bgWHs4r-qgWdkTlC_ORHZsSx5_ra11nW-FDoR_d_Hhiir0B82Q_-wkrHqCOiD3XnxlrcXyxXwSfVOFxJc1U8ci_oV1iB",
      alt: "Experienced female nurse with a welcoming expression",
    },
  ],
};

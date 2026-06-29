import { FaFacebookF, FaInstagram, FaShareAlt } from "react-icons/fa";

/* ─── Navigation ──────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/our-approach" },
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

// ─── Who We Serve ────────────────────────────────────────────────────────────

export const WHO_WE_SERVE = [
  {
    id: "severe-mental-illness",
    title: "Adults with Severe Mental Illness",
    description:
      "Living with schizophrenia, bipolar disorder, or severe depression who need consistent community support",
    color: "#036135",
    icon: "psychology",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBglChdSYnjAhhK0THu8GS2JZ-Tb4wZSYvKeyU3dBkkpP_bP0Yx_LDRbfZjXxlktwXy_8gaRPl42FuaNvPlfolbCXVTzJQy1zW-2OmUVViKg0Rd2rIiox3W1YciKteQwr8sqSIR2BXfejMw72B4gOonXxe24sP6ayhhYtJcG0sNR79CKv4j4_x3ffo7kDaQjLbsjWYcmHofjUN2NK_AyNsUAX5msXT6XIXygmbwTWGfWLs9vYUfUoEXYmRso-E9TIzOvl2m0bqoisXx",
  },
  {
    id: "risk-of-hospital",
    title: "People at Risk of Hospital Admission",
    description:
      "Those experiencing escalating crisis who could benefit from intensive outreach to prevent acute admission",
    color: "#C9961A",
    icon: "emergency_home",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkNs3sDA3YgjLSTbQIEnEje-aSmh6NqwnvAkPB9o4mHqZ4_B-m-UK_kfCkQbQWsRMWO57X4MwPvCe7eIIekPDd7r-lxcuWUQNPiYzxANyY5XWFzhJW1yVHNX_EAIG79X_Ck3eyxOWxsLrvLmBsN4iC91lCIx0XhEc_z72LqPUwUw53XTXlEmhK7IoUZbku3RbUGIS3m60VkpVK5mxCz8DmUB9s685FkXK9YFGE20GuFFOjrHfX3tq-PVLGbGpe1Q0pBq9OsyKPzKyA",
  },
  {
    id: "isolated-individuals",
    title: "Isolated Individuals",
    description:
      "Older adults or those in rural areas who have disengaged from care or have limited social connections",
    color: "#235492",
    icon: "person_off",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDx1XUdyPyp5t0D_XHTNfx6QQzAuTVaoIHYeRqGIYiAXKyiECfIj11PdsxL6uhgGrPt3cKmi_4gs2I-Jj9lxP9KiFymrwk3AKZULqdIciS2yVjA_SwrhBNBbm2rdM1EHuFKaWjoLWsQsDFJ6phMIvihq7iV1Nxkx81_j5ng",
  },
  {
    id: "personal-care",
    title: "Individuals Requiring Personal Care",
    description:
      "Adults who need day-to-day assistance with personal care, medication, and daily living tasks",
    color: "#036135",
    icon: "front_hand",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnPvtwc8_Kf0ExQ-Zr4na46WviI2nvT6UC3cEmRM_liiPwZxrZmEU9nIdHvIJL_3VyIb5rtxsWM65_KQKkJ0nQDPu7TPhWDFejQZwb2pMXjyXzt0M1CmjAap1P__bIK_MyvmZi72MGhJJ1-hB0wX14uCiBtoR5efJXlG5B0nX4xM7PV5Mq06jUVsc892SMlq9GkrUIumbRQYU4LrJhAPWzR-4hwb4OmuWVunJMk7hdagpff7TzRmMleIwlyjEZ9lhhoLMus5RAUe0I",
  },
];

// ─── A Typical Day Timeline ───────────────────────────────────────────────────

export const DAILY_TIMELINE = [
  {
    id: "scene-1",
    time: "8:30am",
    description: "Morning check-in and route planning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMIc6dA85wLRfP9E8rOLzEfIJVIWTfdMZpScjRVZR1K1ZfGvrOzd7mVU-8WLAeAHnfl4ic9qfHmbku0e0PxFKDB76NOMCVmy9Ov0OR5HdUhzi9e3PWOfHB9i8YLy9P6kEQlfgdpmAd16a14iKkJ9xSdCecnYu3I7Gq_mp4xrI2Fc6lzijcUUXiY6oKTHiFnGbyiUETpNOhj2jW-yZjaSRreKPLGDKZpcIsmw3ub-0MHpXtb4Lrjq71H9js4Fq7KuOKLcjrgWBMn0n1",
  },
  {
    id: "scene-2",
    time: "10:00am",
    description: "First home visit of the day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMGiQ1w5TjT-rAz94AoDba_zjTSOZ5vxFK97UP3MPhR7jQ0sBLcvNUffhzQihp-H2BKsX6wJ7JNO66_oMha4mmpiuJoMKmuzczTbXRfp3qmT8gf6BoILfeHbwxF8QUXEJwX6DMjF-tXj-GlAOGWNl8tjkg_lKUumx9EriNHBI0LlPsjQDIIYZ8JmNmH53AgliC5xGVv_inWLBJgPIpW7fqmqbLHO8ui67Nr60GJZxt-gQH4Y-f6Mc_S1kszK7P_nzS8G6uGJ7A6PE3",
  },
  {
    id: "scene-3",
    time: "1:00pm",
    description: "Lunch, conversation, and connection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIA2u4nnZSmh3SwhiOgFlOaJ0u40PIZkTarZHsNwaA1M3sckZoKtsmS49IxsR8M906DYQLFssca3OwLuvGECiaMaYCtcP7sTl_XXxYbBpz430krpanSIl98n4bkeCMWswZfPeb9FhWjyBuaD0qgWgE8x8hUnMNL_GRS4X645v3i0_mzE9BhMkpK6ZhS6soPI99VlYtnTFz2CXiu3n4KGwXJggJwC4nsX7wxG0Vnm_DYGLagU8cjbV1rB5G1t1i3eMCNjxCycQuXS9v",
  },
  {
    id: "scene-4",
    time: "4:00pm",
    description: "Care notes updated, ready for tomorrow.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHOoLyomc7MNIIo4_jOF45NqTfd7tj76O5sftscDplZ8tsX8oBlp0jXDqkR5NtGgk9r549l8HQCx0okflR507ZMgenofOGmifR8pUmBlmPysVbLA9oToaHdfAAAOIhz1IT0AymDAVMejxdPaknykuP-QavULP844O9TOXRLlotAAReOzckhNmd1gHOhoxiCP_blXhpl2zsqZycYCBRHhSshQgjk0Z7ca7r6CktCcKwHThQFjH3L0ntfBmIOnZCRnTQZZmgV3nJoBdK",
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
  heroBannerImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAOdURIR30RKQSLMiiGNveecAsRKaSgxlm6jcNcPV6l-d_w069_d8F9uWVA5I_WsSNfVFxiT-jU9ABzwV6Qwqr6f2EqwTVwXO9GbZqcIHJk9beH91l-OY-4D2rZweuGbLZ9c4dZvNF4Uc4Tz6CLI6awhA28ZeneIHG5-cO0cL5JEjoR6mhKTCfsEjzsAWvridV6DTG2ntxSTVqk_gdv_EK0Ca_wL5L7aNSgMmTl5a5IRJfdyMOw0vMYoTRnVLifASGcTkN2uXPQUUd0",
  ctaPrimary: { label: "Am I eligible?", href: "#eligibility" },
  ctaSecondary: { label: "Talk to us first", href: "#contact" },
  floatingChip: "Every story matters",
};

// ─── Section Headings ─────────────────────────────────────────────────────────

export const SECTION_HEADINGS = {
  typicalDay: "A typical day with Anointing Health Care",
  coverage: "Our Reach Across Cumbria",
  coverageFooter: "Wider UK coverage via our specialized home care services",
};

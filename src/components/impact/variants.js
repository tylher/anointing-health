// Shared stagger-reveal variants consumed by every section via
// `variants={REVEAL}` on the container and `variants={ITEM}` on children.
// Framer Motion propagates the "visible" state down the tree automatically,
// so children animate in with the stagger defined here — no per-child delay needed.

export const REVEAL = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const ITEM = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
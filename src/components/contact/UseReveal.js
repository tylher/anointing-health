// Shared entrance-animation variants consumed by every section.
// Each section passes `variants={REVEAL}` and `initial="hidden"`
// `whileInView="visible"` to its outermost motion element, then
// children use `variants={ITEM}` to stagger in automatically via the
// container's `staggerChildren`.

export const REVEAL = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const ITEM = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

import type { Variants } from "framer-motion";

export const easing = [0.25, 0.1, 0.25, 1] as const;

export const viewportConfig = {
  once: true,
  margin: "-80px",
} as const;

/** Fade up — use as spread props on <motion.X> */
export const fadeInUp = {
  initial:    { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: easing },
} as const;

/** Fade in — no vertical movement */
export const fadeIn = {
  initial:    { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: easing },
} as const;

/** Stagger container */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.1,
    },
  },
};

/** Stagger child */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeIn: Variants = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export const staggerItem: Variants = {
  initial:  { opacity: 0, x: -8 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const priceRowVariant: Variants = {
  initial:  { opacity: 0, x: -12 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

export const arcFadeIn: Variants = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
};

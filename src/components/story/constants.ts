import type { Transition, Variants } from "motion/react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = {
  once: true,
  amount: 0.25,
};

export const revealTransition: Transition = {
  duration: 0.8,
  ease: EASE_OUT,
};

export const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const contentItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

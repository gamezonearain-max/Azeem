import type { Transition, Variants } from 'motion/react';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DEFAULT_TRANSITION: Transition = {
  duration: 0.45,
  ease: EASE_OUT_EXPO,
};

export const INTERACTION_TRANSITION: Transition = {
  duration: 0.18,
  ease: EASE_OUT_EXPO,
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.15,
} as const;

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
};

export const scaleRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
};

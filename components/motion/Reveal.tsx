'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  DEFAULT_TRANSITION,
  VIEWPORT_CONFIG,
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/motion';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  if (immediate) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ ...DEFAULT_TRANSITION, delay }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={fadeUpVariants}
      transition={{ ...DEFAULT_TRANSITION, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}

export function StaggerGroup({
  children,
  className,
  immediate = false,
}: StaggerGroupProps) {
  if (immediate) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={staggerContainerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

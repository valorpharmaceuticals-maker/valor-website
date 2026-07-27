"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Shared scroll-reveal helpers built on Framer Motion.
//
// - <Reveal> animates a single block into view (fade + rise) the first time it
//   scrolls into the viewport.
// - <Stagger> + <StaggerItem> reveal a group of children one after another.
//   Variant propagation flows through the React tree, so intermediate antd
//   Row/Col wrappers between <Stagger> and <StaggerItem> are fine.
//
// Both respect the user's "reduce motion" OS setting: when set, content simply
// fades (no transform) so nothing slides around.

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  style,
  gap = 0.09,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gap?: number;
  amount?: number;
  once?: boolean;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
  };
  return (
    <motion.div
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 26,
  className,
  style,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
  return (
    <motion.div className={className} style={style} variants={item}>
      {children}
    </motion.div>
  );
}

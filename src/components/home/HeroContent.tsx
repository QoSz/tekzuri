"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring" as const, damping: 30, stiffness: 100, mass: 0.8 };

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "2rem", transition: spring },
};

export function StaggerReveal({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function AccentLine() {
  return <motion.span className="h-px bg-border-strong w-8" variants={lineVariants} />;
}

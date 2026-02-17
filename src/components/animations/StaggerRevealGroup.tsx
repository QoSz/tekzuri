"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StaggerRevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerInterval?: number;
  delayChildren?: number;
  viewportAmount?: number;
}

export function StaggerRevealGroup({ children, className, staggerInterval = 0.15, delayChildren = 0, viewportAmount = 0.2 }: StaggerRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: viewportAmount });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerInterval, delayChildren },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

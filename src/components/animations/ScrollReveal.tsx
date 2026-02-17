"use client";

import { useMemo, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const hidden = { opacity: 0, y: 20, filter: "blur(6px)" } as const;
const visible = { opacity: 1, y: 0, filter: "blur(0px)" } as const;
const transitionConfig = { type: "spring", damping: 30, stiffness: 100, mass: 0.8 } as const;

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const transition = useMemo(() => ({ ...transitionConfig, delay }), [delay]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

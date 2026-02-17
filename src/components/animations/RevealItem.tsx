"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 30, stiffness: 100, mass: 0.8 };

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring },
};

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

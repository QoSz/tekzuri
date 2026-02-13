"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface HeroAnimationsProps {
  taglineText: string;
  headline: ReactNode;
  description: ReactNode;
  ctaButtons: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      mass: 0.8,
    },
  },
};

const accentLineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "2rem",
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      mass: 0.8,
    },
  },
};

export function HeroAnimations({
  taglineText,
  headline,
  description,
  ctaButtons,
}: HeroAnimationsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(useTransform(mouseX, (v) => v * 0.03), {
    damping: 30,
    stiffness: 100,
  });
  const glowY = useSpring(useTransform(mouseY, (v) => v * 0.03), {
    damping: 30,
    stiffness: 100,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide">
                <span className="w-8 h-px bg-accent" />
                {taglineText}
              </span>
            </div>
            {headline}
            {description}
            {ctaButtons}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative glow with mouse parallax */}
      <motion.div
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
        style={{ x: glowX, y: glowY }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div className="mb-6" variants={childVariants}>
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide">
              <motion.span
                className="h-px bg-accent"
                variants={accentLineVariants}
              />
              {taglineText}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={childVariants}>{headline}</motion.div>

          {/* Description */}
          <motion.div variants={childVariants}>{description}</motion.div>

          {/* CTA Buttons */}
          <motion.div variants={childVariants}>{ctaButtons}</motion.div>
        </div>
      </div>
    </motion.section>
  );
}

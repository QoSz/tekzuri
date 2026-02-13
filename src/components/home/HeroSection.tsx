"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { WordCarousel } from "./WordCarousel";

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

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

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const tagline = (
    <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide">
      {prefersReducedMotion ? (
        <span className="w-8 h-px bg-accent" />
      ) : (
        <motion.span className="h-px bg-accent" variants={accentLineVariants} />
      )}
      Technology Meets Craftsmanship
    </span>
  );

  const headline = (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
      Build with
      <span className="block mt-2">
        <WordCarousel words={words} />
      </span>
    </h1>
  );

  const description = (
    <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
      Inspired by the Japanese philosophy of{" "}
      <span className="text-foreground font-medium">monozukuri</span>, we craft
      digital solutions with meticulous attention to detail and timeless quality.
    </p>
  );

  const ctaButtons = (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="/contact"
        className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-base font-medium hover:bg-accent-light transition-all duration-300 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40"
      >
        Start Your Project
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      <a
        href="#services"
        className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-base font-medium border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 rounded-full"
      >
        Explore Services
        <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
      </a>
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-4xl">
            <div className="mb-6">{tagline}</div>
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
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-4xl">
          <motion.div className="mb-6" variants={childVariants}>
            {tagline}
          </motion.div>
          <motion.div variants={childVariants}>{headline}</motion.div>
          <motion.div variants={childVariants}>{description}</motion.div>
          <motion.div variants={childVariants}>{ctaButtons}</motion.div>
        </div>
      </div>
    </motion.section>
  );
}

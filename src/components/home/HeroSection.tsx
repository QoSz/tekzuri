"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StaggerReveal, RevealItem } from "./HeroContent";
import { WordCarousel } from "./WordCarousel";

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Oversized background text */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden pr-8"
        aria-hidden="true"
      >
        <motion.span
          className="font-heading text-[18vw] lg:text-[14vw] font-bold tracking-tight text-white/[0.02] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-heading)' }}
          animate={prefersReducedMotion ? undefined : { x: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          TEKZURI
        </motion.span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <StaggerReveal className="max-w-3xl">
          <RevealItem>
            <h1
              className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] font-light tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Build with{" "}
              <span className="block mt-1">
                <WordCarousel words={words} />
              </span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-base sm:text-lg text-[#a0a0a8] max-w-xl leading-relaxed mb-10">
              Inspired by the Japanese philosophy of{" "}
              <span className="text-[#f0f0f2] font-medium">monozukuri</span>, we craft
              digital solutions with meticulous attention to detail and timeless quality.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-[#101013] px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-all duration-200 rounded-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}
              >
                Start Your Project
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="cursor-pointer inline-flex items-center justify-center gap-3 text-[#f0f0f2] px-7 py-3.5 text-sm font-medium border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.24)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
              >
                Explore Services
              </a>
            </div>
          </RevealItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

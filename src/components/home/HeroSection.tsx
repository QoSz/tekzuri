"use client";

import { StaggerReveal, RevealItem } from "./HeroContent";
import { WordCarousel } from "./WordCarousel";
import { HeroVisual } from "./HeroVisual";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column: text content */}
          <StaggerReveal>
            <RevealItem>
              <h1
                className="text-[2.5rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-normal tracking-[-0.03em] leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Build with{" "}
                <span className="block mt-1">
                  <WordCarousel words={words} />
                </span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="text-base sm:text-lg text-fg-secondary max-w-xl leading-relaxed mb-10">
                Inspired by the Japanese philosophy of{" "}
                <span className="text-foreground font-medium">monozukuri</span>, we craft
                digital solutions with meticulous attention to detail and timeless quality.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-bg-deep px-8 py-3.5 text-sm font-medium hover:bg-white/90 transition-all duration-200 rounded-full active:scale-[0.98] focus-ring"
                  style={{ boxShadow: 'var(--shadow-button)' }}
                >
                  Start Your Project
                  <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="cursor-pointer inline-flex items-center justify-center gap-3 text-foreground px-8 py-3.5 text-sm font-medium border border-border-default hover:border-border-hover hover:bg-white/[0.04] transition-all duration-200 rounded-full focus-ring"
                >
                  Explore Services
                </a>
              </div>
            </RevealItem>
          </StaggerReveal>

          {/* Right column: orbital visual */}
          <div className="hidden md:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

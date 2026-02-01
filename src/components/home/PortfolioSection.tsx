"use client";

import Image from "next/image";
import { useRef } from "react";

const portfolioItems = [
  { name: "Mulsons", subtitle: "Spice Manufacturing", url: "https://mulsons.co.ke", image: "/clients/mulsons.webp" },
  { name: "SKL", subtitle: "Packaging Solutions", url: "https://skl.co.ke", image: "/clients/skl.webp" },
  { name: "Kova Collective", subtitle: "Social Commerce Agency", url: "https://mykova.co", image: "/clients/kova.webp" },
  { name: "Mandela Barbery", subtitle: "Barbershop", url: "https://mandelabarbery.co.ke", image: "/clients/mandela-barbery.webp" },
  { name: "Criss Cross", subtitle: "FMCG", url: "https://crisscross.co.ke", image: "/clients/criss-cross.webp" },
  { name: "UFS", subtitle: "Freight & Logistics", url: "https://www.linkedin.com/company/ufsltd", image: "/clients/ufs.webp" },
];

export function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
              <span className="w-8 h-px bg-accent" />
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Selected projects
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A showcase of our recent work across various industries, demonstrating
              our commitment to excellence and attention to detail.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container - full width */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Left spacer for centering on large screens */}
        <div className="shrink-0 w-0 lg:w-[calc((100vw-80rem)/2)]" />

        {portfolioItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative shrink-0 w-[90vw] sm:w-[80vw] md:w-[700px] lg:w-[850px] aspect-[2/1] overflow-hidden rounded-2xl snap-start hover-lift"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-2xl lg:text-3xl font-semibold mt-2">
                  {item.name}
                </h3>
              </div>

              {/* Visit button */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                  Visit Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        ))}

        {/* Right spacer */}
        <div className="shrink-0 w-6 lg:w-[calc((100vw-80rem)/2)]" />
      </div>

      {/* View all link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-muted text-sm">
            Drag or use arrows to explore all {portfolioItems.length} projects
          </p>
          <a
            href="/our-work"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
          >
            View all projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

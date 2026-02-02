"use client";

import { useRef, type ReactNode } from "react";

interface ScrollablePortfolioProps {
  children: ReactNode;
  itemCount: number;
  header: ReactNode;
}

export function ScrollablePortfolio({ children, itemCount, header }: ScrollablePortfolioProps) {
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
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          {header}

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

        {children}

        {/* Right spacer */}
        <div className="shrink-0 w-6 lg:w-[calc((100vw-80rem)/2)]" />
      </div>

      {/* Footer info */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-muted text-sm">
            Drag or use arrows to explore all {itemCount} projects
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
    </>
  );
}

import { HeroAnimations } from "./HeroAnimations";
import { WordCarousel } from "./WordCarousel";

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

export function HeroSection() {
  return (
    <HeroAnimations
      taglineText="Technology Meets Craftsmanship"
      headline={
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
          Build with
          <span className="block mt-2">
            <WordCarousel words={words} />
          </span>
        </h1>
      }
      description={
        <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
          Inspired by the Japanese philosophy of{" "}
          <span className="text-foreground font-medium">monozukuri</span>, we
          craft digital solutions with meticulous attention to detail and
          timeless quality.
        </p>
      }
      ctaButtons={
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-base font-medium hover:bg-accent-light transition-all duration-300 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Start Your Project
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-base font-medium border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 rounded-full"
          >
            Explore Services
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      }
    />
  );
}

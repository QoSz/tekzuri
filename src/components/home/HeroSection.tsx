import { WordCarousel } from "./WordCarousel";

const words = ["Elegance", "Precision", "Excellence", "Mastery"];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="animate-fade-in opacity-0 mb-6">
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide">
              <span className="w-8 h-px bg-accent" />
              Technology Meets Craftsmanship
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Build with
            <span className="block mt-2">
              <WordCarousel words={words} />
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up opacity-0 animation-delay-200 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-12">
            Inspired by the Japanese philosophy of <span className="text-foreground font-medium">monozukuri</span>,
            we craft digital solutions with meticulous attention to detail and timeless quality.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up opacity-0 animation-delay-400 mt-20 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground">6+</div>
                <div className="text-sm text-muted mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-border-card rounded-full px-5 py-2.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400/80" />
          </span>
          <span className="text-white/80 text-sm font-medium">Available for new projects</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to build something elegant?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-fg-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss how we can help bring your vision to life with craftsmanship,
          care, and cutting-edge technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-bg-deep px-7 py-3.5 text-sm font-medium hover:bg-white/90 rounded-full active:scale-[0.98] transition-all duration-200 focus-ring"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            Get in Touch
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:business@tekzuri.com"
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-3.5 text-sm font-medium border border-border-default hover:border-border-hover hover:bg-white/[0.04] transition-all duration-200 rounded-full focus-ring"
          >
            business@tekzuri.com
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-border-card">
          <p className="text-fg-secondary text-sm mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mulsons", "SKL", "Kova Collective", "Criss Cross"].map((name) => (
              <span
                key={name}
                className="inline-flex px-5 py-2 rounded-full border border-border-card bg-white/[0.02] text-fg-tertiary text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-full px-5 py-2.5 mb-8">
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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#e8e8ed] tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to build something elegant?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#94949e] max-w-2xl mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss how we can help bring your vision to life with craftsmanship,
          care, and cutting-edge technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-[#050508] px-7 py-3.5 text-sm font-medium hover:bg-white/90 rounded-full active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            Get in Touch
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:business@tekzuri.com"
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-3.5 text-sm font-medium border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.24)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            business@tekzuri.com
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-[#94949e] text-sm mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mulsons", "SKL", "Kova Collective", "Criss Cross"].map((name) => (
              <span
                key={name}
                className="inline-flex px-5 py-2 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] text-[#5c5c68] text-sm font-medium"
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

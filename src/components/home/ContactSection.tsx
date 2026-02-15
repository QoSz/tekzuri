export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-md px-4 py-2 mb-8">
          <span className="text-white/80 text-sm font-medium">Available for new projects</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#f0f0f2] tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to build something elegant?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#a0a0a8] max-w-2xl mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss how we can help bring your vision to life with craftsmanship,
          care, and cutting-edge technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-[#101013] px-7 py-3.5 text-sm font-medium hover:bg-white/90 rounded-md active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15)' }}
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
            className="group cursor-pointer inline-flex items-center justify-center gap-3 bg-transparent text-white px-7 py-3.5 text-sm font-medium border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.24)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
          >
            business@tekzuri.com
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-[#a0a0a8] text-sm mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-[#6b6b75] font-medium">Mulsons</span>
            <span className="text-[#6b6b75]">•</span>
            <span className="text-[#6b6b75] font-medium">SKL</span>
            <span className="text-[#6b6b75]">•</span>
            <span className="text-[#6b6b75] font-medium">Kova Collective</span>
            <span className="text-[#6b6b75]">•</span>
            <span className="text-[#6b6b75] font-medium">Criss Cross</span>
          </div>
        </div>
      </div>
    </section>
  );
}

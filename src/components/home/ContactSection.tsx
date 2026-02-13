export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Available for new projects</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          Ready to build something
          <span className="block text-accent">elegant?</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss how we can help bring your vision to life with craftsmanship,
          care, and cutting-edge technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-base font-medium hover:bg-accent-light transition-all duration-300 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Get in Touch
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
            href="mailto:business@tekzuri.com"
            className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 text-base font-medium border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 rounded-full"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            business@tekzuri.com
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-white font-medium">Mulsons</span>
            <span className="text-white/30">•</span>
            <span className="text-white font-medium">SKL</span>
            <span className="text-white/30">•</span>
            <span className="text-white font-medium">Kova Collective</span>
            <span className="text-white/30">•</span>
            <span className="text-white font-medium">Criss Cross</span>
          </div>
        </div>
      </div>
    </section>
  );
}

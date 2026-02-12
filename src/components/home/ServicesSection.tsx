import { services } from "@/lib/data/services";

const serviceIcons: Record<(typeof services)[number]["id"], React.ReactNode> = {
  "web-development": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "ai-automation": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 14h2M20 14h2M15 13v2M9 13v2" />
    </svg>
  ),
  "digital-marketing": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="18" cy="5" r="3" strokeWidth={1.5} />
      <circle cx="6" cy="12" r="3" strokeWidth={1.5} />
      <circle cx="18" cy="19" r="3" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  ),
  "it-consulting": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 20V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" strokeWidth={1.5} />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Services that drive results
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We combine technical expertise with creative thinking to deliver solutions
            that exceed expectations and stand the test of time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-gray-900 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-gray-900 group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                {serviceIcons[service.id]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted group-hover:text-gray-400 transition-colors duration-500 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex text-xs font-medium px-3 py-1.5 rounded-full bg-white text-gray-600 group-hover:bg-gray-800 group-hover:text-gray-300 transition-all duration-500"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-muted mb-6">Looking for something specific?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
          >
            Let&apos;s discuss your project
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

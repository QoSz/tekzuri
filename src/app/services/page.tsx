import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | TekZuri",
  description:
    "Web development, mobile solutions, and IT consulting. We combine technical expertise with creative thinking to deliver solutions that exceed expectations.",
};

const serviceIcons: Record<(typeof services)[number]["id"], React.ReactNode> = {
  "web-development": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "mobile-solutions": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  "it-consulting": (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 lg:px-8 py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Services that drive results
          </h1>
          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            We combine technical expertise with creative thinking to deliver solutions
            that exceed expectations and stand the test of time.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 lg:px-8 pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group relative bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-gray-900 transition-all duration-500 hover-lift"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white text-gray-900 group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                  {serviceIcons[service.id]}
                </div>
                <h2 className="text-xl font-semibold mb-4 text-foreground group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h2>
                <p className="text-muted group-hover:text-gray-400 transition-colors duration-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
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
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 lg:mt-24 text-center">
            <p className="text-muted mb-6">Looking for something specific?</p>
            <Link
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

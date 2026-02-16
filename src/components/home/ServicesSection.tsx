import dynamic from "next/dynamic";
import { services } from "@/lib/data/services";
import { ScrollReveal } from "./ScrollReveal";

const ServiceCard3D = dynamic(
  () => import("./ServiceCard3D").then((m) => ({ default: m.ServiceCard3D })),
  { ssr: true, loading: () => <div className="bg-[#111116] rounded-2xl p-8 lg:p-10 border border-[rgba(255,255,255,0.07)] min-h-[300px]" /> }
);

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12 lg:mb-16">
            <div className="lg:max-w-xl">
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-normal tracking-[-0.02em]" style={{ fontFamily: 'var(--font-heading)' }}>
                Services that drive results
              </h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-[#94949e] leading-relaxed text-sm">
                We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.12}>
              <a href={`/services/${service.id}`} className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-2xl">
                <ServiceCard3D>
                  {/* Service Icon */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <div className="w-12 h-12 mb-6 relative">
                      {service.id === 'web-development' && (
                        <div className="w-full h-full rounded-lg border border-white/[0.15] p-1.5 flex flex-col">
                          <div className="flex gap-1 mb-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                          </div>
                          <div className="flex-1 rounded-sm border border-white/[0.08]" />
                        </div>
                      )}
                      {service.id === 'ai-automation' && (
                        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                          <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.2)" />
                          <circle cx="36" cy="12" r="3" fill="rgba(255,255,255,0.2)" />
                          <circle cx="12" cy="36" r="3" fill="rgba(255,255,255,0.2)" />
                          <circle cx="36" cy="36" r="3" fill="rgba(255,255,255,0.2)" />
                          <circle cx="24" cy="24" r="4" fill="rgba(255,255,255,0.35)" />
                          <line x1="12" y1="12" x2="24" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                          <line x1="36" y1="12" x2="24" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                          <line x1="12" y1="36" x2="24" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                          <line x1="36" y1="36" x2="24" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        </svg>
                      )}
                      {service.id === 'digital-marketing' && (
                        <div className="w-full h-full flex items-end justify-center gap-1.5 pb-0.5">
                          <div className="w-2 rounded-sm bg-white/15" style={{ height: '25%' }} />
                          <div className="w-2 rounded-sm bg-white/20" style={{ height: '45%' }} />
                          <div className="w-2 rounded-sm bg-white/25" style={{ height: '65%' }} />
                          <div className="w-2 rounded-sm bg-white/35" style={{ height: '90%' }} />
                        </div>
                      )}
                      {service.id === 'it-consulting' && (
                        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                          <path d="M24 4L6 12V22C6 33.1 13.7 43.3 24 46C34.3 43.3 42 33.1 42 22V12L24 4Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                          <path d="M24 14L14 18V24C14 30.1 18.3 35.8 24 37.5C29.7 35.8 34 30.1 34 24V18L24 14Z" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-medium text-[#e8e8ed] mb-4 group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[#94949e] group-hover:text-gray-400 transition-colors duration-500 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div style={{ transform: "translateZ(15px)" }}>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex text-xs font-medium px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.06)] text-[#94949e] border border-[rgba(255,255,255,0.07)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5 text-[#e8e8ed]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </ServiceCard3D>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 lg:mt-24 text-center">
            <p className="text-[#94949e] mb-6">Looking for something specific?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-[#e8e8ed] transition-colors duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-sm"
            >
              Let&apos;s discuss your project
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

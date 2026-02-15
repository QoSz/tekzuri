import dynamic from "next/dynamic";
import { services } from "@/lib/data/services";
import { ScrollReveal } from "./ScrollReveal";

const ServiceCard3D = dynamic(
  () => import("./ServiceCard3D").then((m) => ({ default: m.ServiceCard3D })),
  { ssr: true, loading: () => <div className="bg-[#1c1c20] rounded-xl p-8 lg:p-10 border border-[rgba(255,255,255,0.06)] min-h-[300px]" /> }
);

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12 lg:mb-16">
            <div className="lg:max-w-xl">
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-medium tracking-[-0.01em]" style={{ fontFamily: 'var(--font-heading)' }}>
                Services that drive results
              </h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-[#a0a0a8] leading-relaxed text-sm">
                We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.12}>
              <a href={`/services/${service.id}`} className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-xl">
                <ServiceCard3D>
                  {/* Number indicator */}
                  <div style={{ transform: "translateZ(30px)" }}>
                    <span className="text-[3rem] font-light text-white/20 leading-none block mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-medium text-[#f0f0f2] mb-4 group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[#a0a0a8] group-hover:text-gray-400 transition-colors duration-500 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div style={{ transform: "translateZ(15px)" }}>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex text-xs font-medium px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.06)] text-[#a0a0a8] border border-[rgba(255,255,255,0.06)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5 text-[#f0f0f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <p className="text-[#a0a0a8] mb-6">Looking for something specific?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-[#f0f0f2] transition-colors duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm"
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

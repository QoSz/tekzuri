import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore TekZuri\'s comprehensive digital services: Web Development, AI Automation, Digital Marketing, and IT Consulting. Crafted with precision and elegance.',
};

const services = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies, crafted with precision.',
    href: '/services/web-development',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your business and unlock new efficiencies.',
    href: '/services/ai-automation',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
    href: '/services/digital-marketing',
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic guidance to help your business leverage technology and stay ahead of the curve.',
    href: '/services/it-consulting',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen pt-16 lg:pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="swiss-label mb-4">
            ものづくり - Monozukuri
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-fg-secondary max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive suite of digital solutions designed with craftsmanship and elegance.
            Each service is tailored to elevate your business and deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={service.id}
              className="group cursor-pointer relative bg-bg-elevated border border-border-card rounded-2xl p-8 lg:p-10 hover:bg-bg-elevated-2 hover:border-border-strong transition-all duration-300 focus-ring"
              style={{
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-card)'
              }}
            >
              {/* Number indicator */}
              <span className="text-[2rem] font-light text-white/20 mb-6 block" style={{ fontFamily: 'var(--font-heading)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <h3 className="relative text-2xl font-semibold mb-4 group-hover:text-foreground transition-colors duration-200">
                {service.name}
              </h3>
              <p className="relative text-fg-secondary group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="relative mt-6 inline-flex items-center gap-2 text-fg-secondary group-hover:text-foreground transition-all duration-200">
                <span className="text-sm font-medium">Explore service</span>
                <ArrowIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-12 rounded-2xl bg-bg-elevated border border-border-card"
            style={{
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold">Not sure which service you need?</h2>
            <p className="text-fg-secondary max-w-2xl">
              Let&apos;s discuss your project and find the perfect solution tailored to your business goals.
            </p>
            <a
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-ring"
              style={{
                boxShadow: 'var(--shadow-button)'
              }}
            >
              Start a conversation
              <ArrowIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

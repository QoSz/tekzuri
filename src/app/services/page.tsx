import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, Bot, TrendingUp, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - TekZuri',
  description: 'Explore TekZuri\'s comprehensive digital services: Web Development, AI Automation, Digital Marketing, and IT Consulting. Crafted with precision and elegance.',
};

const services = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies, crafted with precision.',
    href: '/services/web-development',
    icon: Code,
    gradient: 'from-accent via-accent-light to-accent-dark',
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your business and unlock new efficiencies.',
    href: '/services/ai-automation',
    icon: Bot,
    gradient: 'from-accent-light via-accent to-accent-dark',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
    href: '/services/digital-marketing',
    icon: TrendingUp,
    gradient: 'from-accent-dark via-accent to-accent-light',
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    description: 'Strategic guidance to help your business leverage technology and stay ahead of the curve.',
    href: '/services/it-consulting',
    icon: Briefcase,
    gradient: 'from-accent via-accent-dark to-accent-light',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen py-24 lg:py-32">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-dark/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
            <span className="w-8 h-px bg-accent" />
            ものづくり - Monozukuri
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
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
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-accent/50 transition-all duration-500 hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-6">
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                {service.name}
              </h3>
              <p className="relative text-muted group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="relative mt-6 inline-flex items-center gap-2 text-accent group-hover:text-white transition-all duration-500">
                <span className="text-sm font-medium">Explore service</span>
                <svg
                  className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/0 to-accent/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl lg:text-3xl font-semibold">Not sure which service you need?</h2>
            <p className="text-muted max-w-2xl">
              Let&apos;s discuss your project and find the perfect solution tailored to your business goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              Start a conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

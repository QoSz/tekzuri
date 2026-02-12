import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Lightbulb, Settings, TrendingUp, Check, Gift, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Consulting - TekZuri',
  description: 'Strategic guidance to help your business leverage technology effectively. Expert advice on infrastructure, security, digital transformation, and staying ahead of the curve.',
};

const features = [
  {
    icon: Briefcase,
    title: 'Strategic IT Planning',
    description: 'Developing tailored IT roadmaps aligned with your business objectives for sustainable growth and success.',
  },
  {
    icon: Lightbulb,
    title: 'Technology Advisory',
    description: 'Expert guidance on technology adoption, infrastructure optimization, and digital transformation initiatives.',
  },
  {
    icon: Settings,
    title: 'Process Improvement',
    description: 'Analyzing and optimizing your IT processes for increased efficiency, productivity, and operational excellence.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Scalability',
    description: 'Leveraging technology to scale your operations and gain a competitive edge in an evolving marketplace.',
  },
];

const packages = [
  {
    name: 'Discovery Session',
    icon: Gift,
    price: 'Free',
    currency: '',
    description: 'Get started with a comprehensive assessment',
    features: [
      '1-hour initial consultation',
      'Business needs assessment',
      'Current technology audit',
      'Preliminary recommendations',
      'Technology gap analysis',
      'Security assessment overview',
      'Process optimization opportunities',
      'No obligation follow-up',
    ],
    popular: true,
    ctaText: 'Book Free Session',
    benefits: [
      'Identify immediate technology improvements',
      'Understand your current IT infrastructure',
      'Get professional recommendations',
      'Plan your technology roadmap',
    ],
  },
  {
    name: 'Strategic Partnership',
    icon: UserCheck,
    price: '150',
    currency: 'USD/session',
    description: 'Ongoing guidance for technology success',
    features: [
      'Follow-up consultation sessions',
      'Detailed implementation planning',
      'Technology roadmap development',
      'Vendor selection guidance',
      'Process optimization recommendations',
      'Priority email/call support',
      'Custom solution architecture',
      'Quarterly technology reviews',
    ],
    popular: false,
    ctaText: 'Continue Partnership',
    benefits: [
      'Long-term technology strategy',
      'Ongoing support and guidance',
      'Cost-effective expert advice',
      'Accelerated implementation success',
    ],
  },
];

export default function ITConsultingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-6">
            <span className="w-8 h-px bg-accent" />
            IT Consulting
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-accent-light to-foreground bg-clip-text text-transparent">
            Strategic IT Guidance
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Navigate the complexities of technology with expert guidance. We provide actionable IT insights and
            strategies to optimize your operations, drive innovation, and accelerate business growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            Get Expert Advice
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">Our Consulting Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl hover:bg-white/10 hover:border-accent/50 transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-6">
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Packages Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">IT Consulting Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Start with a free consultation to understand your needs, then continue with ongoing strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border ${
                  pkg.popular ? 'border-accent ring-2 ring-accent/50' : 'border-white/10'
                } p-8 lg:p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Start Here
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent">
                    <pkg.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-muted">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    {pkg.currency && <span className="text-muted">{pkg.currency}</span>}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="text-lg font-semibold mb-4">What You Get:</h4>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-accent hover:bg-accent-light text-white hover:scale-105 hover:shadow-lg hover:shadow-accent/20'
                      : 'bg-white/10 hover:bg-white/20 text-foreground border border-white/10'
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 bg-gradient-to-br from-accent/10 to-accent-dark/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Why Choose Our IT Consulting?</h3>
              <p className="text-muted max-w-3xl mx-auto">
                Our consulting approach focuses on practical, actionable solutions that drive real business results.
                We understand the unique challenges facing modern businesses and provide technology guidance that works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Market Understanding</h4>
                <p className="text-sm text-muted">Deep understanding of diverse business environments and technology landscapes</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <Lightbulb className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Practical Solutions</h4>
                <p className="text-sm text-muted">Technology recommendations that are realistic, cost-effective, and implementable</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Growth Focused</h4>
                <p className="text-sm text-muted">Strategic guidance that positions your business for sustainable growth and success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent-dark/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Ready to Unlock Your Tech Potential?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Partner with us to develop a winning IT strategy that aligns with your vision and
              drives tangible business results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              Book a Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

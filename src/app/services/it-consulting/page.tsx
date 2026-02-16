import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Consulting - TekZuri',
  description: 'Strategic guidance to help your business leverage technology effectively. Expert advice on infrastructure, security, digital transformation, and staying ahead of the curve.',
};

const features = [
  {
    number: '01',
    title: 'Strategic IT Planning',
    description: 'Developing tailored IT roadmaps aligned with your business objectives for sustainable growth and success.',
  },
  {
    number: '02',
    title: 'Technology Advisory',
    description: 'Expert guidance on technology adoption, infrastructure optimization, and digital transformation initiatives.',
  },
  {
    number: '03',
    title: 'Process Improvement',
    description: 'Analyzing and optimizing your IT processes for increased efficiency, productivity, and operational excellence.',
  },
  {
    number: '04',
    title: 'Growth & Scalability',
    description: 'Leveraging technology to scale your operations and gain a competitive edge in an evolving marketplace.',
  },
];

const packages = [
  {
    name: 'Discovery Session',
    number: '01',
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
    number: '02',
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
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-[#e8e8ed]" style={{ fontFamily: 'var(--font-heading)' }}>
            Strategic IT Guidance
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Navigate the complexities of technology with expert guidance. We provide actionable IT insights and
            strategies to optimize your operations, drive innovation, and accelerate business growth.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
            style={{ boxShadow: 'var(--shadow-button)' }}
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
          <h2 className="text-3xl lg:text-4xl font-medium text-center mb-16 text-[#e8e8ed]" style={{ fontFamily: 'var(--font-heading)' }}>Our Consulting Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d bg-[#111116] border border-[rgba(255,255,255,0.06)] p-6 lg:p-8 rounded-2xl hover:border-[rgba(255,255,255,0.16)] group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0f] text-[#8a8a95] transition-all duration-500 mb-6">
                  <span className="text-sm font-mono font-medium">{feature.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#e8e8ed] transition-colors duration-500">
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
            <h2 className="text-3xl lg:text-4xl font-medium mb-4 text-[#e8e8ed]" style={{ fontFamily: 'var(--font-heading)' }}>IT Consulting Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Start with a free consultation to understand your needs, then continue with ongoing strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-[#111116] border ${
                  pkg.popular ? 'border-[rgba(255,255,255,0.24)]' : 'border-[rgba(255,255,255,0.06)]'
                } p-8 lg:p-10 rounded-2xl transition-all duration-500 flex flex-col`}
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#050508] px-4 py-1 rounded-full text-xs font-medium">
                      Start Here
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0a0a0f] text-[#8a8a95]">
                    <span className="text-lg font-mono font-medium">{pkg.number}</span>
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
                        <span className="text-[#5c5c68] text-sm">—</span>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-[#5c5c68] text-sm">—</span>
                        <span className="text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] ${
                    pkg.popular
                      ? 'bg-white text-[#050508] active:scale-[0.98]'
                      : 'bg-[#0a0a0f] hover:bg-[rgba(255,255,255,0.04)] text-foreground border border-[rgba(255,255,255,0.06)]'
                  }`}
                  style={pkg.popular ? { boxShadow: 'var(--shadow-button)' } : undefined}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 bg-[#111116] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 lg:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-[#e8e8ed]" style={{ fontFamily: 'var(--font-heading)' }}>Why Choose Our IT Consulting?</h3>
              <p className="text-muted max-w-3xl mx-auto">
                Our consulting approach focuses on practical, actionable solutions that drive real business results.
                We understand the unique challenges facing modern businesses and provide technology guidance that works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0f] text-[#8a8a95] mb-4">
                  <span className="text-sm font-mono font-medium">01</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Market Understanding</h4>
                <p className="text-sm text-muted">Deep understanding of diverse business environments and technology landscapes</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0f] text-[#8a8a95] mb-4">
                  <span className="text-sm font-mono font-medium">02</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Practical Solutions</h4>
                <p className="text-sm text-muted">Technology recommendations that are realistic, cost-effective, and implementable</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0a0a0f] text-[#8a8a95] mb-4">
                  <span className="text-sm font-mono font-medium">03</span>
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
          <div className="bg-[#111116] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 lg:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2 className="text-3xl lg:text-4xl font-medium mb-4 text-[#e8e8ed]" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Unlock Your Tech Potential?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Partner with us to develop a winning IT strategy that aligns with your vision and
              drives tangible business results.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
              style={{ boxShadow: 'var(--shadow-button)' }}
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

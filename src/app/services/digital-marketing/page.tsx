import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing - TekZuri',
  description: 'Data-driven marketing strategies that amplify your brand and drive measurable results. From SEO to social media, we help you connect with your audience effectively.',
};

const features = [
  {
    title: 'Platform Management',
    description: 'Expert handling of your digital marketing campaigns across platforms, ensuring consistent brand voice and engagement.',
  },
  {
    title: 'Content Creation',
    description: 'Compelling posts, stunning visuals, and engaging content tailored to resonate with your target audience.',
  },
  {
    title: 'Strategy & Analytics',
    description: 'Data-driven strategies and insightful analytics to optimize performance and maximize your marketing ROI.',
  },
  {
    title: 'Targeted Campaigns',
    description: 'Effective campaigns designed to reach the right people, drive traffic, and achieve your marketing goals.',
  },
];

const packages = [
  {
    name: 'Starter',
    price: '1,000',
    currency: 'USD/mo',
    description: 'Perfect for small businesses getting started',
    features: [
      '12 high-quality posts per month',
      'Platform content optimization',
      'Basic graphic design',
      'Content calendar planning',
      'Monthly performance report',
      'Email support',
    ],
    popular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Professional',
    price: '1,800',
    currency: 'USD/mo',
    description: 'Ideal for growing businesses',
    features: [
      '20 engaging posts per month',
      'Advanced design + video content',
      'Stories & community management',
      'Audience engagement & growth',
      'Bi-weekly strategy calls',
      'Detailed analytics reports',
      'Priority support',
    ],
    popular: true,
    ctaText: 'Most Popular',
  },
  {
    name: 'Growth',
    price: '2,800',
    currency: 'USD/mo',
    description: 'For businesses ready to scale',
    features: [
      '28+ premium posts per month',
      'Stories, articles & video content',
      'Paid ad campaign management',
      'Advanced audience targeting',
      'Weekly strategy sessions',
      'Competitor analysis & insights',
      'Custom campaign strategies',
      'Dedicated account support',
    ],
    popular: false,
    ctaText: 'Scale Up',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: 'Pricing',
    description: 'Complete digital marketing solutions',
    features: [
      'Unlimited content across platforms',
      'Advanced video production',
      'Full advertising management',
      'Dedicated account manager',
      'Real-time monitoring',
      '24/7 priority support',
      'Custom automation & workflows',
      'Executive reporting',
    ],
    popular: false,
    ctaText: 'Contact Us',
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#e8e8ed]">
            Amplify Your Brand
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Engage your audience, build community, and drive growth with our expert digital marketing services.
            We handle everything, so you can focus on your business.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            Boost Your Presence
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16 text-[#e8e8ed]">Our Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d bg-[#111116] border border-[rgba(255,255,255,0.06)] p-6 lg:p-8 rounded-2xl hover:border-[rgba(255,255,255,0.16)] group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#111116] border border-[rgba(255,255,255,0.06)] text-[#8a8a95] mb-6">
                  <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#e8e8ed] transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-[#e8e8ed]">Marketing Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Choose the perfect package to amplify your brand presence and engage your audience across digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card-3d relative bg-[#111116] border ${
                  pkg.popular ? 'border-[rgba(255,255,255,0.24)]' : 'border-[rgba(255,255,255,0.06)]'
                } p-6 lg:p-8 rounded-2xl hover:border-[rgba(255,255,255,0.16)] flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#050508] px-4 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#e8e8ed]">{pkg.name}</h3>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#e8e8ed]">{pkg.price}</span>
                    {pkg.currency !== 'Pricing' && <span className="text-muted text-sm">{pkg.currency}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-[#5c5c68] text-sm">—</span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] ${
                    pkg.popular
                      ? 'bg-white text-[#050508] active:scale-[0.98]'
                      : 'bg-[#111116] hover:bg-[#18181f] text-foreground border border-[rgba(255,255,255,0.06)]'
                  }`}
                  style={pkg.popular ? { boxShadow: 'var(--shadow-button)' } : undefined}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#111116] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 lg:p-12"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-[#e8e8ed]">
              Ready to Dominate Digital Marketing?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s craft a winning digital marketing strategy that elevates your brand and
              connects with your audience effectively.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
              style={{ boxShadow: 'var(--shadow-button)' }}
            >
              Get Free Consultation
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

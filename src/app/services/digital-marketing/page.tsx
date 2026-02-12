import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Users, Edit3, Megaphone, Check, Hash, Brain, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing - TekZuri',
  description: 'Data-driven marketing strategies that amplify your brand and drive measurable results. From SEO to social media, we help you connect with your audience effectively.',
};

const features = [
  {
    icon: Users,
    title: 'Platform Management',
    description: 'Expert handling of your digital marketing campaigns across platforms, ensuring consistent brand voice and engagement.',
  },
  {
    icon: Edit3,
    title: 'Content Creation',
    description: 'Compelling posts, stunning visuals, and engaging content tailored to resonate with your target audience.',
  },
  {
    icon: TrendingUp,
    title: 'Strategy & Analytics',
    description: 'Data-driven strategies and insightful analytics to optimize performance and maximize your marketing ROI.',
  },
  {
    icon: Megaphone,
    title: 'Targeted Campaigns',
    description: 'Effective campaigns designed to reach the right people, drive traffic, and achieve your marketing goals.',
  },
];

const packages = [
  {
    name: 'Starter',
    icon: Hash,
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
    icon: TrendingUp,
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
    icon: Brain,
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
    icon: Building,
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
            Digital Marketing
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-accent-light to-foreground bg-clip-text text-transparent">
            Amplify Your Brand
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Engage your audience, build community, and drive growth with our expert digital marketing services.
            We handle everything, so you can focus on your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            Boost Your Presence
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">Our Marketing Services</h2>
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

      {/* Pricing Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Marketing Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Choose the perfect package to amplify your brand presence and engage your audience across digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border ${
                  pkg.popular ? 'border-accent ring-2 ring-accent/50' : 'border-white/10'
                } p-6 lg:p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                    <pkg.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-muted">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    {pkg.currency !== 'Pricing' && <span className="text-muted text-sm">{pkg.currency}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent-dark/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Ready to Dominate Digital Marketing?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s craft a winning digital marketing strategy that elevates your brand and
              connects with your audience effectively.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
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

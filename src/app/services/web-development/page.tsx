import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development - TekZuri',
  description: 'Custom websites and web applications built with modern technologies. From elegant portfolios to powerful e-commerce platforms, crafted with precision and care.',
};

const features = [
  {
    title: 'Custom Design',
    description: 'Unique, visually stunning designs that reflect your brand identity and engage your audience with purpose.',
  },
  {
    title: 'Responsive Development',
    description: 'Flawless performance across all devices, from desktop to mobile, ensuring seamless user experiences.',
  },
  {
    title: 'Modern Technology',
    description: 'Built with cutting-edge frameworks like React and Next.js for speed, scalability, and maintainability.',
  },
  {
    title: 'Performance Optimized',
    description: 'Lightning-fast load times and optimized performance metrics that keep users engaged and improve SEO.',
  },
];

const seoPackages = [
  {
    name: 'SEO Starter',
    price: '500',
    currency: 'USD/mo',
    description: 'Essential optimization for visibility',
    features: [
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Meta tags & descriptions',
      'Google Search Console setup',
      'XML sitemap creation',
      'Basic technical SEO audit',
      'Monthly performance report',
    ],
    popular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'SEO Growth',
    price: '1,000',
    currency: 'USD/mo',
    description: 'Comprehensive strategy for results',
    features: [
      'Everything in Starter',
      'Content strategy & optimization',
      'Local SEO optimization',
      'Backlink analysis',
      'Competitor analysis',
      'Google My Business optimization',
      'Bi-weekly content updates',
      'Detailed analytics & insights',
    ],
    popular: true,
    ctaText: 'Most Popular',
  },
  {
    name: 'SEO Enterprise',
    price: '2,000',
    currency: 'USD/mo',
    description: 'Advanced SEO for market leaders',
    features: [
      'Everything in Growth',
      'Advanced link building strategy',
      'Multi-location SEO',
      'E-commerce SEO',
      'International SEO',
      'Conversion rate optimization',
      'Weekly strategy calls',
      'Dedicated SEO specialist',
      'Priority support',
    ],
    popular: false,
    ctaText: 'Scale Your Growth',
  },
];

const packages = [
  {
    name: 'Essential',
    price: '1,500',
    currency: 'USD',
    description: 'Perfect for launching your digital presence',
    features: [
      'Responsive website (5-7 pages)',
      'Modern, mobile-first design',
      'SEO optimization',
      'Contact form integration',
      'Social media integration',
      'Analytics setup',
      '30 days post-launch support',
      'Performance optimization',
    ],
    popular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Professional',
    price: '2,500',
    currency: 'USD',
    description: 'Ideal for growing businesses',
    features: [
      'Dynamic website (8-12 pages)',
      'Content Management System',
      'Blog with rich features',
      'Advanced SEO optimization',
      'Newsletter integration',
      'Custom animations',
      '90 days post-launch support',
      'Weekly content updates',
      'Priority email support',
    ],
    popular: true,
    ctaText: 'Most Popular',
  },
  {
    name: 'E-Commerce',
    price: '3,500',
    currency: 'USD',
    description: 'Start selling online today',
    features: [
      'Full-featured online store',
      'Payment gateway integration',
      'Inventory management',
      'Customer account portal',
      'Order tracking & notifications',
      'Product reviews & ratings',
      'SEO for products',
      '6 months support & training',
      'Sales analytics dashboard',
    ],
    popular: false,
    ctaText: 'Start Selling',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: 'Pricing',
    description: 'Tailored solutions for complex needs',
    features: [
      'Fully custom development',
      'Advanced integrations',
      'Custom API development',
      'Multi-language support',
      'Advanced security features',
      'Dedicated project manager',
      'Ongoing maintenance',
      '24/7 priority support',
      'Scalable architecture',
    ],
    popular: false,
    ctaText: 'Contact Us',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#e8e8ed]">
            Websites Built to Impress
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            We don&apos;t just build websites; we create digital experiences crafted with precision and elegance.
            From stunning visuals to seamless performance, every detail matters.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] rounded-full font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
            style={{
              boxShadow: 'var(--shadow-button)'
            }}
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d bg-[#111116] border border-[rgba(255,255,255,0.06)] p-6 lg:p-8 rounded-2xl hover:bg-[#18181f] hover:border-[rgba(255,255,255,0.16)] group"
              >
                <span className="text-[2rem] font-light text-white/20 mb-6 block" style={{ fontFamily: 'var(--font-heading)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#e8e8ed] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-muted group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">SEO Services & Pricing</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Drive organic traffic and climb search rankings with our data-driven SEO strategies.
              Get found by customers actively searching for your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {seoPackages.map((pkg, index) => (
              <div
                key={index}
                className={`card-3d relative bg-[#111116] border ${
                  pkg.popular ? 'border-[rgba(255,255,255,0.24)]' : 'border-[rgba(255,255,255,0.06)]'
                } p-6 lg:p-8 rounded-2xl hover:bg-[#18181f] hover:border-[rgba(255,255,255,0.16)] flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#050508] px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="text-[2rem] font-light text-white/20 mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  </div>
                  <span className="text-sm text-muted">Monthly retainer</span>
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
                      ? 'bg-white text-[#050508] hover:bg-white/90 active:scale-[0.98]'
                      : 'bg-white/10 hover:bg-white/20 text-foreground border border-white/10'
                  }`}
                  style={pkg.popular ? {
                    boxShadow: 'var(--shadow-button)'
                  } : {}}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted">
              All SEO packages include monthly reporting and analytics. No long-term contracts required.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Development Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Choose the perfect package for your business needs. Each solution is designed to deliver
              exceptional value and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card-3d relative bg-[#111116] border ${
                  pkg.popular ? 'border-[rgba(255,255,255,0.24)]' : 'border-[rgba(255,255,255,0.06)]'
                } p-6 lg:p-8 rounded-2xl hover:bg-[#18181f] hover:border-[rgba(255,255,255,0.16)] flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#050508] px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-[2rem] font-light text-white/20 block mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted">{pkg.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted">{pkg.currency}</span>
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
                      ? 'bg-white text-[#050508] hover:bg-white/90 active:scale-[0.98]'
                      : 'bg-white/10 hover:bg-white/20 text-foreground border border-white/10'
                  }`}
                  style={pkg.popular ? {
                    boxShadow: 'var(--shadow-button)'
                  } : {}}
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
          <div className="bg-[#111116] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 lg:p-12"
            style={{
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build a website that not only looks great but also achieves
              your business goals with precision and care.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050508] rounded-full font-medium hover:bg-white/90 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
              style={{
                boxShadow: 'var(--shadow-button)'
              }}
            >
              Request a Consultation
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

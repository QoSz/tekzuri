import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automation - TekZuri',
  description: 'Intelligent automation solutions that streamline your business processes and unlock new efficiencies. Leverage AI to transform workflows and boost productivity.',
};

const features = [
  {
    title: 'Generative AI',
    description: 'Harness advanced AI models to create content, analyze data, and generate insights that drive your business forward.',
  },
  {
    title: 'Intelligent Workflows',
    description: 'Automate complex business processes with AI-powered workflows that adapt, learn, and optimize over time.',
  },
  {
    title: 'AI Agents',
    description: 'Deploy specialized AI agents that handle customer service, data processing, and decision-making with intelligence.',
  },
  {
    title: 'Process Optimization',
    description: 'Identify bottlenecks and implement AI solutions that dramatically improve speed, accuracy, and efficiency.',
  },
];

const packages = [
  {
    name: 'AI Starter',
    price: '500',
    currency: 'USD/mo',
    description: 'Perfect for businesses starting their AI journey',
    features: [
      'Chatbot implementation (1 platform)',
      'Basic workflow automation (3 processes)',
      'Email automation setup',
      'Simple data analysis tools',
      'Monthly optimization review',
      'Usage analytics dashboard',
      'Basic training & documentation',
      'Email support',
    ],
    popular: false,
    ctaText: 'Start with AI',
  },
  {
    name: 'AI Professional',
    price: '1,200',
    currency: 'USD/mo',
    description: 'Comprehensive AI solutions for growth',
    features: [
      'Multi-platform chatbots (3+ platforms)',
      'Advanced workflow automation (10 processes)',
      'AI content generation tools',
      'System integrations',
      'Custom AI agent development',
      'Bi-weekly optimization calls',
      'Advanced analytics & reporting',
      'Priority support',
    ],
    popular: true,
    ctaText: 'Most Popular',
  },
  {
    name: 'AI Enterprise',
    price: '2,500',
    currency: 'USD/mo',
    description: 'Enterprise-grade AI automation',
    features: [
      'Custom AI solutions development',
      'Advanced analytics & insights',
      'API integrations & workflows',
      'Dedicated AI specialist',
      'Real-time monitoring',
      'Security & compliance',
      'Monthly strategy sessions',
      '24/7 priority support',
    ],
    popular: false,
    ctaText: 'Scale with AI',
  },
  {
    name: 'Custom AI',
    price: 'Custom',
    currency: 'Pricing',
    description: 'Fully custom AI applications',
    features: [
      'Fully custom AI applications',
      'Machine learning models',
      'Natural language processing',
      'Computer vision solutions',
      'Enterprise security',
      'Ongoing maintenance',
      'Comprehensive training',
      'Dedicated project team',
    ],
    popular: false,
    ctaText: 'Contact Us',
  },
];

export default function AIAutomationPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#f0f0f2]">
            AI That Actually Works
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your business with intelligent automation solutions. From generative AI that creates content
            to smart workflows that handle complex tasks, we build AI systems that make work easier and more efficient.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#101013] font-medium rounded-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}
          >
            Start Automating
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#161619]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16 text-[#f0f0f2]">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] p-6 lg:p-8 rounded-xl hover:border-[rgba(255,255,255,0.16)] group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] text-[#8a8a95] mb-6">
                  <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#f0f0f2] transition-colors duration-500">
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
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-[#f0f0f2]">AI Automation Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Choose the AI solution that fits your business needs and start automating your workflows today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card-3d relative bg-[#1c1c20] border ${
                  pkg.popular ? 'border-[rgba(255,255,255,0.24)]' : 'border-[rgba(255,255,255,0.06)]'
                } p-6 lg:p-8 rounded-xl hover:border-[rgba(255,255,255,0.16)] flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-[#101013] px-4 py-1 rounded text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#f0f0f2]">{pkg.name}</h3>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#f0f0f2]">{pkg.price}</span>
                    {pkg.currency !== 'Pricing' && <span className="text-muted text-sm">{pkg.currency}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-[#6b6b75] text-sm">—</span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] ${
                    pkg.popular
                      ? 'bg-white text-[#101013] active:scale-[0.98]'
                      : 'bg-[#1c1c20] hover:bg-[#202024] text-foreground border border-[rgba(255,255,255,0.06)]'
                  }`}
                  style={pkg.popular ? { boxShadow: '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' } : undefined}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>

          {/* Transparency Note */}
          <div className="mt-16 bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 lg:p-12"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)' }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#f0f0f2]">Transparent Usage Billing</h3>
              <p className="text-muted max-w-3xl mx-auto">
                Our AI services use usage-based billing to ensure you only pay for what you use. All packages include
                generous usage allowances, and any overage is transparently billed in the next cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] text-[#8a8a95] mx-auto mb-4">
                  <span className="text-lg font-bold">01</span>
                </div>
                <h4 className="font-semibold mb-2 text-[#f0f0f2]">Real-time Monitoring</h4>
                <p className="text-sm text-muted">Track your AI usage with detailed analytics</p>
              </div>
              <div className="text-center bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] text-[#8a8a95] mx-auto mb-4">
                  <span className="text-lg font-bold">02</span>
                </div>
                <h4 className="font-semibold mb-2 text-[#f0f0f2]">Flexible Scaling</h4>
                <p className="text-sm text-muted">Automatically scales with your needs</p>
              </div>
              <div className="text-center bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] text-[#8a8a95] mx-auto mb-4">
                  <span className="text-lg font-bold">03</span>
                </div>
                <h4 className="font-semibold mb-2 text-[#f0f0f2]">No Hidden Costs</h4>
                <p className="text-sm text-muted">Clear, transparent pricing always</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#161619]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-8 lg:p-12"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)' }}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-[#f0f0f2]">
              Ready to Embrace AI?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s explore how AI automation can solve your specific challenges and unlock new
              opportunities for growth and efficiency.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-[#101013] font-medium rounded-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              Discuss Your AI Strategy
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

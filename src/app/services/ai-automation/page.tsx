import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Brain, Workflow, Zap, Check, MessageSquare, Settings2, Building, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation - TekZuri',
  description: 'Intelligent automation solutions that streamline your business processes and unlock new efficiencies. Leverage AI to transform workflows and boost productivity.',
};

const features = [
  {
    icon: Brain,
    title: 'Generative AI',
    description: 'Harness advanced AI models to create content, analyze data, and generate insights that drive your business forward.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Automate complex business processes with AI-powered workflows that adapt, learn, and optimize over time.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Deploy specialized AI agents that handle customer service, data processing, and decision-making with intelligence.',
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Identify bottlenecks and implement AI solutions that dramatically improve speed, accuracy, and efficiency.',
  },
];

const packages = [
  {
    name: 'AI Starter',
    icon: MessageSquare,
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
    icon: Settings2,
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
    icon: Building,
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
    icon: Sparkles,
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
            AI Automation
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-accent-light to-foreground bg-clip-text text-transparent">
            AI That Actually Works
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your business with intelligent automation solutions. From generative AI that creates content
            to smart workflows that handle complex tasks, we build AI systems that make work easier and more efficient.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            Start Automating
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16">What We Build</h2>
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
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">AI Automation Packages</h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Choose the AI solution that fits your business needs and start automating your workflows today.
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

          {/* Transparency Note */}
          <div className="mt-16 bg-gradient-to-br from-accent/10 to-accent-dark/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-4">
                <Brain className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Transparent Usage Billing</h3>
              <p className="text-muted max-w-3xl mx-auto">
                Our AI services use usage-based billing to ensure you only pay for what you use. All packages include
                generous usage allowances, and any overage is transparently billed in the next cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6">
                <Zap className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-muted">Track your AI usage with detailed analytics</p>
              </div>
              <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6">
                <Settings2 className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="font-semibold mb-2">Flexible Scaling</h4>
                <p className="text-sm text-muted">Automatically scales with your needs</p>
              </div>
              <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6">
                <Check className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={2} />
                <h4 className="font-semibold mb-2">No Hidden Costs</h4>
                <p className="text-sm text-muted">Clear, transparent pricing always</p>
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
              Ready to Embrace AI?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s explore how AI automation can solve your specific challenges and unlock new
              opportunities for growth and efficiency.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
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

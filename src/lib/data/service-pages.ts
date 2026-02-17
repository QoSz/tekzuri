export interface ServiceFeature {
  title: string;
  description: string;
  number?: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  benefits?: string[];
}

export interface PricingSection {
  heading: string;
  subtext: string;
  packages: PricingPackage[];
  footnote?: string;
  gridCols?: 2 | 3 | 4;
}

export interface TransparencyItem {
  number: string;
  title: string;
  description: string;
}

export interface ValuePropItem {
  number: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  metadata: { title: string; description: string };
  hero: {
    heading: string;
    subtext: string;
    ctaText: string;
  };
  features: {
    heading: string;
    items: ServiceFeature[];
    backgroundVariant?: 'deep' | 'base';
    numberStyle?: 'decorative' | 'badge';
  };
  pricingSections: PricingSection[];
  transparency?: {
    heading: string;
    subtext: string;
    items: TransparencyItem[];
  };
  valueProp?: {
    heading: string;
    subtext: string;
    items: ValuePropItem[];
  };
  cta: {
    heading: string;
    subtext: string;
    ctaText: string;
    backgroundVariant?: 'deep' | 'base';
  };
}

export const webDevelopmentPage: ServicePageData = {
  slug: 'web-development',
  metadata: {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. From elegant portfolios to powerful e-commerce platforms, crafted with precision and care.',
  },
  hero: {
    heading: 'Websites Built to Impress',
    subtext: "We don't just build websites; we create digital experiences crafted with precision and elegance. From stunning visuals to seamless performance, every detail matters.",
    ctaText: 'Start Your Project',
  },
  features: {
    heading: 'What We Offer',
    items: [
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
    ],
    backgroundVariant: 'deep',
    numberStyle: 'decorative',
  },
  pricingSections: [
    {
      heading: 'SEO Services & Pricing',
      subtext: 'Drive organic traffic and climb search rankings with our data-driven SEO strategies. Get found by customers actively searching for your services.',
      gridCols: 3,
      footnote: 'All SEO packages include monthly reporting and analytics. No long-term contracts required.',
      packages: [
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
      ],
    },
    {
      heading: 'Development Packages',
      subtext: 'Choose the perfect package for your business needs. Each solution is designed to deliver exceptional value and drive results.',
      gridCols: 4,
      packages: [
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
      ],
    },
  ],
  cta: {
    heading: 'Ready to Elevate Your Digital Presence?',
    subtext: "Let's discuss how we can build a website that not only looks great but also achieves your business goals with precision and care.",
    ctaText: 'Request a Consultation',
  },
};

export const aiAutomationPage: ServicePageData = {
  slug: 'ai-automation',
  metadata: {
    title: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your business processes and unlock new efficiencies. Leverage AI to transform workflows and boost productivity.',
  },
  hero: {
    heading: 'AI That Actually Works',
    subtext: 'Transform your business with intelligent automation solutions. From generative AI that creates content to smart workflows that handle complex tasks, we build AI systems that make work easier and more efficient.',
    ctaText: 'Start Automating',
  },
  features: {
    heading: 'What We Build',
    items: [
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
    ],
    backgroundVariant: 'base',
    numberStyle: 'badge',
  },
  pricingSections: [
    {
      heading: 'AI Automation Packages',
      subtext: 'Choose the AI solution that fits your business needs and start automating your workflows today.',
      gridCols: 4,
      packages: [
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
      ],
    },
  ],
  transparency: {
    heading: 'Transparent Usage Billing',
    subtext: 'Our AI services use usage-based billing to ensure you only pay for what you use. All packages include generous usage allowances, and any overage is transparently billed in the next cycle.',
    items: [
      { number: '01', title: 'Real-time Monitoring', description: 'Track your AI usage with detailed analytics' },
      { number: '02', title: 'Flexible Scaling', description: 'Automatically scales with your needs' },
      { number: '03', title: 'No Hidden Costs', description: 'Clear, transparent pricing always' },
    ],
  },
  cta: {
    heading: 'Ready to Embrace AI?',
    subtext: "Let's explore how AI automation can solve your specific challenges and unlock new opportunities for growth and efficiency.",
    ctaText: 'Discuss Your AI Strategy',
    backgroundVariant: 'base',
  },
};

export const digitalMarketingPage: ServicePageData = {
  slug: 'digital-marketing',
  metadata: {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand and drive measurable results. From SEO to social media, we help you connect with your audience effectively.',
  },
  hero: {
    heading: 'Amplify Your Brand',
    subtext: 'Engage your audience, build community, and drive growth with our expert digital marketing services. We handle everything, so you can focus on your business.',
    ctaText: 'Boost Your Presence',
  },
  features: {
    heading: 'Our Marketing Services',
    items: [
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
    ],
    backgroundVariant: 'base',
    numberStyle: 'badge',
  },
  pricingSections: [
    {
      heading: 'Marketing Packages',
      subtext: 'Choose the perfect package to amplify your brand presence and engage your audience across digital platforms.',
      gridCols: 4,
      packages: [
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
      ],
    },
  ],
  cta: {
    heading: 'Ready to Dominate Digital Marketing?',
    subtext: "Let's craft a winning digital marketing strategy that elevates your brand and connects with your audience effectively.",
    ctaText: 'Get Free Consultation',
    backgroundVariant: 'base',
  },
};

export const itConsultingPage: ServicePageData = {
  slug: 'it-consulting',
  metadata: {
    title: 'IT Consulting',
    description: 'Strategic guidance to help your business leverage technology effectively. Expert advice on infrastructure, security, digital transformation, and staying ahead of the curve.',
  },
  hero: {
    heading: 'Strategic IT Guidance',
    subtext: 'Navigate the complexities of technology with expert guidance. We provide actionable IT insights and strategies to optimize your operations, drive innovation, and accelerate business growth.',
    ctaText: 'Get Expert Advice',
  },
  features: {
    heading: 'Our Consulting Expertise',
    items: [
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
    ],
    backgroundVariant: 'deep',
    numberStyle: 'badge',
  },
  pricingSections: [
    {
      heading: 'IT Consulting Packages',
      subtext: 'Start with a free consultation to understand your needs, then continue with ongoing strategic guidance.',
      gridCols: 2,
      packages: [
        {
          name: 'Discovery Session',
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
      ],
    },
  ],
  valueProp: {
    heading: 'Why Choose Our IT Consulting?',
    subtext: 'Our consulting approach focuses on practical, actionable solutions that drive real business results. We understand the unique challenges facing modern businesses and provide technology guidance that works.',
    items: [
      { number: '01', title: 'Market Understanding', description: 'Deep understanding of diverse business environments and technology landscapes' },
      { number: '02', title: 'Practical Solutions', description: 'Technology recommendations that are realistic, cost-effective, and implementable' },
      { number: '03', title: 'Growth Focused', description: 'Strategic guidance that positions your business for sustainable growth and success' },
    ],
  },
  cta: {
    heading: 'Ready to Unlock Your Tech Potential?',
    subtext: "Partner with us to develop a winning IT strategy that aligns with your vision and drives tangible business results.",
    ctaText: 'Book a Consultation',
  },
};

import type { ServiceFeature } from "@/lib/data/service-pages";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface FeatureGridProps {
  heading: string;
  items: ServiceFeature[];
  backgroundVariant?: 'deep' | 'base';
  numberStyle?: 'decorative' | 'badge';
}

export function FeatureGrid({ heading, items, backgroundVariant = 'deep', numberStyle = 'decorative' }: FeatureGridProps) {
  return (
    <section className={`relative py-16 lg:py-24 px-6 lg:px-8 ${backgroundVariant === 'base' ? 'bg-bg-base' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16 text-foreground">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
            <div
              className="card-3d bg-bg-elevated border border-border-card p-6 lg:p-8 rounded-2xl hover:border-border-strong group"
            >
              {numberStyle === 'decorative' ? (
                <span className="text-[2rem] font-light text-white/20 mb-6 block" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.number ?? String(index + 1).padStart(2, '0')}
                </span>
              ) : (
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-elevated border border-border-card text-fg-feature-number mb-6">
                  <span className="text-xl font-bold">{feature.number ?? String(index + 1).padStart(2, '0')}</span>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-foreground transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-fg-secondary group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

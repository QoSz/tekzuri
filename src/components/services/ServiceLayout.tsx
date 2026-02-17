import type { ServicePageData } from "@/lib/data/service-pages";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { PricingGrid } from "./PricingGrid";
import { ServiceCTA } from "./ServiceCTA";
import { TransparencySection } from "./TransparencySection";
import { ValuePropSection } from "./ValuePropSection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface ServiceLayoutProps {
  data: ServicePageData;
}

export function ServiceLayout({ data }: ServiceLayoutProps) {
  const isConsulting = data.slug === 'it-consulting';
  const isWebDev = data.slug === 'web-development';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.hero.heading,
    description: data.metadata.description,
    provider: {
      "@type": "Organization",
      name: "TekZuri",
      url: "https://tekzuri.com",
    },
    url: `https://tekzuri.com/services/${data.slug}`,
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        heading={data.hero.heading}
        subtext={data.hero.subtext}
        ctaText={data.hero.ctaText}
      />

      <FeatureGrid
        heading={data.features.heading}
        items={data.features.items}
        backgroundVariant={data.features.backgroundVariant}
        numberStyle={data.features.numberStyle}
      />

      {data.pricingSections.map((section, index) => (
        <PricingGrid
          key={index}
          section={section}
          isConsulting={isConsulting}
          showDecorativeNumbers={isWebDev}
          showCenteredLayout={isWebDev && index === 0}
          backgroundVariant={isWebDev && index === 0 ? 'base' : 'deep'}
        />
      ))}

      {data.transparency && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <TransparencySection
              heading={data.transparency.heading}
              subtext={data.transparency.subtext}
              items={data.transparency.items}
            />
          </ScrollReveal>
        </div>
      )}

      {data.valueProp && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <ValuePropSection
              heading={data.valueProp.heading}
              subtext={data.valueProp.subtext}
              items={data.valueProp.items}
            />
          </ScrollReveal>
        </div>
      )}

      <ScrollReveal>
        <ServiceCTA
          heading={data.cta.heading}
          subtext={data.cta.subtext}
          ctaText={data.cta.ctaText}
          backgroundVariant={data.cta.backgroundVariant}
        />
      </ScrollReveal>
    </div>
  );
}

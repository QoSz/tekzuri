import type { PricingSection } from "@/lib/data/service-pages";
import { PricingCard } from "./PricingCard";

interface PricingGridProps {
  section: PricingSection;
  isConsulting?: boolean;
  showDecorativeNumbers?: boolean;
  showCenteredLayout?: boolean;
  backgroundVariant?: 'deep' | 'base';
}

export function PricingGrid({ section, isConsulting = false, showDecorativeNumbers = false, showCenteredLayout = false, backgroundVariant = 'deep' }: PricingGridProps) {
  const gridCols = section.gridCols ?? 4;
  const gridClass = gridCols === 2
    ? 'grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto'
    : gridCols === 3
    ? 'grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto'
    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={`relative py-16 lg:py-24 px-6 lg:px-8 ${backgroundVariant === 'base' ? 'bg-bg-base' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground">{section.heading}</h2>
          <p className="text-lg text-fg-secondary max-w-3xl mx-auto">
            {section.subtext}
          </p>
        </div>

        <div className={`grid ${gridClass} gap-6 ${gridCols === 3 ? 'lg:gap-8' : ''}`}>
          {section.packages.map((pkg, index) => (
            <PricingCard
              key={index}
              pkg={pkg}
              index={index}
              showDecorativeNumber={showDecorativeNumbers}
              showCenteredLayout={showCenteredLayout}
              isConsulting={isConsulting}
            />
          ))}
        </div>

        {section.footnote && (
          <div className="text-center mt-12">
            <p className="text-sm text-fg-secondary">
              {section.footnote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import type { PricingPackage } from "@/lib/data/service-pages";

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
  showDecorativeNumber?: boolean;
  showCenteredLayout?: boolean;
  isConsulting?: boolean;
}

export function PricingCard({ pkg, index, showDecorativeNumber = false, showCenteredLayout = false, isConsulting = false }: PricingCardProps) {
  if (isConsulting) {
    return (
      <div
        className={`relative bg-bg-elevated border ${
          pkg.popular ? 'border-border-hover' : 'border-border-card'
        } p-8 lg:p-10 rounded-2xl transition-all duration-500 flex flex-col`}
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        {pkg.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-white text-bg-deep px-4 py-1 rounded-full text-xs font-medium">
              Start Here
            </span>
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bg-base text-fg-feature-number">
            <span className="text-lg font-mono font-medium">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{pkg.name}</h3>
            <p className="text-sm text-fg-secondary">{pkg.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">{pkg.price}</span>
            {pkg.currency && <span className="text-fg-secondary">{pkg.currency}</span>}
          </div>
        </div>

        <div className="mb-6 flex-grow">
          <h4 className="text-lg font-semibold mb-4">What You Get:</h4>
          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2 text-sm">
                <span className="text-fg-tertiary text-sm">&mdash;</span>
                <span className="text-fg-secondary">{feature}</span>
              </li>
            ))}
          </ul>

          {pkg.benefits && pkg.benefits.length > 0 && (
            <>
              <h4 className="text-lg font-semibold mb-4">Key Benefits:</h4>
              <ul className="space-y-3">
                {pkg.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-fg-tertiary text-sm">&mdash;</span>
                    <span className="text-fg-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <Link
          href="/contact"
          className={`w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-200 focus-ring ${
            pkg.popular
              ? 'bg-white text-bg-deep active:scale-[0.98]'
              : 'bg-bg-base hover:bg-white/[0.04] text-foreground border border-border-card'
          }`}
          style={pkg.popular ? { boxShadow: 'var(--shadow-button)' } : undefined}
        >
          {pkg.ctaText}
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`card-3d relative bg-bg-elevated border ${
        pkg.popular ? 'border-border-hover' : 'border-border-card'
      } p-6 lg:p-8 rounded-2xl hover:bg-bg-elevated-2 hover:border-border-strong flex flex-col`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-bg-deep px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}

      {showCenteredLayout ? (
        <div className="text-center mb-6">
          {showDecorativeNumber && (
            <span className="text-[2rem] font-light text-white/20 mb-4 block" style={{ fontFamily: 'var(--font-heading)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
          <p className="text-sm text-fg-secondary">{pkg.description}</p>
          <div className="mt-4">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">{pkg.price}</span>
            </div>
            <span className="text-sm text-fg-secondary">Monthly retainer</span>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            {showDecorativeNumber && (
              <span className="text-[2rem] font-light text-white/20 block mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold mb-1 text-foreground">{pkg.name}</h3>
              <p className="text-sm text-fg-secondary">{pkg.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
              {pkg.currency !== 'Pricing' && <span className="text-fg-secondary text-sm">{pkg.currency}</span>}
              {pkg.currency === 'Pricing' && <span className="text-fg-secondary">{pkg.currency}</span>}
            </div>
          </div>
        </>
      )}

      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start gap-2 text-sm">
            <span className="text-fg-tertiary text-sm">&mdash;</span>
            <span className="text-fg-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 focus-ring ${
          pkg.popular
            ? 'bg-white text-bg-deep hover:bg-white/90 active:scale-[0.98]'
            : 'bg-white/10 hover:bg-white/20 text-foreground border border-white/10'
        }`}
        style={pkg.popular ? { boxShadow: 'var(--shadow-button)' } : undefined}
      >
        {pkg.ctaText}
      </Link>
    </div>
  );
}

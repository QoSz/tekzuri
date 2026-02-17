import type { ValuePropItem } from "@/lib/data/service-pages";

interface ValuePropSectionProps {
  heading: string;
  subtext: string;
  items: ValuePropItem[];
}

export function ValuePropSection({ heading, subtext, items }: ValuePropSectionProps) {
  return (
    <div className="mt-16 bg-bg-elevated border border-border-card rounded-2xl p-8 lg:p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{heading}</h3>
        <p className="text-fg-secondary max-w-3xl mx-auto">
          {subtext}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.number} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-bg-base text-fg-feature-number mb-4">
              <span className="text-sm font-mono font-medium">{item.number}</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-fg-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

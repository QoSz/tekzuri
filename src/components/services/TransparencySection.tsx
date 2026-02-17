import type { TransparencyItem } from "@/lib/data/service-pages";

interface TransparencySectionProps {
  heading: string;
  subtext: string;
  items: TransparencyItem[];
}

export function TransparencySection({ heading, subtext, items }: TransparencySectionProps) {
  return (
    <div className="mt-16 bg-bg-elevated border border-border-card rounded-2xl p-8 lg:p-12"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">{heading}</h3>
        <p className="text-fg-secondary max-w-3xl mx-auto">
          {subtext}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.number} className="text-center bg-bg-elevated border border-border-card rounded-2xl p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-elevated border border-border-card text-fg-feature-number mx-auto mb-4">
              <span className="text-lg font-bold">{item.number}</span>
            </div>
            <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
            <p className="text-sm text-fg-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

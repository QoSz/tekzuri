interface SectionHeaderProps {
  heading: string;
  subtext?: string;
  swissLabel?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ heading, subtext, swissLabel, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {swissLabel && (
        <div className="swiss-label mb-4">
          {swissLabel}
        </div>
      )}
      <h2
        className="text-3xl lg:text-4xl font-semibold mb-4 text-foreground"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {heading}
      </h2>
      {subtext && (
        <p className={`text-lg text-fg-secondary leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

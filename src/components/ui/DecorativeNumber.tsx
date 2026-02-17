interface DecorativeNumberProps {
  number: string;
  variant?: 'decorative' | 'badge';
  className?: string;
}

export function DecorativeNumber({ number, variant = 'decorative', className = "" }: DecorativeNumberProps) {
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-elevated border border-border-card text-fg-feature-number ${className}`}>
        <span className="text-xl font-bold">{number}</span>
      </div>
    );
  }

  return (
    <span
      className={`text-[2rem] font-light text-white/20 block ${className}`}
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      {number}
    </span>
  );
}

interface ArrowIconProps {
  className?: string;
  variant?: 'right' | 'diagonal';
}

export function ArrowIcon({ className = "w-5 h-5", variant = "right" }: ArrowIconProps) {
  const d = variant === 'right'
    ? "M17 8l4 4m0 0l-4 4m4-4H3"
    : "M7 17L17 7M17 7H7M17 7v10";
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

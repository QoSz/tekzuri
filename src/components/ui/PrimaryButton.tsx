import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

export function PrimaryButton({
  href,
  children,
  showArrow = true,
  className = "",
  external = false,
}: PrimaryButtonProps) {
  const classes = `group cursor-pointer inline-flex items-center justify-center gap-3 bg-white text-bg-deep px-8 py-3.5 text-sm font-medium hover:bg-white/90 transition-all duration-200 rounded-full active:scale-[0.98] focus-ring ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={{ boxShadow: 'var(--shadow-button)' }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      style={{ boxShadow: 'var(--shadow-button)' }}
    >
      {content}
    </Link>
  );
}

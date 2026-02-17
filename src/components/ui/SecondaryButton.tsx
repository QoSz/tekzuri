import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({ href, children, className = "" }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`cursor-pointer inline-flex items-center justify-center gap-3 text-foreground px-8 py-3.5 text-sm font-medium border border-border-default hover:border-border-hover hover:bg-white/[0.04] transition-all duration-200 rounded-full focus-ring ${className}`}
    >
      {children}
    </Link>
  );
}

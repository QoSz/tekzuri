import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="text-[5rem] font-light text-white/10 block mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          404
        </span>
        <h1 className="text-3xl font-medium text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Page not found
        </h1>
        <p className="text-fg-secondary mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

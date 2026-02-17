'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-medium text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Something went wrong
        </h1>
        <p className="text-fg-secondary mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 cursor-pointer focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

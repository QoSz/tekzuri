export default function AboutLoading() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-12 w-80 max-w-full bg-bg-elevated rounded mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-full max-w-3xl bg-bg-elevated rounded mx-auto mb-2 animate-pulse" />
          <div className="h-6 w-2/3 max-w-2xl bg-bg-elevated rounded mx-auto animate-pulse" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full sm:w-80 aspect-square bg-bg-elevated rounded-2xl border border-border-card animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OurWorkLoading() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-12 w-96 max-w-full bg-bg-elevated rounded mb-6 animate-pulse" />
        <div className="h-6 w-full max-w-2xl bg-bg-elevated rounded mb-16 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-bg-elevated rounded-2xl border border-border-card overflow-hidden animate-pulse">
              <div className="aspect-[16/10] bg-bg-elevated-2" />
              <div className="p-6">
                <div className="h-4 w-20 bg-bg-elevated-2 rounded mb-3" />
                <div className="h-6 w-40 bg-bg-elevated-2 rounded mb-3" />
                <div className="h-4 w-full bg-bg-elevated-2 rounded mb-2" />
                <div className="h-4 w-3/4 bg-bg-elevated-2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

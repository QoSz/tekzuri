export default function ContactLoading() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-bg-elevated rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-full max-w-2xl bg-bg-elevated rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-bg-elevated rounded-2xl border border-border-card p-6 h-28 animate-pulse" />
            ))}
          </div>
          <div className="lg:col-span-2">
            <div className="bg-bg-elevated rounded-2xl border border-border-card p-6 md:p-8 min-h-[500px] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

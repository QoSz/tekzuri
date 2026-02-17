export default function Loading() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-12 w-80 max-w-full bg-bg-elevated rounded mx-auto mb-6 animate-pulse" />
        <div className="h-6 w-full max-w-2xl bg-bg-elevated rounded mx-auto mb-2 animate-pulse" />
        <div className="h-6 w-2/3 max-w-xl bg-bg-elevated rounded mx-auto mb-16 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-bg-elevated rounded-2xl p-8 border border-border-card min-h-[200px] animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamMemberLoading() {
  return (
    <div className="min-h-screen pt-16 lg:pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-5 w-32 bg-bg-elevated rounded mb-8 animate-pulse" />
        <div className="bg-bg-elevated border border-border-card rounded-xl p-8 md:p-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-bg-elevated-2 mb-6 animate-pulse" />
            <div className="h-8 w-48 bg-bg-elevated-2 rounded mb-2 animate-pulse" />
            <div className="h-5 w-24 bg-bg-elevated-2 rounded animate-pulse" />
          </div>
          <div className="w-24 h-px bg-border-card mx-auto mb-8" />
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-5 w-full bg-bg-elevated-2 rounded mb-2 animate-pulse" />
                <div className="h-5 w-5/6 bg-bg-elevated-2 rounded mb-2 animate-pulse" />
                <div className="h-5 w-4/5 bg-bg-elevated-2 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesLoading() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="h-6 w-32 bg-[rgba(255,255,255,0.04)] rounded mx-auto mb-4 animate-pulse" />
          <div className="h-16 w-96 max-w-full bg-[rgba(255,255,255,0.04)] rounded mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-full max-w-3xl bg-[rgba(255,255,255,0.04)] rounded mx-auto mb-2 animate-pulse" />
          <div className="h-6 w-2/3 max-w-2xl bg-[rgba(255,255,255,0.04)] rounded mx-auto animate-pulse" />
        </div>

        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#111116] rounded-xl p-8 lg:p-10 border border-[rgba(255,255,255,0.06)]"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-[rgba(255,255,255,0.04)] rounded-xl mb-6 animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-8 w-48 bg-[rgba(255,255,255,0.04)] rounded mb-4 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-5 w-full bg-[rgba(255,255,255,0.04)] rounded animate-pulse" />
                <div className="h-5 w-5/6 bg-[rgba(255,255,255,0.04)] rounded animate-pulse" />
              </div>

              {/* Button Skeleton */}
              <div className="h-6 w-32 bg-[rgba(255,255,255,0.04)] rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BackgroundAnimation() {
  return (
    <>
      {/* Gradient mesh background */}
      <div className="fixed inset-0 -z-20 bg-[#0a0a12]" />
      
      {/* Animated gradient orbs - smooth and elegant */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#A4294F] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-[#8B2346] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-[#C43868] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grain texture overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}

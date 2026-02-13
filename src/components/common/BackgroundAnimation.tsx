export function BackgroundAnimation() {
  return (
    <>
      {/* Solid dark base layer */}
      <div className="fixed inset-0 -z-20 bg-[#0e0e0e]" />

      {/* Marble texture via SVG filters */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Fractal noise for organic vein pattern */}
            <filter id="marble" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.003"
                numOctaves={6}
                seed={3}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={120}
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation={40} />
            </filter>

            {/* Radial gradients in muted dark tones */}
            <radialGradient id="g1" cx="25%" cy="20%" r="50%">
              <stop offset="0%" stopColor="#2a0f18" stopOpacity={0.08} />
              <stop offset="100%" stopColor="#0e0e0e" stopOpacity={0} />
            </radialGradient>

            <radialGradient id="g2" cx="75%" cy="15%" r="45%">
              <stop offset="0%" stopColor="#1a0a2e" stopOpacity={0.06} />
              <stop offset="100%" stopColor="#0e0e0e" stopOpacity={0} />
            </radialGradient>

            <radialGradient id="g3" cx="60%" cy="70%" r="55%">
              <stop offset="0%" stopColor="#3d1520" stopOpacity={0.05} />
              <stop offset="100%" stopColor="#0e0e0e" stopOpacity={0} />
            </radialGradient>

            <radialGradient id="g4" cx="30%" cy="80%" r="50%">
              <stop offset="0%" stopColor="#1c1c1c" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#0e0e0e" stopOpacity={0} />
            </radialGradient>
          </defs>

          {/* Gradient layers filtered through marble distortion */}
          <g filter="url(#marble)">
            <rect width="100%" height="100%" fill="url(#g1)" />
            <rect width="100%" height="100%" fill="url(#g2)" />
            <rect width="100%" height="100%" fill="url(#g3)" />
            <rect width="100%" height="100%" fill="url(#g4)" />
          </g>
        </svg>
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

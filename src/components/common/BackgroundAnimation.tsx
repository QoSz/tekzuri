export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Layer 1: True-black base */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Layer 2: Subtle ambient glow (top-center) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 100%)',
        }}
      />

      {/* Layer 3: Secondary glow (center, wider, dimmer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 60% at 50% 40%, rgba(255,255,255,0.015) 0%, transparent 100%)',
        }}
      />

      {/* Layer 4: Dot grid pattern */}
      <div className="absolute inset-0 bg-dot-grid" />

      {/* Layer 5: Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Layer 6: Enhanced vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,8,0.7) 100%)',
        }}
      />
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-16 overflow-hidden">
              {/* Matrix rain background - left side */}
              <div className="absolute left-0 top-0 bottom-0 w-1/4 z-0 flex justify-around overflow-hidden" aria-hidden="true">
                <span className="matrix-column" style={{ animationDuration: '35s', animationDelay: '0s' }}>
                  技術革新創造未来設計品質工芸匠精神技術革新創造未来設計品質工芸匠精神
                </span>
                <span className="matrix-column" style={{ animationDuration: '42s', animationDelay: '-8s' }}>
                  ものづくりコード開発システム構築技術ものづくりコード開発システム構築技術
                </span>
                <span className="matrix-column" style={{ animationDuration: '30s', animationDelay: '-15s' }}>
                  卓越完璧追求最高品質卓越完璧追求最高品質卓越完璧追求最高品質
                </span>
                <span className="matrix-column" style={{ animationDuration: '48s', animationDelay: '-5s' }}>
                  革新伝統融合芸術技術革新伝統融合芸術技術革新伝統融合芸術技術
                </span>
                <span className="matrix-column" style={{ animationDuration: '38s', animationDelay: '-12s' }}>
                  匠精密正確優雅美匠精密正確優雅美匠精密正確優雅美匠精密正確優雅美
                </span>
              </div>

              {/* Matrix rain background - right side */}
              <div className="absolute right-0 top-0 bottom-0 w-1/4 z-0 flex justify-around overflow-hidden" aria-hidden="true">
                <span className="matrix-column" style={{ animationDuration: '40s', animationDelay: '-20s' }}>
                  創造設計開発構築革新創造設計開発構築革新創造設計開発構築革新
                </span>
                <span className="matrix-column" style={{ animationDuration: '45s', animationDelay: '-3s' }}>
                  未来技術芸術品質未来技術芸術品質未来技術芸術品質未来技術芸術品質
                </span>
                <span className="matrix-column" style={{ animationDuration: '32s', animationDelay: '-18s' }}>
                  設計構築開発革新設計構築開発革新設計構築開発革新設計構築開発革新
                </span>
                <span className="matrix-column" style={{ animationDuration: '50s', animationDelay: '-10s' }}>
                  精神工芸伝統融合精神工芸伝統融合精神工芸伝統融合精神工芸伝統融合
                </span>
                <span className="matrix-column" style={{ animationDuration: '36s', animationDelay: '-25s' }}>
                  コード技術システム創造コード技術システム創造コード技術システム創造
                </span>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8">
                  <span className="text-4xl font-bold text-accent">T</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                  TekZuri
                </h3>
                <div className="w-16 h-px bg-accent mx-auto mb-6" />
                <p className="text-muted text-lg tracking-wide">
                  Tech + Monozukuri
                </p>
                <p className="text-muted/70 text-sm mt-2">
                  ものづくり
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute z-10 top-4 left-4 w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute z-10 top-4 right-4 w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute z-10 bottom-4 left-4 w-2 h-2 rounded-full bg-accent/50" />
            </div>

          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide mb-4">
              <span className="w-8 h-px bg-accent" />
              Our Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              The art of making things
            </h2>

            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Monozukuri</strong> (ものづくり) is a Japanese concept
                that encompasses not just making things, but the spirit and mindset behind creating
                products with dedication and craftsmanship.
              </p>
              <p>
                At TekZuri, we bring this philosophy to technology. Every line of code,
                every design decision, every solution is crafted with intention and care.
              </p>
              <p>
                We believe in building solutions that are not only functional but elegant,
                technology that stands the test of time and brings value for years to come.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quality First</h4>
                  <p className="text-sm text-muted">Never compromise on excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Attention to Detail</h4>
                  <p className="text-sm text-muted">Every pixel matters</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Client Partnership</h4>
                  <p className="text-sm text-muted">Your success is our success</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-sm text-muted">Modern solutions, timeless quality</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
              >
                Learn more about us
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

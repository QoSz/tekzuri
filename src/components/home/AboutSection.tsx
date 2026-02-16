export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div
              className="group relative bg-[#111116] border border-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.10)] transition-all duration-700"
              style={{
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="relative min-h-[360px] lg:min-h-[460px] flex flex-col items-center justify-center p-10 lg:p-14">

                {/* Soft ambient glow */}
                <div
                  className="absolute animate-glow-pulse pointer-events-none"
                  aria-hidden="true"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: '260px',
                    height: '260px',
                    transform: 'translate(-50%, -50%)',
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Enso circle */}
                <svg
                  className="w-48 h-48 lg:w-56 lg:h-56 animate-enso-drift"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="440 60"
                  />
                </svg>

                {/* Text block */}
                <div className="relative z-10 text-center -mt-4">
                  <h3
                    className="text-3xl lg:text-4xl font-light text-[#e8e8ed] tracking-tight mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    TekZuri
                  </h3>

                  <div className="w-10 h-px bg-[rgba(255,255,255,0.10)] mx-auto mb-3" />

                  <p className="text-[#94949e] text-sm tracking-[0.04em]">
                    Tech + Monozukuri
                  </p>
                  <p className="text-[#5c5c68] text-base mt-1">
                    ものづくり
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>

            <h2 className="text-4xl sm:text-5xl font-normal tracking-[-0.02em] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              The art of making things
            </h2>

            <div className="space-y-6 text-lg text-[#94949e] leading-relaxed">
              <p>
                <strong className="text-[#e8e8ed] font-medium">Monozukuri</strong> (ものづくり) is a Japanese concept
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Quality First", desc: "Never compromise on excellence" },
                { num: "02", title: "Attention to Detail", desc: "Every pixel matters" },
                { num: "03", title: "Client Partnership", desc: "Your success is our success" },
                { num: "04", title: "Innovation", desc: "Modern solutions, timeless quality" },
              ].map((value) => (
                <div key={value.num} className="flex items-start gap-4">
                  <span className="text-xl font-light text-white/20 leading-none mt-0.5 shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium mb-1 text-[#e8e8ed]">{value.title}</h4>
                    <p className="text-xs text-[#94949e] leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="/about"
                className="group cursor-pointer inline-flex items-center gap-2 text-foreground font-medium hover:text-[#e8e8ed] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] rounded-sm"
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

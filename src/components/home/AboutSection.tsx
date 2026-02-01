export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gray-900 rounded-3xl p-12 lg:p-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-8">
                  <span className="text-4xl font-bold text-accent">T</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                  TekZuri
                </h3>
                <div className="w-16 h-px bg-accent mx-auto mb-6" />
                <p className="text-gray-400 text-lg tracking-wide">
                  Tech + Monozukuri
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  ものづくり
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent/50" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-accent/50" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted">Client Satisfaction</div>
                </div>
              </div>
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
                We believe in building solutions that are not only functional but elegant—
                technology that stands the test of time and brings value for years to come.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-2 gap-6">
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

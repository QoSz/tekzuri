export function AboutSection() {
  return (
    <section id="about" className="px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="w-full aspect-square border border-gray-200 bg-[#FEFBF6] flex items-center justify-center rounded-md">
              <div className="text-center p-12">
                <span className="text-5xl md:text-6xl font-light text-burgundy tracking-tight">TekZuri</span>
                <div className="w-16 h-px bg-burgundy mx-auto my-6"></div>
                <p className="text-gray-500 text-lg tracking-wide">Tech + Monozukuri</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              The Art of Making Things
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              <strong className="text-burgundy font-medium">Monozukuri</strong> (ものづくり) is a Japanese concept
              that encompasses not just making things, but the spirit and mindset behind creating
              products with dedication and craftsmanship.
            </p>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              At TekZuri, we bring this philosophy to technology. Every line of code,
              every design decision, every solution is crafted with intention and care.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Formerly known as Interconnect, we&apos;ve evolved our identity to better reflect
              our commitment to elegant, thoughtful technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

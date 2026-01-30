import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-gray-100">
        <Image
          src="/TekZuri Logo - 1 - Edited.png"
          alt="TekZuri Logo"
          width={70}
          height={70}
          priority
        />
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
            Services
          </a>
          <a href="#our-work" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
            Our Work
          </a>
          <a href="#about" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-burgundy transition-colors tracking-wide text-sm uppercase">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-burgundy text-white px-6 py-3 hover:bg-burgundy-dark transition-colors font-medium text-sm tracking-wide uppercase"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-6">Work with Elegance</p>
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-8">
              Technology
              <span className="block font-semibold">Crafted with Care</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Inspired by the Japanese philosophy of monozukuri, we blend meticulous craftsmanship
              with cutting-edge technology to build solutions that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-gray-900 text-white px-8 py-4 hover:bg-burgundy transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Explore Services
              </a>
              <a
                href="#about"
                className="border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/TekZuri Logo - 1 - Edited.png"
              alt="TekZuri"
              width={420}
              height={420}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {/* Service Card 1 */}
            <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 border border-burgundy flex items-center justify-center mb-8 group-hover:bg-burgundy transition-colors">
                <svg className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-500 leading-relaxed">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 border border-burgundy flex items-center justify-center mb-8 group-hover:bg-burgundy transition-colors">
                <svg className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Mobile Solutions</h3>
              <p className="text-gray-500 leading-relaxed">
                Native and cross-platform mobile apps that deliver seamless user experiences.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 border border-burgundy flex items-center justify-center mb-8 group-hover:bg-burgundy transition-colors">
                <svg className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">IT Consulting</h3>
              <p className="text-gray-500 leading-relaxed">
                Strategic guidance to help your business leverage technology effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mulsons */}
            <a
              href="https://mulsons.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[16/10] bg-gray-100"
            >
              <Image
                src="/clients/mulsons.svg"
                alt="Mulsons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium text-xl">Mulsons</span>
                <span className="text-white/70 text-sm uppercase tracking-wide mt-1">Spice Manufacturing</span>
                <span className="mt-6 border border-white text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-burgundy transition-colors">
                  Visit Site
                </span>
              </div>
            </a>

            {/* SKL */}
            <a
              href="https://skl.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[16/10] bg-gray-100"
            >
              <Image
                src="/clients/skl.svg"
                alt="SKL"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium text-xl">SKL</span>
                <span className="text-white/70 text-sm uppercase tracking-wide mt-1">Packaging Solutions</span>
                <span className="mt-6 border border-white text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-burgundy transition-colors">
                  Visit Site
                </span>
              </div>
            </a>

            {/* Kova Collective */}
            <a
              href="https://mykova.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[16/10] bg-gray-100"
            >
              <Image
                src="/clients/mykova.svg"
                alt="Kova Collective"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium text-xl">Kova Collective</span>
                <span className="text-white/70 text-sm uppercase tracking-wide mt-1">Social Commerce Agency</span>
                <span className="mt-6 border border-white text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-burgundy transition-colors">
                  Visit Site
                </span>
              </div>
            </a>

            {/* Mandela Barbery */}
            <a
              href="https://mandelabarbery.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[16/10] bg-gray-100"
            >
              <Image
                src="/clients/mandela-barbery.svg"
                alt="Mandela Barbery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium text-xl">Mandela Barbery</span>
                <span className="text-white/70 text-sm uppercase tracking-wide mt-1">Grooming & Barbershop</span>
                <span className="mt-6 border border-white text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-burgundy transition-colors">
                  Visit Site
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="w-full aspect-square border border-gray-200 bg-white flex items-center justify-center">
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

      {/* Contact Section */}
      <section id="contact" className="px-8 py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-burgundy-light uppercase tracking-[0.3em] text-sm mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Build Something Elegant?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Let&apos;s discuss how we can help bring your vision to life with craftsmanship and care.
          </p>
          <a
            href="mailto:hello@tekzuri.com"
            className="inline-block bg-burgundy text-white px-10 py-4 hover:bg-burgundy-light transition-colors font-medium text-sm tracking-wide uppercase"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/TekZuri Logo - 1 - Edited.png"
              alt="TekZuri Logo"
              width={36}
              height={36}
            />
            <span className="font-medium text-gray-900 tracking-wide">TekZuri</span>
          </div>
          <p className="text-gray-500 text-sm tracking-wide">
            © {new Date().getFullYear()} TekZuri — Work with Elegance
          </p>
        </div>
      </footer>
    </div>
  );
}

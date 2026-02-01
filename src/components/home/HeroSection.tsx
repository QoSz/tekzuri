import Image from "next/image";

export function HeroSection() {
  return (
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
              className="bg-warm-900 text-white px-8 py-4 hover:bg-burgundy transition-colors font-medium text-sm tracking-wide uppercase rounded-md"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className="border border-warm-900 text-warm-900 px-8 py-4 hover:bg-warm-900 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase rounded-md"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/tekzuri-logo.webp"
            alt="TekZuri"
            width={420}
            height={420}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const portfolioItems = [
  { name: "Mulsons", subtitle: "Spice Manufacturing", url: "https://mulsons.co.ke", image: "/clients/mulsons.webp" },
  { name: "SKL", subtitle: "Packaging Solutions", url: "https://skl.co.ke", image: "/clients/skl.webp" },
  { name: "Kova Collective", subtitle: "Social Commerce Agency", url: "https://mykova.co", image: "/clients/kova.webp" },
  { name: "Mandela Barbery", subtitle: "Barbershop", url: "https://mandelabarbery.co.ke", image: "/clients/mandela-barbery.webp" },
  { name: "Criss Cross", subtitle: "FMCG", url: "https://crisscross.co.ke", image: "/clients/criss-cross.webp" },
  { name: "UFS", subtitle: "Freight & Logistics", url: "https://www.linkedin.com/company/ufsltd", image: "/clients/ufs.webp" },
];

export function PortfolioSection() {
  return (
    <section id="our-work" className="px-8 py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-[2/1] bg-warm-100 rounded-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-burgundy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium text-xl">{item.name}</span>
                <span className="text-white/70 text-sm uppercase tracking-wide mt-1">{item.subtitle}</span>
                <span className="mt-6 border border-white text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-burgundy transition-colors rounded-md">
                  Visit Site
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

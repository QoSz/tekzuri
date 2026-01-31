const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to help your business leverage technology effectively.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-burgundy uppercase tracking-[0.3em] text-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gray-200">
          {services.map((service) => (
            <div key={service.title} className="bg-[#FEFBF6] p-12 hover:bg-gray-50 transition-colors group">
              <div className="w-12 h-12 border border-burgundy flex items-center justify-center mb-8 group-hover:bg-burgundy transition-colors">
                <svg className="w-6 h-6 text-burgundy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

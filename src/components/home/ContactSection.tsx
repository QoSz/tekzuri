export function ContactSection() {
  return (
    <section id="contact" className="px-8 py-24 bg-warm-900">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-burgundy-light uppercase tracking-[0.3em] text-sm mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#FEFBF6] mb-6">
          Ready to Build Something Elegant?
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          Let&apos;s discuss how we can help bring your vision to life with craftsmanship and care.
        </p>
        <a
          href="mailto:hello@tekzuri.com"
          className="inline-block bg-burgundy text-white px-10 py-4 hover:bg-burgundy-light transition-colors font-medium text-sm tracking-wide uppercase rounded-md"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

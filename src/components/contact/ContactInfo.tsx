interface ContactItem {
  title: string;
  content: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    title: "Email",
    content: (
      <a href="mailto:business@tekzuri.com" className="cursor-pointer hover:text-[#f0f0f2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm">
        business@tekzuri.com
      </a>
    ),
  },
  {
    title: "Phone",
    content: (
      <div className="space-y-1">
        <a href="tel:+254788871946" className="block cursor-pointer hover:text-[#f0f0f2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm">
          +254 788 871 946
        </a>
        <a href="tel:+447586752568" className="block cursor-pointer hover:text-[#f0f0f2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm">
          +44 7586 752 568
        </a>
      </div>
    ),
  },
  {
    title: "Address",
    content: (
      <div className="space-y-1">
        <p>London, United Kingdom</p>
        <p>Nairobi, Kenya</p>
      </div>
    ),
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/tekzuri/",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/tekzuri",
    label: "LinkedIn",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map(({ title, content }) => (
        <div key={title} className="card-3d bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-foreground mb-3">{title}</h3>
          <div className="text-muted">{content}</div>
        </div>
      ))}

      <div className="card-3d bg-[#1c1c20] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="inline-block py-1 cursor-pointer text-[#6b6b75] hover:text-[#f0f0f2] transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013] rounded-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

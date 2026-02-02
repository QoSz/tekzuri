import { Mail, Phone, MapPin, Instagram, Linkedin, type LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:business@tekzuri.com" className="hover:text-accent transition-colors">
        business@tekzuri.com
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <div className="space-y-1">
        <a href="tel:+254788871946" className="block hover:text-accent transition-colors">
          +254 788 871 946
        </a>
        <a href="tel:+447586752568" className="block hover:text-accent transition-colors">
          +44 7586 752 568
        </a>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Nairobi, Kenya",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/tekzuri/",
    label: "Follow us on Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/tekzuri",
    label: "Connect with us on LinkedIn",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactItems.map(({ icon: Icon, title, content }) => (
        <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start">
            <div className="p-3 rounded-lg bg-accent/10 shrink-0">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-foreground mb-1">{title}</h3>
              <div className="text-muted">{content}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-foreground mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-accent" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

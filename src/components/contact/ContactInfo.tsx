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
      <a href="mailto:hello@tekzuri.com" className="hover:text-burgundy transition-colors">
        hello@tekzuri.com
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <div className="space-y-1">
        <a href="tel:+254788871946" className="block hover:text-burgundy transition-colors">
          +254 788 871 946
        </a>
        <a href="tel:+447586752568" className="block hover:text-burgundy transition-colors">
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
        <div key={title} className="bg-warm-50 rounded-xl p-6 border border-warm-200">
          <div className="flex items-start">
            <div className="p-3 rounded-lg bg-burgundy/10 shrink-0">
              <Icon className="h-5 w-5 text-burgundy" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
              <div className="text-gray-600">{content}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-warm-50 rounded-xl p-6 border border-warm-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-burgundy/10 hover:bg-burgundy/20 transition-colors"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-burgundy" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

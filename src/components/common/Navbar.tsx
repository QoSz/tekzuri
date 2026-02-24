import { NavbarClient } from "./NavbarClient";

export const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "React, Next.js & custom web apps",
      },
      {
        label: "AI Automation",
        href: "/services/ai-automation",
        description: "Intelligent workflow solutions",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Data-driven growth strategies",
      },
      {
        label: "IT Consulting",
        href: "/services/it-consulting",
        description: "Strategic technology guidance",
      },
    ],
  },
  { label: "Work", href: "/our-work" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our story and mission",
      },
      {
        label: "Our Team",
        href: "/about/team",
        description: "Meet the people behind TekZuri",
      },
    ],
  },
];

export function Navbar() {
  return <NavbarClient navItems={navItems} />;
}

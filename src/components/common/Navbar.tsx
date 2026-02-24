import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

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
  return (
    <nav
      className="relative sticky top-0 z-20 border-b"
      style={{
        backgroundColor: "#ffffff",
        borderBottomColor: "#000000",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="max-w-[90rem] mx-auto px-10">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="TekZuri home">
            <Image
              src="/tekzuri-logo.webp"
              alt="TekZuri"
              width={48}
              height={48}
              priority
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              style={{ filter: "brightness(0)" }}
            />
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  {/* Trigger */}
                  <div
                    className="flex items-center gap-1 px-5 py-2 rounded-[0.375rem] font-medium cursor-pointer select-none transition-colors duration-200 hover:bg-[#f5f5f5]"
                    style={{
                      color: "#000000",
                      fontSize: "1rem",
                      lineHeight: "150%",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
                      className="mt-px transition-transform duration-200 group-hover:rotate-180"
                    />
                  </div>

                  {/* Invisible bridge so cursor can travel to dropdown */}
                  <div className="absolute top-full left-0 w-full h-2" />

                  {/* Dropdown panel */}
                  <div
                    className="absolute top-[calc(100%+0.5rem)] left-0 invisible opacity-0 -translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 z-50"
                    style={{ minWidth: "13rem" }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #000000",
                        borderRadius: "0.375rem",
                        padding: "0.375rem",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="flex flex-col px-3 py-2.5 rounded-[0.25rem] transition-colors duration-150 hover:bg-[#f5f5f5]"
                        >
                          <span
                            className="font-medium"
                            style={{ color: "#000000", fontSize: "0.875rem" }}
                          >
                            {child.label}
                          </span>
                          <span
                            style={{
                              color: "#777777",
                              fontSize: "0.75rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-2 rounded-[0.375rem] font-medium transition-colors duration-200 hover:bg-[#f5f5f5]"
                  style={{
                    color: "#000000",
                    fontSize: "1rem",
                    lineHeight: "150%",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right side: ghost link + CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex cursor-pointer font-medium transition-colors duration-200 hover:bg-[#f5f5f5] rounded-[0.375rem] px-3 py-2"
              style={{
                color: "#555555",
                fontSize: "1rem",
                lineHeight: "150%",
                fontWeight: 500,
              }}
            >
              Contact
            </Link>

            <MobileMenu navItems={navItems} />
          </div>

        </div>
      </div>
    </nav>
  );
}

# TekZuri Codebase Discovery Report

## 1. Executive Summary

- **Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion, deployed as a dark-themed portfolio/agency site for tekzuri.com.
- **Design System**: Monochromatic dark palette (blacks, grays, white accents) with no brand color -- accent is pure white (#ffffff). Typography uses Space Grotesk (headings), Inter (body), JetBrains Mono (mono).
- **Content**: 4 services (Web Dev, AI Automation, Digital Marketing, IT Consulting) each with dedicated pricing pages, 6 client projects, 3 team members, plus a contact form powered by Web3Forms.
- **Animations**: Framer Motion for scroll-reveal, word carousel, 3D card tilt, stagger entrance; CSS keyframes for orbital hero, enso drift, glow pulses; full `prefers-reduced-motion` support.
- **Architecture**: Clean App Router structure with static data files as "database", server actions for form submission, proper SEO (JSON-LD, sitemap, robots, manifest, per-page metadata).

---

## 2. Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.1.6 |
| UI Library | React | ^19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 (`@theme inline`) | ^4 |
| Animations | Framer Motion | ^12.34.0 |
| Icons | lucide-react | ^0.563.0 |
| Forms | react-hook-form | ^7.71.1 |
| Validation | Zod | ^4.3.6 |
| Form Resolvers | @hookform/resolvers | ^5.2.2 |
| Build Tool | Next.js built-in (Turbopack-compatible) | - |
| PostCSS | @tailwindcss/postcss | ^4 |
| Linting | ESLint + eslint-config-next | ^9 / 16.1.4 |

### next.config.ts Settings
- `reactStrictMode: true`
- `poweredByHeader: false`
- `compress: true`
- Image formats: AVIF, WebP
- `optimizePackageImports: ["lucide-react", "framer-motion"]`

### tsconfig.json
- Target: ES2017
- Strict: true
- Path alias: `@/*` -> `./src/*`

---

## 3. Color System

### CSS Custom Properties (`:root` in globals.css)

#### Backgrounds
| Variable | Value | Purpose |
|---|---|---|
| `--bg-deep` | `#050508` | Deepest background (body, page bg) |
| `--bg-base` | `#0a0a0f` | Base background |
| `--bg-elevated` | `#111116` | Card/panel backgrounds |
| `--bg-elevated-2` | `#18181f` | Hover state for cards |
| `--bg-surface` | `#1f1f28` | Surface-level elements |
| `--background` | `#050508` | Legacy alias for bg-deep |
| `--dark-bg` | `#050508` | Legacy alias |
| `--dark-bg-light` | `#0a0a0f` | Legacy alias |

#### Foreground / Text
| Variable | Value | Purpose |
|---|---|---|
| `--foreground` | `#e8e8ed` | Primary text |
| `--fg-secondary` | `#94949e` | Secondary/muted text |
| `--fg-tertiary` | `#5c5c68` | Tertiary/subtle text |
| `--fg-quaternary` | `#3a3a44` | Quaternary (scroll thumb, labels) |
| `--muted` | `#94949e` | Legacy alias for fg-secondary |
| `--muted-light` | `#e8e8ed` | Legacy alias for foreground |

#### Accent
| Variable | Value | Purpose |
|---|---|---|
| `--accent` | `#ffffff` | Accent color (pure white) |
| `--accent-dark` | `#e0e0e0` | Darker accent variant |
| `--accent-light` | `#ffffff` | Lighter accent variant |

#### Borders
| Variable | Value | Purpose |
|---|---|---|
| `--border-subtle` | `rgba(255, 255, 255, 0.07)` | Subtle borders |
| `--border-default` | `rgba(255, 255, 255, 0.11)` | Default borders |
| `--border-strong` | `rgba(255, 255, 255, 0.18)` | Strong/hover borders |
| `--border-hover` | `rgba(255, 255, 255, 0.28)` | Active hover borders |

#### Shadows
| Variable | Value |
|---|---|
| `--shadow-card` | `0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.25)` |
| `--shadow-card-hover` | `0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.3)` |
| `--shadow-button` | `0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)` |

#### Neutrals (gray scale)
| Variable | Value | Purpose |
|---|---|---|
| `--gray-50` | `#111116` | Matches bg-elevated |
| `--gray-100` | `#18181f` | Matches bg-elevated-2 |
| `--gray-200` | `#1f1f28` | Matches bg-surface |
| `--gray-300` | `#3a3a44` | Matches fg-quaternary |
| `--gray-800` | `#94949e` | Matches fg-secondary |
| `--gray-900` | `#e8e8ed` | Matches foreground |

### Tailwind `@theme inline` Mappings
All CSS variables are exposed as Tailwind color utilities:
- `bg-background`, `text-foreground`, `text-muted`, `text-muted-light`
- `text-accent`, `text-accent-dark`, `text-accent-light`
- `bg-gray-50` through `bg-gray-900`
- `bg-bg-deep`, `bg-bg-base`, `bg-bg-elevated`, `bg-bg-elevated-2`, `bg-bg-surface`
- `text-fg-secondary`, `text-fg-tertiary`, `text-fg-quaternary`
- Font families: `font-sans`, `font-heading`, `font-mono`

### Hardcoded Colors Used in Components
Many components use hardcoded hex/rgba values instead of CSS variables:
- `#050508` (deep bg, used in ~15+ places as ring-offset, text color)
- `#0a0a0f` (base bg, used in form inputs, section backgrounds)
- `#111116` (card bg, used in ~25+ places)
- `#18181f` (hover card bg)
- `#e8e8ed` (primary text, used directly in ~20+ places)
- `#94949e` (muted text, used directly in ~15+ places)
- `#5c5c68` (tertiary text)
- `#8a8a95` (used in AI/Marketing/Consulting feature numbers)
- `rgba(255,255,255,0.04)` through `rgba(255,255,255,0.28)` (borders, overlays)
- `rgba(0,0,0,...)` (shadows, gradients)
- `bg-emerald-400` (only color accent: "available" dot in ContactSection)

### Special Color: Emerald
The ContactSection uses `bg-emerald-400/40` and `bg-emerald-400/80` for the "Available for new projects" indicator -- the ONLY non-gray/white color in the entire site.

---

## 4. Typography System

### Fonts (loaded via `next/font/google` in layout.tsx)

| Font | CSS Variable | Weights | Usage |
|---|---|---|---|
| Space Grotesk | `--font-heading` | 300, 400, 500, 600, 700 | Headings (h1-h6), numbers, brand elements |
| Inter | `--font-sans` | 300, 400, 500, 600 | Body text, UI elements, paragraphs |
| JetBrains Mono | `--font-mono` | default | Monospace text (IT consulting feature numbers) |

### Body Base
- `font-size: 1rem` (16px)
- `line-height: 1.7`
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`

### Heading Sizes Used Across Components
| Context | Classes | Approx Size |
|---|---|---|
| Hero h1 | `text-[2.5rem] sm:text-[3rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem]` | 40-72px |
| Service page h1 | `text-5xl sm:text-6xl lg:text-7xl font-bold` | 48-72px |
| Our Work h1 | `text-4xl sm:text-5xl lg:text-6xl font-medium` | 36-60px |
| Section h2 | `text-4xl sm:text-5xl lg:text-6xl font-normal` | 36-60px |
| Subsection h2 | `text-3xl lg:text-4xl font-semibold` | 30-36px |
| Card h3 | `text-xl font-medium` or `text-2xl font-semibold` | 20-24px |
| Small labels | `text-xs` or `text-sm` | 12-14px |

### Special Typography Classes
| Class | Properties |
|---|---|
| `.swiss-label` | `font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg-tertiary)` |
| `.text-shadow-sm` | `text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5)` |
| `.text-shadow` | `text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.4)` |

### Font Weight Usage
- `font-light` (300): Large decorative numbers ("01", "02"), enso "TekZuri" text, team member name on bio page
- `font-normal` (400): Most headings (hero, section headers)
- `font-medium` (500): Card titles, nav links, buttons, swiss-label, body emphasis
- `font-semibold` (600): Service page headings, sub-headings, card titles
- `font-bold` (700): Service page h1, pricing amounts, feature numbers

### Tracking (Letter Spacing)
- `tracking-[-0.03em]`: Hero h1
- `tracking-[-0.02em]`: Section h2s
- `tracking-tight`: Various h1/h2
- `tracking-[0.02em]`: Nav links
- `tracking-[0.04em]`: "Tech + Monozukuri" subtitle
- `tracking-[0.12em]`: Footer section labels (via swiss-label pattern)
- `tracking-wider`: Project subtitle labels

---

## 5. Content Inventory

### 5.1 Homepage Content

#### Hero Section (HeroSection.tsx)
- **Headline**: "Build with [Elegance / Precision / Excellence / Mastery]" (WordCarousel)
- **Subheadline**: "Inspired by the Japanese philosophy of monozukuri, we craft digital solutions with meticulous attention to detail and timeless quality."
- **CTA Primary**: "Start Your Project" -> /contact
- **CTA Secondary**: "Explore Services" -> #services

#### Services Section (ServicesSection.tsx)
- **Heading**: "Services that drive results"
- **Subtext**: "We combine technical expertise with creative thinking to deliver solutions that exceed expectations."
- **Cards**: 4 services from `src/lib/data/services.ts` (see below)
- **Bottom CTA**: "Let's discuss your project" -> /contact

#### Featured Work (FeaturedWork.tsx)
- **Heading**: "Featured work"
- **Subtext**: "A curated look at recent work that reflects our commitment to craft."
- **CTA**: "View all projects" -> /our-work
- **Shows**: Featured projects (Mulsons, SKL)

#### About Section (AboutSection.tsx)
- **Visual**: Enso circle with "TekZuri" / "Tech + Monozukuri" / "ものづくり"
- **Heading**: "The art of making things"
- **Content**:
  - "Monozukuri (ものづくり) is a Japanese concept that encompasses not just making things, but the spirit and mindset behind creating products with dedication and craftsmanship."
  - "At TekZuri, we bring this philosophy to technology. Every line of code, every design decision, every solution is crafted with intention and care."
  - "We believe in building solutions that are not only functional but elegant, technology that stands the test of time and brings value for years to come."
- **Values**: 01 Quality First / 02 Attention to Detail / 03 Client Partnership / 04 Innovation
- **CTA**: "Learn more about us" -> /about

#### Contact Section (ContactSection.tsx)
- **Badge**: "Available for new projects" (green dot)
- **Heading**: "Ready to build something elegant?"
- **Subtext**: "Let's discuss how we can help bring your vision to life with craftsmanship, care, and cutting-edge technology."
- **CTA Primary**: "Get in Touch" -> /contact
- **CTA Secondary**: "business@tekzuri.com" -> mailto
- **Trust indicators**: "Trusted by businesses across industries" + pills: Mulsons, SKL, Kova Collective, Criss Cross

### 5.2 Services Data (src/lib/data/services.ts)

| ID | Title | Description | Features |
|---|---|---|---|
| web-development | Web Development | Custom websites and web applications built with modern technologies, optimized for performance and user experience. We create responsive, scalable solutions tailored to your business needs. | React & Next.js, TypeScript, Responsive Design, E-commerce |
| ai-automation | AI Automation | Intelligent automation solutions that streamline your business processes and unlock new efficiencies. Leverage the power of AI to transform workflows and boost productivity. | Generative AI, Workflow Automation, Process Optimization, AI Integration |
| digital-marketing | Digital Marketing | Data-driven marketing strategies that amplify your brand's reach and drive measurable results. From SEO to social media, we help you connect with your audience effectively. | SEO & SEM, Social Media, Content Strategy, Analytics |
| it-consulting | IT Consulting | Strategic guidance to help your business leverage technology effectively and stay ahead of the curve. Expert advice on infrastructure, security, and digital transformation. | Tech Strategy, Cloud Solutions, Digital Transformation, Security |

### 5.3 Services Page (/services)
- **Label**: "ものづくり - Monozukuri" (swiss-label)
- **Heading**: "Our Services"
- **Subtext**: "We provide a comprehensive suite of digital solutions designed with craftsmanship and elegance. Each service is tailored to elevate your business and deliver exceptional results."
- **Bottom CTA**: "Not sure which service you need?" / "Let's discuss your project and find the perfect solution tailored to your business goals." / "Start a conversation" -> /contact

### 5.4 Web Development Page (/services/web-development)
- **Hero**: "Websites Built to Impress" / "We don't just build websites; we create digital experiences crafted with precision and elegance. From stunning visuals to seamless performance, every detail matters."
- **Features**: Custom Design, Responsive Development, Modern Technology, Performance Optimized
- **SEO Packages**: SEO Starter ($500/mo), SEO Growth ($1,000/mo), SEO Enterprise ($2,000/mo)
- **Development Packages**: Essential ($1,500), Professional ($2,500 - Most Popular), E-Commerce ($3,500), Enterprise (Custom)
- **CTA**: "Ready to Elevate Your Digital Presence?" / "Request a Consultation"

### 5.5 AI Automation Page (/services/ai-automation)
- **Hero**: "AI That Actually Works" / "Transform your business with intelligent automation solutions..."
- **Features**: Generative AI, Intelligent Workflows, AI Agents, Process Optimization
- **Packages**: AI Starter ($500/mo), AI Professional ($1,200/mo - Most Popular), AI Enterprise ($2,500/mo), Custom AI (Custom)
- **Transparency Note**: "Transparent Usage Billing" with 3 items: Real-time Monitoring, Flexible Scaling, No Hidden Costs
- **CTA**: "Ready to Embrace AI?" / "Discuss Your AI Strategy"

### 5.6 Digital Marketing Page (/services/digital-marketing)
- **Hero**: "Amplify Your Brand" / "Engage your audience, build community, and drive growth with our expert digital marketing services."
- **Features**: Platform Management, Content Creation, Strategy & Analytics, Targeted Campaigns
- **Packages**: Starter ($1,000/mo), Professional ($1,800/mo - Most Popular), Growth ($2,800/mo), Enterprise (Custom)
- **CTA**: "Ready to Dominate Digital Marketing?" / "Get Free Consultation"

### 5.7 IT Consulting Page (/services/it-consulting)
- **Hero**: "Strategic IT Guidance" / "Navigate the complexities of technology with expert guidance..."
- **Features**: Strategic IT Planning, Technology Advisory, Process Improvement, Growth & Scalability
- **Packages**: Discovery Session (Free - "Start Here"), Strategic Partnership ($150/session)
- **Value Proposition**: "Why Choose Our IT Consulting?" with: Market Understanding, Practical Solutions, Growth Focused
- **CTA**: "Ready to Unlock Your Tech Potential?" / "Book a Consultation"

### 5.8 Project Data (src/lib/data/projects.ts)

| ID | Name | Subtitle | Description | URL | Image | Featured |
|---|---|---|---|---|---|---|
| mulsons | Mulsons | Spice Manufacturing | A complete digital presence for East Africa's leading spice manufacturer, built for performance and brand storytelling. | mulsons.co.ke | /clients/mulsons.webp | Yes |
| skl | SKL | Packaging Solutions | A modern web platform for an industrial packaging leader, showcasing capabilities and streamlining client engagement. | skl.co.ke | /clients/skl.webp | Yes |
| kova | Kova Collective | Social Commerce Agency | Brand identity and digital experience for a social commerce agency connecting creators with commerce. | mykova.co | /clients/kova.webp | No |
| mandela-barbery | Mandela Barbery | Barbershop | A polished online presence for a premium barbershop, designed to reflect their craft and attention to detail. | mandelabarbery.co.ke | /clients/mandela-barbery.webp | No |
| criss-cross | Criss Cross | FMCG | Digital brand platform for a fast-moving consumer goods company, built for reach and engagement. | crisscross.co.ke | /clients/criss-cross.webp | No |
| ufs | UFS | Freight & Logistics | Corporate web presence for a logistics company, communicating reliability and professional excellence. | linkedin.com/company/ufsltd | /clients/ufs.webp | No |

### 5.9 Team Data (src/lib/data/team.ts)

**Yash Shah** - Co-Founder (slug: yash-shah)
- Bio: 6 paragraphs covering CS background, AI/Blockchain/DeFi interests, tech stack (Python, JS/TS, Java, C/C++), web dev/cybersecurity/networking, UI/UX design passion, sports (padel, F1, tennis, football), psychology/finance reading.
- LinkedIn: linkedin.com/in/yashashah7/

**Nirav Challa** - Co-Founder (slug: nirav-challa)
- Bio: 4 paragraphs covering CS background, AI/web dev/Python expertise, founding story of "Interconnect" (previous name), digital experiences, fitness lifestyle.
- LinkedIn: linkedin.com/in/niravchalla/

**Dhruv Patel** - Technical Director (slug: dhruv-patel)
- Bio: 2 paragraphs covering web dev expertise, scalable architectures, cloud systems, hobbies (movies, gaming, soccer).
- LinkedIn: linkedin.com/in/dhruv-patel-a40ba5222/

### 5.10 Our Work Page (/our-work)
- **Heading**: "Projects we're proud of"
- **Subtext**: "Every project is an opportunity to apply our philosophy of monozukuri -- meticulous craftsmanship meeting modern technology."
- **Bottom CTA**: "Have a project in mind?" / "Let's discuss your project" -> /contact

### 5.11 About Page (/about)
- **Heading**: "Crafting Digital Excellence"
- **Subtext**: "TekZuri draws inspiration from monozukuri (ものづくり) -- the Japanese art of making things with meticulous craftsmanship and attention to detail. We apply this philosophy to every digital experience we create."
- **Team Section Heading**: "Meet the People Behind TekZuri"
- **Team Section Subtext**: "We are a passionate team dedicated to bringing your digital visions to life with craftsmanship and care."

### 5.12 Contact Page (/contact)
- **Heading**: "Contact Us"
- **Subtext**: "We'd love to hear from you. Fill out the form or reach out directly."
- **Form Fields**: First Name, Last Name, Email, Subject (optional), Message (min 10 chars)
- **Contact Info**: Email (business@tekzuri.com), Phone (+254 788 871 946, +44 7586 752 568), Address (London UK, Nairobi Kenya)
- **Social**: Instagram (instagram.com/tekzuri), LinkedIn (linkedin.com/company/tekzuri)

### 5.13 Contact Details (used across site)
- **Email**: business@tekzuri.com
- **Phone Kenya**: +254 788 871 946
- **Phone UK**: +44 7586 752 568
- **Locations**: London, United Kingdom / Nairobi, Kenya
- **Social**: Instagram (@tekzuri), LinkedIn (/company/tekzuri)

---

## 6. Component Architecture

```
src/
  app/
    layout.tsx                      -- Root layout (fonts, JSON-LD, Navbar, Footer, BackgroundAnimation, ScrollProgressBar)
    page.tsx                        -- Homepage (HeroSection, ServicesSection, FeaturedWork, AboutSection, ContactSection)
    globals.css                     -- CSS variables, keyframes, utility classes
    actions.ts                      -- Server action: submitContactForm (Web3Forms API)
    robots.ts                       -- robots.txt generation
    sitemap.ts                      -- sitemap.xml generation
    manifest.ts                     -- PWA manifest
    about/
      page.tsx                      -- About page (TeamSection)
      team/[slug]/page.tsx          -- Dynamic team member bio (generateStaticParams)
    contact/
      page.tsx                      -- Contact page (ContactInfo + ContactForm)
    our-work/
      page.tsx                      -- Portfolio page (ProjectGrid)
    services/
      page.tsx                      -- Services overview (4 service cards)
      loading.tsx                   -- Loading skeleton for service subpages
      web-development/page.tsx      -- Web dev service (features + SEO packages + dev packages)
      ai-automation/page.tsx        -- AI service (features + packages + billing transparency)
      digital-marketing/page.tsx    -- Marketing service (features + packages)
      it-consulting/page.tsx        -- IT consulting (features + packages + value prop)

  components/
    common/
      Navbar.tsx                    -- Sticky nav with logo, desktop links, CTA button, MobileMenu
      MobileMenu.tsx                -- Client: hamburger menu, overlay, slide panel
      Footer.tsx                    -- 4-column footer (brand, quick links, services, contact)
      BackgroundAnimation.tsx       -- Server: 6-layer fixed background (base, glows, dot grid, noise, vignette)
      ScrollProgressBar.tsx         -- Client: scroll progress indicator (top bar)
      SectionDivider.tsx            -- Client: animated gradient divider line
      CurrentYear.tsx               -- Client: dynamic year display (suppressHydrationWarning)

    home/
      HeroSection.tsx               -- Client: 2-col layout (text + orbital visual)
      HeroContent.tsx               -- Client: StaggerReveal, RevealItem, AccentLine (Framer Motion)
      HeroVisual.tsx                -- Client: 3-ring orbital system with glow nodes
      WordCarousel.tsx              -- Client: AnimatePresence word rotation
      ServicesSection.tsx           -- Server: services grid with ScrollReveal + dynamic ServiceCard3D
      ServiceCard3D.tsx             -- Client: 3D tilt card with glare effect (Framer Motion)
      ScrollReveal.tsx              -- Client: Intersection Observer + Framer Motion reveal
      FeaturedWork.tsx              -- Server: featured projects header + FeaturedWorkGrid
      FeaturedWorkCard.tsx          -- Client: project card with Image, hover scale, overlay
      FeaturedWorkGrid.tsx          -- Client: grid wrapper with ScrollReveal per card
      AboutSection.tsx              -- Server: enso visual + content + values grid
      ContactSection.tsx            -- Server: CTA with green "available" badge, trust indicators

    about/
      TeamSection.tsx               -- Server: team member grid
      TeamMemberCard.tsx            -- Server: square card with initials avatar, "View Bio" button
      TeamMemberBio.tsx             -- Server: full bio display with LinkedIn CTA
      OtherTeamMembers.tsx          -- Server: horizontal list of other team members

    contact/
      ContactForm.tsx               -- Client: react-hook-form + zod, Web3Forms submission
      ContactInfo.tsx               -- Server: contact cards (email, phone, address, socials)

    our-work/
      ProjectGrid.tsx               -- Server: 3-column grid with contentVisibility optimization
      ProjectCard.tsx               -- Server: card with Image, subtitle, description, "Visit Site" link

    ui/
      FormField.tsx                 -- Server: reusable input/textarea with error display

  lib/
    data/
      services.ts                   -- Services array (4 items, readonly)
      projects.ts                   -- Projects array (6 items) + getFeaturedProjects, getAllProjects
      team.ts                       -- Team array (3 members) + getTeamMemberBySlug, getAllTeamSlugs
    validations.ts                  -- Zod schema for contact form
```

### Client vs Server Component Split
- **Client ("use client")**: MobileMenu, ScrollProgressBar, SectionDivider, CurrentYear, HeroSection, HeroContent, HeroVisual, WordCarousel, ServiceCard3D, ScrollReveal, FeaturedWorkCard, FeaturedWorkGrid, ContactForm
- **Server (default)**: Navbar, Footer, BackgroundAnimation, ServicesSection, FeaturedWork, AboutSection, ContactSection, TeamSection, TeamMemberCard, TeamMemberBio, OtherTeamMembers, ContactInfo, ProjectGrid, ProjectCard, FormField, all page.tsx files

---

## 7. Route Map

| Route | Page File | Metadata Title | Description |
|---|---|---|---|
| `/` | `src/app/page.tsx` | "TekZuri \| Work with Elegance" | Homepage with 5 sections |
| `/services` | `src/app/services/page.tsx` | "Services - TekZuri" | Services overview grid |
| `/services/web-development` | `src/app/services/web-development/page.tsx` | "Web Development - TekZuri" | Features + SEO + Dev packages |
| `/services/ai-automation` | `src/app/services/ai-automation/page.tsx` | "AI Automation - TekZuri" | Features + AI packages |
| `/services/digital-marketing` | `src/app/services/digital-marketing/page.tsx` | "Digital Marketing - TekZuri" | Features + Marketing packages |
| `/services/it-consulting` | `src/app/services/it-consulting/page.tsx` | "IT Consulting - TekZuri" | Features + Consulting packages |
| `/our-work` | `src/app/our-work/page.tsx` | "Our Work" | Project portfolio grid |
| `/about` | `src/app/about/page.tsx` | "About Us" | Team overview |
| `/about/team/[slug]` | `src/app/about/team/[slug]/page.tsx` | "[Name] - [Title]" | Dynamic team bios |
| `/contact` | `src/app/contact/page.tsx` | "Contact Us" | Contact form + info |

### Dynamic Routes
- `/about/team/[slug]` -- statically generated via `generateStaticParams()` from `getAllTeamSlugs()`
  - `/about/team/yash-shah`
  - `/about/team/nirav-challa`
  - `/about/team/dhruv-patel`

### SEO Files
- `robots.ts` -- allows all, disallows /api/ and /_next/, sitemap URL
- `sitemap.ts` -- static pages + dynamic team pages
- `manifest.ts` -- PWA manifest (standalone, #050508 theme)

---

## 8. Animation & Motion

### CSS Keyframes (globals.css)

| Keyframe | Duration | Effect | Used By |
|---|---|---|---|
| `fade-in-up` | 0.6s ease-out | Translate Y 20px -> 0, opacity 0 -> 1 | `.animate-fade-in-up` (ProjectCard) |
| `enso-drift` | 120s linear infinite | 360deg rotation | `.animate-enso-drift` (AboutSection enso circle) |
| `glow-pulse` | 8s ease-in-out infinite | Opacity 0.04 -> 0.08 | `.animate-glow-pulse` (AboutSection ambient glow) |
| `orbit-rotate` | 20s/55s linear infinite | rotateX(70deg) rotateZ 0->360 | HeroVisual rings 1 & 3 |
| `orbit-rotate-reverse` | 35s linear infinite | rotateX(70deg) rotateZ 360->0 | HeroVisual ring 2 |
| `center-glow-pulse` | 4s ease-in-out infinite | Scale 1->1.15, opacity 0.6->1 | HeroVisual center node |
| `pulse-dot` | 2s ease-in-out infinite | Scale 1->1.5, opacity 1->0.5 | ContactSection "available" dot |

### CSS Interaction Classes

| Class | Effect |
|---|---|
| `.hover-lift` | translateY(-4px) scale(1.005) on hover |
| `.card-3d` | shadow transition + translateY(-4px) scale(1.005) on hover |
| `.animate-blob` | Disabled (`animation: none`) |
| `.animation-delay-2000` / `.animation-delay-4000` | Disabled (0s) |
| `.matrix-column` | Hidden (`display: none`) |

### Framer Motion Animations

| Component | Animation Type | Details |
|---|---|---|
| StaggerReveal (HeroContent) | Stagger entrance | Children stagger 0.15s, delay 0.1s, spring damping 30 |
| RevealItem (HeroContent) | Fade + translate + blur | opacity 0->1, y 20->0, blur 6px->0 |
| AccentLine (HeroContent) | Width reveal | width 0 -> 2rem |
| WordCarousel | AnimatePresence word swap | 3s interval, blur 8px, scale 0.95, y +/-20px |
| ScrollReveal | Scroll-triggered reveal | InView + spring transition, opacity/y/blur |
| ServiceCard3D | 3D tilt + glare | Mouse tracking, rotateX/Y max 5deg, radial glare overlay |
| FeaturedWorkCard | Hover scale | scale 1.03, spring stiffness 300 |
| SectionDivider | Fade in on scroll | opacity 0->1, viewport once |

### Reduced Motion Support
- All Framer Motion components check `useReducedMotion()` and render static fallbacks
- CSS: `@media (prefers-reduced-motion: reduce)` disables all CSS animations
  - `.animate-fade-in-up`: none, opacity 1
  - `.hover-lift:hover`: transform none
  - `.card-3d:hover`: transform none
  - `.animate-enso-drift`: none
  - `.animate-glow-pulse`: none, opacity 0.06
  - `.hero-orbital *`: animation none !important

### Background Animation (BackgroundAnimation.tsx)
6 fixed layers (server component, no JS):
1. True-black base (`#050508`)
2. Ambient glow (top-center, white 3%)
3. Secondary glow (center-wide, white 1.5%)
4. Dot grid pattern (24px spacing, white 7%)
5. Noise texture (SVG feTurbulence, 3.5% opacity)
6. Vignette overlay

---

## 9. UX Assessment

### Navigation Flow
- **Navbar**: Sticky top, 3 links (Services, Work, About) + Contact CTA button
- **Mobile**: Hamburger -> slide-down panel with links + "Get Started" CTA
- **Footer**: 4-column layout with Quick Links, Services, Contact details
- **Cross-linking**: Strong -- homepage sections link to subpages, services page links to individual service pages, about page links to team bios, multiple CTAs to /contact throughout
- **Back navigation**: Team member bio has "Back to About" link

### Information Architecture
- **Hierarchy**: Clear -- Home (overview) -> Services (4 categories) -> Individual Service (details + pricing) -> Contact
- **Content Organization**: Logical flow from awareness (hero) to services to social proof (work) to trust (about) to conversion (contact)
- **Concern**: Service individual pages contain pricing information inline -- this is content-heavy with no shared pricing component, leading to significant code duplication

### CTA Placement
- **Primary CTA style**: White pill button with arrow icon on dark background
- **Secondary CTA style**: Ghost/outline pill button
- **Placement**: Every section ends with a CTA, every page has a final CTA card
- **Effectiveness**: Good frequency but repetitive styling -- every CTA looks identical

### Mobile Experience
- **Responsive**: Mobile-first Tailwind approach with `md:` and `lg:` breakpoints
- **Hero Visual**: Hidden on mobile (`hidden md:flex`)
- **Grid layouts**: Collapse properly (1-col mobile, 2-col tablet, 3-4 col desktop)
- **Touch targets**: Good sizing with py-3 / py-3.5 buttons
- **Menu**: Proper overflow handling, body scroll lock

### Form Handling
- **Library**: react-hook-form with zodResolver
- **Validation**: onBlur mode, Zod schema (firstName required, lastName required, email required+format, subject optional, message min 10 chars)
- **Submission**: Server action -> Web3Forms API
- **States**: idle, submitting (spinner), success (green alert), error (red alert)
- **Accessibility**: aria-invalid, aria-describedby for errors, proper labels
- **Timeout**: Success message auto-dismisses after 5s

---

## 10. Technical Debt & Issues

### Code Duplication
1. **Service subpages** (`web-development`, `ai-automation`, `digital-marketing`, `it-consulting`): All follow identical patterns (hero + features + pricing + CTA) with hardcoded data. Should extract shared `ServiceLayout` and `PricingGrid` components.
2. **Pricing card pattern**: Duplicated across all 4 service pages with minor variations. Each page has its own local `packages` array.
3. **Arrow icon SVG**: The same right-arrow SVG (`M17 8l4 4m0 0l-4 4m4-4H3`) is repeated ~20+ times inline. Should be a reusable component.
4. **Focus-visible ring pattern**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]` repeated on every interactive element.

### Hardcoded Values
5. **Colors**: Many components use hardcoded hex values (`#111116`, `#e8e8ed`, `#94949e`, `#050508`) instead of CSS variables or Tailwind tokens. This makes theming impossible.
6. **Border styles**: `border-[rgba(255,255,255,0.06)]` and `border-[rgba(255,255,255,0.16)]` are hardcoded in dozens of places instead of using `border-subtle`/`border-default`/`border-strong` variables.
7. **Shadow values**: While CSS variables exist (`--shadow-card`, `--shadow-button`), some components use inline shadow strings (TeamMemberBio, OtherTeamMembers).

### Unused/Disabled Code
8. `.animate-blob`: CSS class exists but animation is set to `none`
9. `.animation-delay-2000` / `.animation-delay-4000`: Exist but set to `0s`
10. `.matrix-column`: Exists but `display: none`
11. Footer social icons: SVG icons are defined in `footerLinks.social` but the render uses `{social.label}` text instead of `{social.icon}`

### Accessibility Issues
12. **No skip-to-content link**: Missing for keyboard navigation
13. **Heading hierarchy**: Some pages skip levels (h1 -> h3 in some sections)
14. **Color contrast**: `#5c5c68` text on `#050508` background may not meet WCAG AA for small text (contrast ratio ~3.2:1, need 4.5:1)
15. **Color contrast**: `#94949e` on `#050508` may be borderline for small text (~4.8:1)
16. **No 404 page**: Missing `not-found.tsx` for custom 404 experience
17. **Link vs button**: Some `<a>` tags with `cursor-pointer` are used where `<Link>` would be more appropriate
18. **Team member images**: No actual photos -- only initials avatars. This is a content gap.

### Performance Concerns
19. **Large service pages**: Each service subpage is ~250-400 lines of JSX with no code splitting beyond the page level
20. **No image optimization hints**: Project images don't use `priority` except the logo
21. **Footer logo**: `width={200} height={200}` may be loading a larger image than needed
22. **`contentVisibility: "auto"`**: Used correctly in ProjectGrid for viewport optimization

### SEO Gaps
23. **Service subpages missing from sitemap**: `sitemap.ts` doesn't include `/services/web-development`, `/services/ai-automation`, etc.
24. **Inconsistent title format**: Some pages use "Title - TekZuri" and others use "Title | TekZuri"
25. **Missing OG images per page**: All pages share the same `/og-image.png`
26. **No individual service pages in sitemap**

### Legacy References
27. **"Interconnect" mentioned**: Team member Nirav's bio references "Interconnect" (previous company name) -- should be updated to "TekZuri"
28. **Footer services links**: Points to `/services#web-development` and `/services#mobile-solutions` -- mobile-solutions doesn't exist as a service
29. **Legacy CSS variables**: `--background`, `--muted`, `--muted-light`, `--accent`, `--dark-bg`, `--dark-bg-light` are marked as "legacy compat aliases"

### Missing Features
30. **No error boundaries**: No `error.tsx` files for graceful error handling
31. **No loading states**: Only `services/loading.tsx` exists -- other routes have no loading skeletons
32. **No not-found page**: No custom `not-found.tsx`

---

## 11. SEO Audit

### Structured Data (JSON-LD)
- **Organization schema**: Present in root layout
  - name, url, logo, image, description, contactPoint, knowsAbout
  - `sameAs: []` -- empty, should include social links
- **WebSite schema**: Present in root layout (name, url only)
- **No LocalBusiness schema**: Given they have physical locations, this would be beneficial
- **No Service schema**: Individual service pages lack structured data

### Meta Tags
- **Root layout**: Full metadata with title template, description, keywords, authors, robots, icons, manifest, OG, Twitter
- **Per-page metadata**: All pages export `metadata` objects with title, description, OG, Twitter, canonical
- **Canonical URLs**: Present on all pages
- **Viewport**: Properly set with theme-color

### Sitemap
- Includes: /, /services, /our-work, /about, /contact, /about/team/[slug]
- **Missing**: /services/web-development, /services/ai-automation, /services/digital-marketing, /services/it-consulting

### Robots.txt
- Allows all crawlers
- Disallows /api/ and /_next/
- Links to sitemap

### PWA Manifest
- name: "TekZuri"
- display: standalone
- theme_color: #050508
- Icons: 192x192 and 512x512 (any + maskable)

### Image SEO
- All project images use `alt` text (project name)
- Logo has `alt="TekZuri"`
- OG image present but shared across all pages

### Areas for Improvement
1. Add service subpages to sitemap
2. Populate `sameAs` in Organization schema with social links
3. Add LocalBusiness schema for London and Nairobi offices
4. Add Service schemas to individual service pages
5. Create unique OG images per page
6. Standardize title separator format (| vs -)
7. Add `hreflang` if targeting multiple regions
8. Consider FAQ schema for service pages (pricing questions)

---

## Public Assets

```
public/
  clients/
    mulsons.webp
    skl.webp
    kova.webp
    mandela-barbery.webp
    criss-cross.webp
    ufs.webp
  icons/
    android-chrome-192x192.png
    android-chrome-512x512.png
  logo.png
  tekzuri-logo.webp
  og-image.png
  og-image.svg
  og-image.html
  llms.txt
  TekZuri-Business-Profile.pdf
```

**Note**: `favicon.ico`, `icon.svg`, and `apple-icon.png` are referenced in metadata but NOT present in the public directory. This is a bug or they are generated by Next.js.

---

*Report generated by Explore Agent - covers every file in the codebase as of February 2026.*

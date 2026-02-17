# TekZuri Improvement Plan

## Overview

This plan modernizes the TekZuri codebase by consolidating hardcoded values into design tokens, extracting duplicated patterns into reusable components, fixing accessibility and SEO gaps, adding missing error/loading states, and refining the UX with purposeful motion and improved spatial composition. All changes preserve existing content, routes, and the monochromatic dark palette verbatim.

Reference: `design-tokens.json` is the single source of truth for every color, spacing, typography, and motion value.

---

## 1. Architecture Improvements

### 1.1 Shared ServiceLayout Component

**Problem**: The 4 service subpages (`web-development`, `ai-automation`, `digital-marketing`, `it-consulting`) follow identical hero+features+pricing+CTA patterns with 250-400 lines of hardcoded JSX each.

**Solution**: Create `src/components/services/ServiceLayout.tsx` that accepts a typed data object.

**Data structure** (new file `src/lib/data/service-pages.ts`):

```typescript
export interface ServiceFeature {
  title: string;
  description: string;
  number?: string; // Optional — auto-generated from index if absent
}

export interface PricingPackage {
  name: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  benefits?: string[]; // IT consulting has this
}

export interface PricingSection {
  heading: string;
  subtext: string;
  packages: PricingPackage[];
  footnote?: string; // e.g. "All SEO packages include monthly reporting..."
  gridCols?: 2 | 3 | 4; // Default 4; IT consulting uses 2
}

export interface TransparencyItem {
  number: string;
  title: string;
  description: string;
}

export interface ValuePropItem {
  number: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  metadata: { title: string; description: string };
  hero: {
    heading: string;
    subtext: string;
    ctaText: string;
  };
  features: {
    heading: string;
    items: ServiceFeature[];
    backgroundVariant?: 'deep' | 'base'; // Controls bg color alternation
    numberStyle?: 'decorative' | 'badge'; // web-dev uses decorative, others use badge
  };
  pricingSections: PricingSection[]; // Web dev has 2 (SEO + Dev), others have 1
  transparency?: {
    heading: string;
    subtext: string;
    items: TransparencyItem[];
  };
  valueProp?: {
    heading: string;
    subtext: string;
    items: ValuePropItem[];
  };
  cta: {
    heading: string;
    subtext: string;
    ctaText: string;
    backgroundVariant?: 'deep' | 'base';
  };
}
```

**ServiceLayout components to extract**:

| Component | File | Purpose |
|---|---|---|
| `ServiceLayout` | `src/components/services/ServiceLayout.tsx` | Full page shell: Hero + Features + Pricing sections + CTA |
| `ServiceHero` | `src/components/services/ServiceHero.tsx` | Centered h1, description, primary CTA button |
| `FeatureGrid` | `src/components/services/FeatureGrid.tsx` | 4-column grid of feature cards with number indicators |
| `PricingGrid` | `src/components/services/PricingGrid.tsx` | Pricing card grid (2, 3, or 4 columns) |
| `PricingCard` | `src/components/services/PricingCard.tsx` | Individual pricing card (popular badge, features list, CTA) |
| `ServiceCTA` | `src/components/services/ServiceCTA.tsx` | Bottom CTA card |
| `TransparencySection` | `src/components/services/TransparencySection.tsx` | AI automation's "Transparent Usage Billing" |
| `ValuePropSection` | `src/components/services/ValuePropSection.tsx` | IT consulting's "Why Choose" section |

**Each service page.tsx becomes ~30 lines**: just imports the data and renders `<ServiceLayout data={webDevelopmentData} />`.

**Data files**: Move all content arrays from inline page definitions to `src/lib/data/service-pages.ts` with one export per service: `webDevelopmentPage`, `aiAutomationPage`, `digitalMarketingPage`, `itConsultingPage`. This keeps content centralized alongside existing data files.

### 1.2 Reusable Components

| Component | File | Replaces |
|---|---|---|
| `ArrowIcon` | `src/components/ui/ArrowIcon.tsx` | ~20+ inline SVG instances of the right-arrow (`M17 8l4 4m0 0l-4 4m4-4H3`) |
| `DiagonalArrowIcon` | `src/components/ui/DiagonalArrowIcon.tsx` | The diagonal arrow (`M7 17L17 7M17 7H7M17 7v10`) in ServicesSection |
| `PrimaryButton` | `src/components/ui/PrimaryButton.tsx` | Repeated pattern: white bg, dark text, rounded-full, shadow-button, arrow icon, focus ring |
| `SecondaryButton` | `src/components/ui/SecondaryButton.tsx` | Ghost/outline button pattern with border hover states |
| `DecorativeNumber` | `src/components/ui/DecorativeNumber.tsx` | The `01`/`02` styled numbers used across service pages, about section, values |
| `SectionHeader` | `src/components/ui/SectionHeader.tsx` | Repeated heading + subtext + optional swiss-label pattern |

**ArrowIcon implementation**:
```tsx
interface ArrowIconProps {
  className?: string;
  variant?: 'right' | 'diagonal';
}

export function ArrowIcon({ className = "w-5 h-5", variant = "right" }: ArrowIconProps) {
  const d = variant === 'right'
    ? "M17 8l4 4m0 0l-4 4m4-4H3"
    : "M7 17L17 7M17 7H7M17 7v10";
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}
```

**PrimaryButton implementation** (handles both `<Link>` and `<a>` via polymorphic `as` prop or `href` detection):
```tsx
// Consolidates: bg-white text-bg-deep rounded-full font-medium shadow-button focus-visible ring pattern
// Props: children, href, className, showArrow (default true)
```

### 1.3 CSS Variable Consolidation

**Problem**: ~40+ instances of hardcoded hex values in component className strings and inline styles.

**Action**: Replace ALL hardcoded values with Tailwind utilities that reference CSS variables.

**Mapping table for search-and-replace**:

| Hardcoded Value | Replace With (Tailwind class) |
|---|---|
| `text-[#e8e8ed]` | `text-foreground` |
| `text-[#94949e]` | `text-fg-secondary` |
| `text-[#5c5c68]` | `text-fg-tertiary` |
| `text-[#8a8a95]` | `text-fg-secondary` (closest match; or add `--fg-feature-number: #8a8a95` to tokens) |
| `text-[#050508]` | `text-bg-deep` |
| `bg-[#050508]` | `bg-bg-deep` |
| `bg-[#0a0a0f]` | `bg-bg-base` |
| `bg-[#111116]` | `bg-bg-elevated` |
| `bg-[#18181f]` | `bg-bg-elevated-2` |
| `bg-[#1f1f28]` | `bg-bg-surface` |
| `hover:bg-[#18181f]` | `hover:bg-bg-elevated-2` |
| `border-[rgba(255,255,255,0.06)]` | `border-[var(--border-card)]` (add new variable, or use nearest: `border-subtle`) |
| `border-[rgba(255,255,255,0.07)]` | `border-[var(--border-subtle)]` |
| `border-[rgba(255,255,255,0.10)]` | `border-[var(--border-default)]` |
| `border-[rgba(255,255,255,0.16)]` | `border-[var(--border-strong)]` |
| `border-[rgba(255,255,255,0.24)]` | `border-[var(--border-hover)]` |
| `ring-offset-[#050508]` | `ring-offset-bg-deep` |

**New CSS variables to add** (to rationalize the 0.06 vs 0.07 border inconsistency):

```css
:root {
  /* Consolidate card border (0.06 and 0.07 are visually identical — use 0.07) */
  --border-card: rgba(255, 255, 255, 0.07);

  /* Feature number color used in AI/Marketing/Consulting pages */
  --fg-feature-number: #8a8a95;
}
```

**Add to `@theme inline`**:
```css
--color-border-subtle: var(--border-subtle);
--color-border-default: var(--border-default);
--color-border-strong: var(--border-strong);
--color-border-hover: var(--border-hover);
--color-border-card: var(--border-card);
--color-fg-feature-number: var(--fg-feature-number);
```

This enables: `border-border-card`, `text-fg-feature-number`, etc. in Tailwind.

### 1.4 Focus Ring Utility

**Problem**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]` is repeated on every single interactive element (~30+ instances).

**Solution**: Add a utility class in globals.css:

```css
.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep;
}
```

Replace all instances with the single class `focus-ring`. Keep the `rounded-sm` or `rounded-full` on each element as it varies.

### 1.5 Clean Up Unused Code

**Remove entirely from globals.css**:
- `.animate-blob { animation: none; }` — disabled, never used
- `.animation-delay-2000 { animation-delay: 0s; }` — disabled, never used
- `.animation-delay-4000 { animation-delay: 0s; }` — disabled, never used
- `.matrix-column { display: none; }` — disabled, never used

**Remove legacy CSS variable aliases** (after confirming no references remain):
- `--background` (use `--bg-deep`)
- `--muted` (use `--fg-secondary`)
- `--muted-light` (use `--foreground`)
- `--dark-bg` (use `--bg-deep`)
- `--dark-bg-light` (use `--bg-base`)

**Note**: Remove the legacy aliases only AFTER updating all Tailwind `@theme inline` mappings and component references. The `text-muted` utility (used ~20 places) must be remapped to `text-fg-secondary`.

### 1.6 File Structure

Keep the current directory structure — it is clean and well-organized. Add:

```
src/components/services/       # NEW — extracted service page components
  ServiceLayout.tsx
  ServiceHero.tsx
  FeatureGrid.tsx
  PricingGrid.tsx
  PricingCard.tsx
  ServiceCTA.tsx
  TransparencySection.tsx
  ValuePropSection.tsx
src/components/ui/             # EXTEND — add reusable primitives
  ArrowIcon.tsx
  PrimaryButton.tsx
  SecondaryButton.tsx
  DecorativeNumber.tsx
  SectionHeader.tsx
src/lib/data/
  service-pages.ts             # NEW — all service page content data
```

---

## 2. UX Improvements

### 2.1 Navigation

**Navbar**:
- No structural changes needed — current sticky nav with blur is well-implemented.
- Replace hardcoded colors with CSS variable utilities (see 1.3).
- The mobile menu `MobileMenu.tsx` is solid; just consolidate its hardcoded colors.

**Footer links** (Bug fix):
- Change `footerLinks.services` to link to actual service subpages:
  ```typescript
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "IT Consulting", href: "/services/it-consulting" },
  ],
  ```
- This fixes the broken `/services#mobile-solutions` link and `#web-development` hash links.

**Footer social icons** (Bug fix):
- Currently renders `{social.label}` (text) instead of `{social.icon}` (SVG).
- Change to render the actual SVG icons that are already defined in the `footerLinks.social` array.

**Footer logo sizing**:
- Change `width={200} height={200}` to more appropriate dimensions (e.g., `width={120} height={40}`) to avoid loading an oversized image.

### 2.2 Information Hierarchy

- The current content flow is strong: Hero -> Services -> Work -> About -> Contact.
- No changes to page-level hierarchy.
- Fix heading level skips noted in service subpages (ensure sequential h1->h2->h3->h4, no gaps).

### 2.3 Motion Design

**Preserve existing animations** — they are well-crafted:
- Framer Motion: StaggerReveal, ScrollReveal, WordCarousel, ServiceCard3D, FeaturedWorkCard hover
- CSS: orbital rings, enso drift, glow pulse, center glow, pulse dot, hover-lift, card-3d

**Enhance (optional, low priority)**:
- Add scroll-triggered fade-in to service subpage sections (currently instant render, no motion). Wrap service layout sections in `ScrollReveal` for consistency with homepage.
- Add subtle entrance animation to the `/services` page cards (currently uses `animationDelay` but no actual animation class is triggered — the fade-in-up class is not applied).
- Consider adding smooth page transition using Framer Motion's `AnimatePresence` in `layout.tsx` — but only if performance impact is minimal.

**Remove**: The unused animation CSS classes listed in 1.5.

### 2.4 Responsive Improvements

- The current responsive behavior is solid with mobile-first Tailwind breakpoints.
- Hero visual is correctly hidden on mobile (`hidden md:flex`).
- Grid layouts collapse properly.
- No major responsive changes needed.

### 2.5 Form UX

- Current contact form implementation with react-hook-form + zod is well-done.
- Success/error states, validation modes, and auto-dismiss are all properly handled.
- No changes needed.

### 2.6 Micro-interactions

**Preserve existing**:
- `card-3d` hover lift with shadow transition
- `hover-lift` translateY + scale
- `group-hover:translate-x-1` on arrow icons
- `active:scale-[0.98]` on buttons
- 3D tilt + glare on ServiceCard3D

**Already solid** — no additional micro-interactions needed.

### 2.7 Visual Depth

**Preserve existing atmospheric effects**:
- BackgroundAnimation 6-layer system (base, glows, dot grid, noise, vignette)
- Card shadows with inset highlight and multi-layer drop shadow
- Radial gradient glare overlays on 3D cards
- Ambient glow pulses

**No changes needed** — the layered background system is well-implemented and creates strong visual depth.

---

## 3. Accessibility Fixes

### 3.1 Skip-to-Content Link

Add a skip-to-content link as the first focusable element in `layout.tsx`:

```tsx
<body>
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-bg-deep focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
  >
    Skip to content
  </a>
  {/* ... */}
  <main id="main-content" className="flex-1">{children}</main>
</body>
```

### 3.2 Color Contrast Fixes

**Problem**: `#5c5c68` on `#050508` has ~3.2:1 contrast ratio (fails WCAG AA for normal text, which requires 4.5:1).

**Solution**: Bump `--fg-tertiary` from `#5c5c68` to `#76768a`.

Contrast check: `#76768a` on `#050508` = ~4.6:1 (passes WCAG AA for normal text).

**Update in globals.css**:
```css
--fg-tertiary: #76768a; /* Was #5c5c68, bumped for WCAG AA compliance */
```

**Impact**: This affects the swiss-label color, footer links, trust indicator pills, feature list dashes, scrollbar thumb, and the "ものづくり" text in AboutSection.

**Also update design-tokens.json** to reflect the new value.

**Secondary concern**: `#94949e` on `#050508` has ~4.8:1 contrast ratio — this passes WCAG AA at normal text size, but is borderline. No change needed but worth noting.

### 3.3 Heading Hierarchy

Audit each page and ensure sequential heading levels:
- Homepage: h1 (Hero) -> h2 (Services, Featured Work, About, Contact) -> h3 (card titles) -> h4 (value items) -- currently correct.
- Service subpages: h1 (Hero) -> h2 (Features, Pricing, CTA) -> h3 (card titles) -> h4 (sub-items) -- verify no skips. The IT consulting page has h4 elements ("What You Get", "Key Benefits") that should be verified.

### 3.4 ARIA Improvements

- Add `role="navigation"` label to the mobile menu overlay (already has `role="presentation"` correctly).
- Ensure all icon-only links/buttons have `aria-label` attributes (most already do).
- Verify `aria-hidden="true"` on all decorative SVGs and visual elements (mostly done, verify in refactored components).

### 3.5 Keyboard Navigation

- Already well-implemented with focus-visible rings on all interactive elements.
- The skip-to-content link (3.1) completes keyboard nav needs.
- Tab order is natural (follows DOM order) — no changes needed.

---

## 4. SEO Fixes

### 4.1 Add Service Subpages to Sitemap

Update `src/app/sitemap.ts`:

```typescript
const servicePages: MetadataRoute.Sitemap = [
  'web-development',
  'ai-automation',
  'digital-marketing',
  'it-consulting',
].map((slug) => ({
  url: `${SITE_URL}/services/${slug}`,
  lastModified: currentDate,
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));

return [...staticPages, ...servicePages, ...teamPages];
```

### 4.2 Populate sameAs in Organization Schema

Update `layout.tsx` Organization JSON-LD:

```typescript
sameAs: [
  "https://instagram.com/tekzuri",
  "https://linkedin.com/company/tekzuri",
],
```

### 4.3 Standardize Title Separator

Currently mixed: some pages use `"Title - TekZuri"` (service subpages) and others use the template `"%s | TekZuri"`.

**Fix**: Update all service subpage metadata to use the template format:
```typescript
// Instead of: title: 'Web Development - TekZuri'
// Use: title: 'Web Development'
// The layout template "%s | TekZuri" will produce "Web Development | TekZuri"
```

Similarly for:
- `Services - TekZuri` -> `Services` (becomes `Services | TekZuri`)
- `AI Automation - TekZuri` -> `AI Automation`
- `Digital Marketing - TekZuri` -> `Digital Marketing`
- `IT Consulting - TekZuri` -> `IT Consulting`

### 4.4 Add Service JSON-LD Schemas

Add Service schema to each service subpage via the ServiceLayout component:

```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: data.hero.heading,
  description: data.metadata.description,
  provider: {
    "@type": "Organization",
    name: "TekZuri",
    url: "https://tekzuri.com",
  },
  url: `https://tekzuri.com/services/${data.slug}`,
};
```

### 4.5 No LocalBusiness Schema (Intentional Skip)

TekZuri operates as a remote agency, not a storefront. Adding LocalBusiness schema would be misleading. Skip this.

---

## 5. Bug Fixes

### 5.1 Fix "Interconnect" References in Team Bios

**File**: `src/lib/data/team.ts`

**Nirav's bio** (id: 2):
- Paragraph 1: `"the co-founder of Interconnect"` -> `"the co-founder of TekZuri"`
- Paragraph 2: `"That question became the foundation of Interconnect a company"` -> `"That question became the foundation of TekZuri a company"`
- Paragraph 3: `"At Interconnect, we don't just create websites"` -> `"At TekZuri, we don't just create websites"`

**Dhruv's bio** (id: 3):
- Paragraph 1: `"guides Interconnect's technical direction"` -> `"guides TekZuri's technical direction"`
- Paragraph 2: `"leadership at Interconnect"` -> `"leadership at TekZuri"`

### 5.2 Fix Broken Footer Links

**File**: `src/components/common/Footer.tsx`

Replace the `footerLinks.services` array:
```typescript
services: [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Consulting", href: "/services/it-consulting" },
],
```

### 5.3 Fix Footer Social Icons

**File**: `src/components/common/Footer.tsx`

Change from:
```tsx
{social.label}
```
To:
```tsx
{social.icon}
```

The SVG icons are already defined in the `footerLinks.social` array. Also keep the `aria-label` attribute that already exists on the `<a>` tag.

### 5.4 Favicon Files

The metadata references `favicon.ico`, `icon.svg`, and `apple-icon.png` but they may not exist in the public directory. Verify they exist. If not, either:
- Generate them from the existing `logo.png` or `tekzuri-logo.webp`
- Or remove the references from metadata

This is a content/asset issue, not a code issue. Flag for the team to provide assets.

---

## 6. Missing Features

### 6.1 Custom 404 Page

**Create**: `src/app/not-found.tsx`

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="text-[5rem] font-light text-white/10 block mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          404
        </span>
        <h1 className="text-3xl font-medium text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Page not found
        </h1>
        <p className="text-fg-secondary mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
```

### 6.2 Error Boundaries

**Create**: `src/app/error.tsx` (root-level client error boundary)

```tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-medium text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Something went wrong
        </h1>
        <p className="text-fg-secondary mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-bg-deep rounded-full font-medium hover:bg-white/90 transition-all duration-200 cursor-pointer focus-ring"
          style={{ boxShadow: 'var(--shadow-button)' }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```

### 6.3 Loading States

**Create loading skeletons for routes that lack them**:

- `src/app/loading.tsx` (root loading — shown on initial navigation)
- `src/app/our-work/loading.tsx`
- `src/app/about/loading.tsx`
- `src/app/about/team/[slug]/loading.tsx`
- `src/app/contact/loading.tsx`

Each should render a minimal skeleton matching the page layout with pulsing placeholder blocks using `animate-pulse` and `bg-bg-elevated` blocks.

The existing `src/app/services/loading.tsx` should be preserved.

### 6.4 Skip-to-Content Link

See Section 3.1 above.

---

## 7. Content Preservation

### ALL content below MUST be preserved verbatim (no rewording, no omissions):

**Homepage**:
- Hero headline: "Build with [Elegance / Precision / Excellence / Mastery]"
- Hero subheadline: "Inspired by the Japanese philosophy of monozukuri, we craft digital solutions with meticulous attention to detail and timeless quality."
- Hero CTAs: "Start Your Project", "Explore Services"
- Services heading: "Services that drive results"
- Services subtext: "We combine technical expertise with creative thinking to deliver solutions that exceed expectations."
- Services bottom CTA: "Let's discuss your project"
- Featured Work heading: "Featured work"
- Featured Work subtext: "A curated look at recent work that reflects our commitment to craft."
- Featured Work CTA: "View all projects"
- About visual: "TekZuri" / "Tech + Monozukuri" / "ものづくり"
- About heading: "The art of making things"
- About content: All 3 paragraphs about monozukuri
- About values: 01 Quality First / 02 Attention to Detail / 03 Client Partnership / 04 Innovation (with descriptions)
- About CTA: "Learn more about us"
- Contact badge: "Available for new projects"
- Contact heading: "Ready to build something elegant?"
- Contact subtext: "Let's discuss how we can help bring your vision to life with craftsmanship, care, and cutting-edge technology."
- Contact CTAs: "Get in Touch", "business@tekzuri.com"
- Trust indicators: "Trusted by businesses across industries" + Mulsons, SKL, Kova Collective, Criss Cross

**Services page** (/services):
- Swiss label: "ものづくり - Monozukuri"
- Heading: "Our Services"
- Subtext (full paragraph)
- All 4 service cards with names + descriptions
- Bottom CTA: "Not sure which service you need?" + subtext + "Start a conversation"

**All 4 service subpages**: Every heading, description, feature title/description, package name/price/currency/description/features/ctaText, transparency items, value proposition items, CTA headings/subtext/button text. All pricing amounts preserved exactly.

**Our Work page**: Heading, subtext, all 6 project entries (name, subtitle, description, URL, image), bottom CTA.

**About page**: Heading, subtext, team section heading/subtext, all 3 team members.

**Team member bio pages**: All bio paragraphs for all 3 members (EXCEPT Interconnect -> TekZuri fix), LinkedIn URLs.

**Contact page**: Heading, subtext, form fields (First Name, Last Name, Email, Subject, Message), all contact info (email, phones, addresses, social links).

**Footer**: Brand tagline, all quick links, all service links (updated to correct URLs), contact details (email, phones), social links (LinkedIn, Instagram), copyright text, "Work with Elegance".

**Navbar**: Logo, links (Services, Work, About), Contact button, mobile menu "Get Started" CTA.

### All routes MUST continue to work:
- `/`
- `/services`
- `/services/web-development`
- `/services/ai-automation`
- `/services/digital-marketing`
- `/services/it-consulting`
- `/our-work`
- `/about`
- `/about/team/yash-shah`
- `/about/team/nirav-challa`
- `/about/team/dhruv-patel`
- `/contact`

---

## 8. Migration Steps

Execute in this exact order. Each step should be independently verifiable.

### Step 1: CSS Foundation
1. Add new CSS variables (`--border-card`, `--fg-feature-number`) to `:root` in `globals.css`
2. Add corresponding Tailwind mappings to `@theme inline`
3. Update `--fg-tertiary` from `#5c5c68` to `#76768a` for WCAG compliance
4. Add the `.focus-ring` utility class
5. Remove dead CSS: `.animate-blob`, `.animation-delay-2000`, `.animation-delay-4000`, `.matrix-column`
6. **Verify**: `npm run build` succeeds, no visual regressions

### Step 2: Create Reusable UI Components
1. Create `src/components/ui/ArrowIcon.tsx`
2. Create `src/components/ui/PrimaryButton.tsx`
3. Create `src/components/ui/SecondaryButton.tsx`
4. Create `src/components/ui/DecorativeNumber.tsx`
5. Create `src/components/ui/SectionHeader.tsx`
6. **Verify**: Components render correctly in isolation (no consumers yet)

### Step 3: Consolidate Hardcoded Colors in Common Components
1. Update `Navbar.tsx`: Replace all hardcoded hex → Tailwind CSS variable utilities
2. Update `MobileMenu.tsx`: Same
3. Update `Footer.tsx`: Same + fix social icons (render SVG), fix service links, fix logo size
4. Update `BackgroundAnimation.tsx`: Verify CSS variables already used (likely minimal changes)
5. Update `ScrollProgressBar.tsx`, `SectionDivider.tsx`, `CurrentYear.tsx`: Same
6. Apply `.focus-ring` class to all interactive elements (replacing the long focus-visible chain)
7. **Verify**: `npm run build` succeeds, visual comparison of navbar/footer before/after

### Step 4: Consolidate Hardcoded Colors in Homepage Components
1. Update `HeroSection.tsx`, `HeroContent.tsx`: Replace hardcoded colors, use ArrowIcon
2. Update `ServicesSection.tsx`, `ServiceCard3D.tsx`: Same
3. Update `FeaturedWork.tsx`, `FeaturedWorkCard.tsx`, `FeaturedWorkGrid.tsx`: Same
4. Update `AboutSection.tsx`: Same, use DecorativeNumber
5. Update `ContactSection.tsx`: Same
6. Update `ScrollReveal.tsx`, `WordCarousel.tsx`, `HeroVisual.tsx`: Same (mostly clean already)
7. **Verify**: Full homepage visual comparison, all animations working

### Step 5: Create Service Page Data + Layout Components
1. Create `src/lib/data/service-pages.ts` with all 4 service page data objects (copy content verbatim from existing pages)
2. Create `src/components/services/ServiceHero.tsx`
3. Create `src/components/services/FeatureGrid.tsx`
4. Create `src/components/services/PricingGrid.tsx`
5. Create `src/components/services/PricingCard.tsx`
6. Create `src/components/services/ServiceCTA.tsx`
7. Create `src/components/services/TransparencySection.tsx`
8. Create `src/components/services/ValuePropSection.tsx`
9. Create `src/components/services/ServiceLayout.tsx`
10. **Verify**: Each component renders correctly with props

### Step 6: Refactor Service Subpages
1. Rewrite `src/app/services/web-development/page.tsx` to use `<ServiceLayout data={webDevelopmentPage} />`
2. Rewrite `src/app/services/ai-automation/page.tsx` to use `<ServiceLayout data={aiAutomationPage} />`
3. Rewrite `src/app/services/digital-marketing/page.tsx` to use `<ServiceLayout data={digitalMarketingPage} />`
4. Rewrite `src/app/services/it-consulting/page.tsx` to use `<ServiceLayout data={itConsultingPage} />`
5. Update `src/app/services/page.tsx`: Consolidate hardcoded colors
6. Fix metadata titles to use template format (drop ` - TekZuri` suffix)
7. **Verify**: Visual comparison of each service page before/after. Every heading, paragraph, price, feature must match exactly.

### Step 7: Consolidate Remaining Pages
1. Update `src/app/our-work/page.tsx`, `src/components/our-work/ProjectGrid.tsx`, `ProjectCard.tsx`: Consolidate colors
2. Update `src/app/about/page.tsx`, `src/components/about/TeamSection.tsx`, `TeamMemberCard.tsx`, `TeamMemberBio.tsx`, `OtherTeamMembers.tsx`: Consolidate colors
3. Update `src/app/contact/page.tsx`, `src/components/contact/ContactForm.tsx`, `ContactInfo.tsx`: Consolidate colors
4. Update `src/components/ui/FormField.tsx`: Consolidate colors
5. **Verify**: Visual comparison of each page

### Step 8: Fix Bugs
1. Fix Interconnect -> TekZuri in `src/lib/data/team.ts` (5 replacements)
2. Verify footer links already fixed in Step 3
3. Verify footer social icons already fixed in Step 3
4. **Verify**: Check Nirav and Dhruv's bio pages, footer renders correctly

### Step 9: SEO Fixes
1. Add service subpages to `src/app/sitemap.ts`
2. Populate `sameAs` in Organization schema in `layout.tsx`
3. Add Service JSON-LD to `ServiceLayout.tsx`
4. **Verify**: Check generated sitemap at /sitemap.xml, check JSON-LD in page source

### Step 10: Missing Features
1. Create `src/app/not-found.tsx`
2. Create `src/app/error.tsx`
3. Create loading skeletons: `src/app/loading.tsx`, `src/app/our-work/loading.tsx`, `src/app/about/loading.tsx`, `src/app/about/team/[slug]/loading.tsx`, `src/app/contact/loading.tsx`
4. Add skip-to-content link in `layout.tsx`
5. Add `id="main-content"` to `<main>` element
6. **Verify**: Navigate to `/nonexistent-page` to test 404, test skip link with keyboard

### Step 11: Remove Legacy CSS Variables
1. After ALL components are migrated, remove legacy aliases from globals.css: `--background`, `--muted`, `--muted-light`, `--dark-bg`, `--dark-bg-light`
2. Update `@theme inline` to remove their mappings
3. Update any remaining Tailwind classes that referenced `text-muted` → `text-fg-secondary`, `text-muted-light` → `text-foreground`, `bg-background` → `bg-bg-deep`, `bg-dark-bg` → `bg-bg-deep`, `bg-dark-bg-light` → `bg-bg-base`
4. **Verify**: `npm run build` succeeds, full site visual check

### Step 12: Final Verification
1. Run `npm run build` — must succeed with 0 errors
2. Run `npm run lint` — must pass
3. Full manual check of every route
4. Accessibility audit (keyboard nav, skip link, contrast)
5. SEO verification (sitemap, schema, meta tags)

---

## 9. Risks and Rollback

### Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Content accidentally changed during service page refactor | Medium | High | Step 5: Copy content verbatim to data file. Step 6: Visual diff every page. |
| Tailwind class mapping breaks after CSS variable rename | Medium | Medium | Step 11: Keep legacy variables until ALL components migrated. Remove last. |
| Color contrast change (#5c5c68 -> #76768a) alters visual feel | Low | Low | The change is subtle (+14% lightness). Both are muted gray. |
| Service page layout breaks with new components | Medium | Medium | Build components incrementally, verify each. Keep old pages until new ones verified. |
| Focus ring utility class conflicts with existing styles | Low | Low | The utility uses standard Tailwind @apply — no conflicts expected. |

### Verification Strategy

- **Before starting**: Take screenshots of every page at mobile, tablet, desktop breakpoints. Store in `/tmp/tekzuri-before/`.
- **After each step**: Visual comparison with screenshots.
- **Content preservation**: Grep for key content strings (pricing amounts, headings) before and after.

### Rollback

- Every step is a git-committable checkpoint. If any step causes issues, `git revert` that commit.
- The migration is designed so each step is independently reversible.
- Critical fallback: The existing service subpage files can be restored from git if the ServiceLayout refactor fails.

---

## 10. Validation Checklist

The Verify agent should check ALL of the following:

### Build & Lint
- [ ] `npm run build` succeeds with 0 errors
- [ ] `npm run lint` passes cleanly
- [ ] No TypeScript errors
- [ ] No console errors in browser dev tools

### Color Token Consolidation
- [ ] ZERO hardcoded hex values (#050508, #0a0a0f, #111116, #18181f, #1f1f28, #e8e8ed, #94949e, #5c5c68, #8a8a95) in component files (except in globals.css :root definitions)
- [ ] ZERO hardcoded `rgba(255,255,255,...)` border values in component files (use CSS variable utilities instead)
- [ ] All interactive elements use `.focus-ring` utility instead of the 5-class focus-visible chain
- [ ] Legacy CSS variables (--background, --muted, --muted-light, --dark-bg, --dark-bg-light) removed from globals.css
- [ ] All Tailwind classes reference semantic color names (text-foreground, bg-bg-elevated, etc.)

### Content Preservation
- [ ] Every heading on every page matches the original text exactly
- [ ] Every paragraph on every page matches the original text exactly
- [ ] All pricing amounts preserved exactly (dollar signs, commas, "USD/mo", "Custom", "Free")
- [ ] All CTA button text preserved exactly
- [ ] All feature lists preserved exactly (titles + descriptions)
- [ ] All contact information preserved exactly (email, phones, addresses, social URLs)
- [ ] All team member bios preserved (with Interconnect -> TekZuri fix verified)
- [ ] All project data preserved (names, subtitles, descriptions, URLs, images)

### Route Verification
- [ ] `/` renders correctly
- [ ] `/services` renders correctly
- [ ] `/services/web-development` renders correctly
- [ ] `/services/ai-automation` renders correctly
- [ ] `/services/digital-marketing` renders correctly
- [ ] `/services/it-consulting` renders correctly
- [ ] `/our-work` renders correctly
- [ ] `/about` renders correctly
- [ ] `/about/team/yash-shah` renders correctly
- [ ] `/about/team/nirav-challa` renders correctly
- [ ] `/about/team/dhruv-patel` renders correctly
- [ ] `/contact` renders correctly
- [ ] `/nonexistent-page` shows custom 404

### Bug Fixes Verified
- [ ] "Interconnect" does NOT appear anywhere in the codebase (search all .ts/.tsx files)
- [ ] Footer service links point to `/services/web-development`, `/services/ai-automation`, `/services/digital-marketing`, `/services/it-consulting`
- [ ] Footer social icons render as SVGs (not text labels)
- [ ] No broken links in footer

### Accessibility
- [ ] Skip-to-content link exists and works (Tab key from top of page)
- [ ] `--fg-tertiary` is `#76768a` (not `#5c5c68`)
- [ ] All heading levels are sequential (no h1 -> h3 skips)
- [ ] All decorative SVGs have `aria-hidden="true"`
- [ ] All icon-only buttons/links have `aria-label`

### SEO
- [ ] `/sitemap.xml` includes all 4 service subpage URLs
- [ ] Organization schema `sameAs` contains Instagram and LinkedIn URLs
- [ ] All page titles use consistent `| TekZuri` separator (not ` - TekZuri`)
- [ ] Service subpages have Service JSON-LD schema

### Missing Features
- [ ] Custom 404 page renders at `/nonexistent-page`
- [ ] Error boundary exists at `src/app/error.tsx`
- [ ] Loading states exist for: root, our-work, about, about/team/[slug], contact, services
- [ ] Skip-to-content link is first focusable element

### Architecture
- [ ] `src/components/services/ServiceLayout.tsx` exists and is used by all 4 service subpages
- [ ] `src/lib/data/service-pages.ts` contains all service page content data
- [ ] `src/components/ui/ArrowIcon.tsx` exists and replaces all inline arrow SVGs
- [ ] Each service subpage.tsx is under 40 lines
- [ ] No duplicated pricing card JSX across service pages

### Visual Regression
- [ ] Homepage looks identical to original (compare screenshots)
- [ ] All 4 service subpages look identical to original
- [ ] Services overview page looks identical
- [ ] Our Work page looks identical
- [ ] About page looks identical
- [ ] Contact page looks identical
- [ ] All team bio pages look identical
- [ ] Navbar and footer look identical on all pages
- [ ] Mobile responsive behavior preserved
- [ ] All animations still working (orbital, enso, word carousel, scroll reveal, card 3D, hover effects)
- [ ] Reduced motion preferences still respected

---

*Plan generated by Improve Agent, February 2026*

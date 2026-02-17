# Animation Choreography - TekZuri Website

**Date:** 2026-02-17
**Author:** Choreographer Agent
**Input:** animation-audit.md (Scout Agent)
**Consumer:** Motion Engineer Agent

---

## 1. Motion Language Tokens

These are the formalized motion primitives, derived from the existing `ScrollReveal.tsx` and `HeroContent.tsx` patterns. ALL new animations MUST use these tokens to maintain consistency.

### 1.1 Spring Configuration

```ts
const spring = { type: "spring", damping: 30, stiffness: 100, mass: 0.8 };
```

This is the single spring config used site-wide. Do NOT introduce new spring configs.

### 1.2 Animation States

```ts
const hidden = { opacity: 0, y: 20, filter: "blur(6px)" };
const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
```

### 1.3 Stagger Intervals

| Context | Interval | Rationale |
|---------|----------|-----------|
| Hero elements (label, h1, description, CTA) | `staggerChildren: 0.15` | Matches homepage hero rhythm |
| Card grids (up to 4 items per row) | `index * 0.1` | Faster pulse for dense grids |
| Card grids (3 or fewer per row) | `index * 0.12` | Slightly more breathing room |
| Info cards (stacked vertically) | `index * 0.1` | Quick cascade down the sidebar |

### 1.4 Viewport Trigger

```ts
{ once: true, amount: 0.2 }
```

20% of the element must be visible. Fires once, never re-triggers.

### 1.5 Duration Ceiling

No animation should exceed 0.8s perceived duration. Spring physics naturally handle this but the constraint applies to any CSS-driven fallbacks.

### 1.6 Reduced Motion Fallback

```ts
if (prefersReducedMotion) {
  return <div className={className}>{children}</div>;
}
```

Content renders immediately, fully visible, no transforms. This pattern is already in `ScrollReveal.tsx` and `HeroContent.tsx`.

---

## 2. Animation Component Library

All new components go in `src/components/animations/`. Each is `'use client'`, contains ZERO content, only motion logic.

### 2.1 `ScrollReveal` (MOVE, not create)

**Current location:** `src/components/home/ScrollReveal.tsx`
**New location:** `src/components/animations/ScrollReveal.tsx`
**Backward compat:** Re-export from `src/components/home/ScrollReveal.tsx` so existing homepage imports continue to work.

No changes to the component itself -- it already works perfectly.

```ts
// src/components/home/ScrollReveal.tsx (after move)
export { ScrollReveal } from "@/components/animations/ScrollReveal";
```

### 2.2 `StaggerRevealGroup` (NEW)

A scroll-triggered version of `StaggerReveal`. The existing `StaggerReveal` in `HeroContent.tsx` triggers on page load (`animate="visible"`). This new component triggers on viewport intersection (`useInView`).

**File:** `src/components/animations/StaggerRevealGroup.tsx`

```tsx
"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StaggerRevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerInterval?: number;  // default 0.15
  delayChildren?: number;    // default 0
  viewportAmount?: number;   // default 0.2
}

// Container variants (stagger only, no transforms on the container itself)
// itemVariants / spring from shared tokens

export function StaggerRevealGroup({ children, className, staggerInterval = 0.15, delayChildren = 0, viewportAmount = 0.2 }: StaggerRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: viewportAmount });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerInterval, delayChildren },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
```

### 2.3 `RevealItem` (MOVE + RE-EXPORT)

**Current location:** Defined inside `src/components/home/HeroContent.tsx`
**New location:** `src/components/animations/RevealItem.tsx`
**Backward compat:** Re-export from `HeroContent.tsx`.

```tsx
"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 30, stiffness: 100, mass: 0.8 };

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring },
};

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
```

### 2.4 Component Summary

| Component | File | Purpose | Props |
|-----------|------|---------|-------|
| `ScrollReveal` | `animations/ScrollReveal.tsx` | Single-element viewport reveal | `delay?`, `className?` |
| `StaggerRevealGroup` | `animations/StaggerRevealGroup.tsx` | Container for staggered viewport reveal | `staggerInterval?`, `delayChildren?`, `viewportAmount?`, `className?` |
| `RevealItem` | `animations/RevealItem.tsx` | Child item inside StaggerRevealGroup | `className?` |

That is the complete library. Three components, all reusable, all handling reduced motion.

---

## 3. Section-by-Section Animation Specifications

### 3.1 HOMEPAGE (`/`)

#### 3.1.1 AboutSection (Priority 1) -- Audit #16

**Current state:** CSS-only ambient animations (enso-drift, glow-pulse). No entrance animation.
**File:** `src/components/home/AboutSection.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal wrappers at the page level |
| **Sequence** | Left visual card reveals first (delay 0), then right content column (delay 0.15) |
| **Trigger** | Viewport intersection |
| **Component strategy** | AboutSection stays as Server Component. In `src/app/page.tsx`, wrap the `<AboutSection />` import area with two ScrollReveal wrappers: one for the left column, one for the right. However, since AboutSection is a single component, the preferred approach is to wrap the entire `<AboutSection />` in a single `<ScrollReveal>` in `page.tsx`. The internal grid columns will animate together, which is acceptable for a two-column layout. |
| **Specific wrapper** | `<ScrollReveal>` wrapping `<AboutSection />` in `page.tsx` |
| **UX rationale** | The About section is the philosophical heart of the site. A reveal entrance gives it weight and presence as the user scrolls past the services and featured work. The ambient enso-drift and glow-pulse animations continue to provide life after the reveal. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>`, ambient CSS animations already disabled in `@media (prefers-reduced-motion: reduce)` block |

**Implementation detail:** In `src/app/page.tsx`, change:
```tsx
<AboutSection />
```
to:
```tsx
<ScrollReveal>
  <AboutSection />
</ScrollReveal>
```

Import `ScrollReveal` from `@/components/animations/ScrollReveal`.

#### 3.1.2 ContactSection (Priority 1) -- Audit #17

**Current state:** CSS pulse-dot animation on availability badge. No entrance animation.
**File:** `src/components/home/ContactSection.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup wrapping the inner content |
| **Sequence** | Badge (first) -> Headline -> Description -> CTAs -> Trust indicators. Each item staggers in with 0.15s interval. |
| **Trigger** | Viewport intersection |
| **Component strategy** | ContactSection stays as Server Component. Convert only the inner content to use a client wrapper. The cleanest approach: wrap `<ContactSection />` in `page.tsx` with `<ScrollReveal>` for a simple entrance. For staggered internal items, the component itself would need `'use client'` or internal wrappers. **Decision: Use a single `<ScrollReveal>` wrapper in `page.tsx` for simplicity** -- the section is compact enough that staggering internal elements would feel overdone. |
| **Specific wrapper** | `<ScrollReveal>` wrapping `<ContactSection />` in `page.tsx` |
| **UX rationale** | The final CTA section should have a clean entrance to signal "here's what to do next." A single reveal keeps it simple and lets the pulse-dot badge draw attention naturally after the reveal. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>`. Pulse-dot CSS animation already disabled in reduced-motion media query. |

**Implementation detail:** In `src/app/page.tsx`, change:
```tsx
<ContactSection />
```
to:
```tsx
<ScrollReveal>
  <ContactSection />
</ScrollReveal>
```

#### 3.1.3 FeaturedWork Header (Priority 2) -- Audit #13

**Current state:** Header (h2, description, "View all projects" link) NOT wrapped in ScrollReveal, though the grid items below are animated.
**File:** `src/components/home/FeaturedWork.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on the header `<div>` |
| **Sequence** | Header row reveals first, then grid items stagger in below (already implemented) |
| **Trigger** | Viewport intersection |
| **Component strategy** | FeaturedWork is a Server Component. Import and use ScrollReveal to wrap the header `<div>` inside FeaturedWork. This requires FeaturedWork to become `'use client'` OR to import ScrollReveal dynamically. **Decision: Wrap the header div with ScrollReveal inside FeaturedWork.tsx.** The component already imports FeaturedWorkGrid dynamically, so it is a Server Component. The simplest approach is to import ScrollReveal and wrap the header div. Since ScrollReveal is a client component, this will work via React's composition model -- a Server Component can render a Client Component as a child. |
| **Specific wrapper** | `<ScrollReveal>` around the header flex-row div |
| **UX rationale** | Fixes an inconsistency where the heading appears instantly but cards animate in. The header should set the stage for the grid reveal. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `src/components/home/FeaturedWork.tsx`, wrap the header div:
```tsx
<ScrollReveal>
  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
    {/* ... existing header content ... */}
  </div>
</ScrollReveal>
```

Import `ScrollReveal` from `@/components/animations/ScrollReveal`.

---

### 3.2 SERVICES INDEX PAGE (`/services`)

#### 3.2.1 Services Index Hero (Priority 1) -- Audit #18

**Current state:** Static. Swiss label, h1, description appear instantly.
**File:** `src/app/services/page.tsx` (inline JSX, lines 42-53)

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup + RevealItem |
| **Sequence** | Swiss label -> h1 -> description paragraph. Stagger 0.15s. |
| **Trigger** | Viewport intersection (above-the-fold, so will fire immediately on page load) |
| **Component strategy** | The page file `src/app/services/page.tsx` is a Server Component. Wrap the hero `<div className="text-center mb-16 lg:mb-24">` content with `<StaggerRevealGroup>` and each child with `<RevealItem>`. Since page.tsx is a Server Component and these are client component wrappers being used as children, this composition works in React Server Components. |
| **Specific wrapper** | `<StaggerRevealGroup staggerInterval={0.15}>` with `<RevealItem>` children |
| **UX rationale** | Page heroes should welcome the user with a graceful entrance. The staggered reveal guides the eye: label (context) -> heading (what this page is) -> description (details). Matches the homepage hero rhythm. |
| **Reduced-motion fallback** | StaggerRevealGroup returns plain `<div>`. RevealItem renders children directly via parent variant propagation (if parent is plain div, motion.div children won't animate). |

**Implementation detail:** In `src/app/services/page.tsx`:
```tsx
<StaggerRevealGroup className="text-center mb-16 lg:mb-24" staggerInterval={0.15}>
  <RevealItem>
    <div className="swiss-label mb-4">ものづくり - Monozukuri</div>
  </RevealItem>
  <RevealItem>
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
      Our Services
    </h1>
  </RevealItem>
  <RevealItem>
    <p className="text-lg lg:text-xl text-fg-secondary max-w-3xl mx-auto leading-relaxed">
      We provide a comprehensive suite of digital solutions...
    </p>
  </RevealItem>
</StaggerRevealGroup>
```

#### 3.2.2 Services Index Grid (Priority 2) -- Audit #19

**Current state:** Cards have `animationDelay` inline style but the `animate-fade-in-up` class is NOT applied. The delay has no effect. BUG.
**File:** `src/app/services/page.tsx` (lines 56-86)

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on each card with stagger delay |
| **Sequence** | Cards stagger in: index * 0.1s delay |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap each `<Link>` card in a `<ScrollReveal delay={index * 0.1}>`. Remove the broken `animationDelay` inline style. |
| **Specific wrapper** | `<ScrollReveal delay={index * 0.1}>` per card |
| **UX rationale** | Service cards are the primary navigation on this page. A staggered reveal creates a satisfying cascade effect that draws attention to each option sequentially. Also fixes the existing bug where animation delays were set but had no effect. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `src/app/services/page.tsx`, wrap each Link:
```tsx
{services.map((service, index) => (
  <ScrollReveal key={service.id} delay={index * 0.1}>
    <Link
      href={service.href}
      className="group cursor-pointer relative bg-bg-elevated border border-border-card rounded-2xl p-8 lg:p-10 hover:bg-bg-elevated-2 hover:border-border-strong transition-all duration-300 focus-ring"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* ... existing card content, REMOVE animationDelay from style ... */}
    </Link>
  </ScrollReveal>
))}
```

#### 3.2.3 Services Index Bottom CTA (Priority 3) -- Audit #20

**Current state:** Static card with button.
**File:** `src/app/services/page.tsx` (lines 89-111)

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal |
| **Sequence** | Single reveal, no stagger |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap the CTA `<div>` in `<ScrollReveal>` |
| **Specific wrapper** | `<ScrollReveal>` |
| **UX rationale** | The CTA is the page's closing action. A gentle reveal gives it presence without being aggressive. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** Wrap `<div className="mt-16 lg:mt-24 text-center">` in `<ScrollReveal>`.

---

### 3.3 SERVICE DETAIL PAGES (`/services/*`)

All four service detail pages use `ServiceLayout.tsx` which composes: ServiceHero -> FeatureGrid -> PricingGrid(s) -> TransparencySection? -> ValuePropSection? -> ServiceCTA.

The animation wrappers should be applied in `ServiceLayout.tsx` so all four pages get animations automatically.

#### 3.3.1 ServiceHero (Priority 1) -- Audit #21

**Current state:** Static. h1, description, CTA appear instantly.
**File:** `src/components/services/ServiceHero.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup + RevealItem |
| **Sequence** | h1 -> description -> CTA button. Stagger 0.15s. |
| **Trigger** | Viewport intersection (fires immediately since above-the-fold) |
| **Component strategy** | ServiceHero is a Server Component. Wrap the inner content in `StaggerRevealGroup` + `RevealItem` wrappers. ServiceHero itself does NOT need `'use client'` because Client Components can be composed as children of Server Components. Simply wrap in ServiceLayout.tsx at the call site, OR restructure ServiceHero's internals. **Decision: Wrap in ServiceLayout.tsx** using `StaggerRevealGroup` around the ServiceHero call site, and add RevealItem wrapping inside ServiceHero.tsx. Since we need RevealItem inside ServiceHero, ServiceHero itself needs the wrappers. The simplest approach: change ServiceLayout.tsx to wrap the hero area. |
| **Specific wrapper** | Apply `StaggerRevealGroup` + `RevealItem` inside `ServiceHero.tsx`. This requires adding `'use client'` to ServiceHero OR wrapping from ServiceLayout. **Best approach: Wrap from ServiceLayout.tsx** with a StaggerRevealGroup around a new client-side hero wrapper. Actually the simplest: wrap each element of ServiceHero directly. Since ServiceHero has 3 distinct children (h1, p, Link), we wrap each in `RevealItem` and the container `<div className="max-w-7xl mx-auto text-center">` becomes a `StaggerRevealGroup`. |
| **UX rationale** | Service heroes are the first thing users see. A staggered entrance (heading first to set context, then supporting text, then CTA) guides attention naturally and creates a premium feel consistent with the homepage. |
| **Reduced-motion fallback** | StaggerRevealGroup returns plain `<div>` |

**Implementation detail:** Add imports and wrap content inside `ServiceHero.tsx`:
```tsx
// ServiceHero.tsx becomes a thin wrapper that imports client animation components
import { StaggerRevealGroup } from "@/components/animations/StaggerRevealGroup";
import { RevealItem } from "@/components/animations/RevealItem";

// Replace <div className="max-w-7xl mx-auto text-center"> with:
<StaggerRevealGroup className="max-w-7xl mx-auto text-center" staggerInterval={0.15}>
  <RevealItem>
    <h1 ...>{heading}</h1>
  </RevealItem>
  <RevealItem>
    <p ...>{subtext}</p>
  </RevealItem>
  <RevealItem>
    <Link ...>{ctaText}<ArrowIcon /></Link>
  </RevealItem>
</StaggerRevealGroup>
```

ServiceHero remains a Server Component -- it just renders Client Component children.

#### 3.3.2 FeatureGrid (Priority 2) -- Audit #22

**Current state:** Cards have `.card-3d` hover. No entrance animation.
**File:** `src/components/services/FeatureGrid.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on each card with stagger delay. ScrollReveal on heading. |
| **Sequence** | Heading reveals first -> then cards stagger in: index * 0.1s |
| **Trigger** | Viewport intersection |
| **Component strategy** | FeatureGrid is a Server Component. Wrap the h2 in `<ScrollReveal>` and each card `<div>` in `<ScrollReveal delay={index * 0.1}>`. FeatureGrid remains a Server Component -- it just renders Client Component wrappers as children. |
| **Specific wrapper** | `<ScrollReveal>` for heading, `<ScrollReveal delay={index * 0.1}>` per card |
| **UX rationale** | Feature cards are the core value proposition. A staggered reveal creates a cascading effect that encourages the user to scan each feature. The heading enters first to set context. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `FeatureGrid.tsx`:
```tsx
<ScrollReveal>
  <h2 ...>{heading}</h2>
</ScrollReveal>
<div className="grid ...">
  {items.map((feature, index) => (
    <ScrollReveal key={index} delay={index * 0.1}>
      <div className="card-3d ...">
        {/* existing card content */}
      </div>
    </ScrollReveal>
  ))}
</div>
```

#### 3.3.3 PricingGrid (Priority 2) -- Audit #23, #24

**Current state:** Static. No entrance animation. PricingCard has `.card-3d` hover on non-consulting variant.
**File:** `src/components/services/PricingGrid.tsx`, `PricingCard.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on heading block, ScrollReveal with stagger delay on each PricingCard |
| **Sequence** | Heading + subtext reveal -> Cards stagger in: index * 0.12s |
| **Trigger** | Viewport intersection |
| **Component strategy** | PricingGrid is a Server Component. Wrap the heading `<div className="text-center mb-16">` in `<ScrollReveal>` and each `<PricingCard>` in `<ScrollReveal delay={index * 0.12}>`. PricingCard itself does NOT change. |
| **Specific wrapper** | `<ScrollReveal>` for heading, `<ScrollReveal delay={index * 0.12}>` per card |
| **UX rationale** | Pricing is a key decision point. The stagger lets users process each option in sequence rather than being overwhelmed by all packages at once. Slightly longer interval (0.12) than features to give more weight to each pricing card. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `PricingGrid.tsx`:
```tsx
<ScrollReveal>
  <div className="text-center mb-16">
    <h2 ...>{section.heading}</h2>
    <p ...>{section.subtext}</p>
  </div>
</ScrollReveal>

<div className={`grid ${gridClass} ...`}>
  {section.packages.map((pkg, index) => (
    <ScrollReveal key={index} delay={index * 0.12}>
      <PricingCard ... />
    </ScrollReveal>
  ))}
</div>
```

#### 3.3.4 TransparencySection (Priority 3) -- Audit #25

**Current state:** Static card layout. No entrance animation.
**File:** `src/components/services/TransparencySection.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on the entire section |
| **Sequence** | Single reveal, no internal stagger (section is compact enough) |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap the outer `<div className="mt-16 bg-bg-elevated ...">` with `<ScrollReveal>` in the parent (`ServiceLayout.tsx`) |
| **Specific wrapper** | `<ScrollReveal>` wrapping the TransparencySection call in ServiceLayout |
| **UX rationale** | This is a trust-building section. A simple reveal gives it presence without distracting from its content. No stagger because the items are small and tightly grouped. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `ServiceLayout.tsx`, change:
```tsx
{data.transparency && (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <ScrollReveal>
      <TransparencySection ... />
    </ScrollReveal>
  </div>
)}
```

#### 3.3.5 ValuePropSection (Priority 3) -- Audit #26

**Current state:** Static card layout. No entrance animation.
**File:** `src/components/services/ValuePropSection.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on the entire section |
| **Sequence** | Single reveal |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap in ServiceLayout.tsx with `<ScrollReveal>` |
| **Specific wrapper** | `<ScrollReveal>` wrapping the ValuePropSection call in ServiceLayout |
| **UX rationale** | Same reasoning as TransparencySection. Supporting content that benefits from a reveal entrance but not internal stagger. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `ServiceLayout.tsx`, change:
```tsx
{data.valueProp && (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <ScrollReveal>
      <ValuePropSection ... />
    </ScrollReveal>
  </div>
)}
```

#### 3.3.6 ServiceCTA (Priority 3) -- Audit #27

**Current state:** Static CTA card. Button has active:scale.
**File:** `src/components/services/ServiceCTA.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on the entire section |
| **Sequence** | Single reveal |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap in ServiceLayout.tsx with `<ScrollReveal>` |
| **Specific wrapper** | `<ScrollReveal>` wrapping `<ServiceCTA />` in ServiceLayout |
| **UX rationale** | Final CTA -- a reveal entrance signals the end of the page journey and invites action. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `ServiceLayout.tsx`, change:
```tsx
<ScrollReveal>
  <ServiceCTA ... />
</ScrollReveal>
```

---

### 3.4 OUR WORK PAGE (`/our-work`)

#### 3.4.1 Our Work Hero (Priority 1) -- Audit #28

**Current state:** Static. h1 and description appear instantly.
**File:** `src/app/our-work/page.tsx` (lines 39-51)

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup + RevealItem |
| **Sequence** | h1 -> description. Stagger 0.15s. |
| **Trigger** | Viewport intersection (fires immediately) |
| **Component strategy** | Wrap inline hero JSX with `<StaggerRevealGroup>` and `<RevealItem>` in the page file |
| **Specific wrapper** | `<StaggerRevealGroup staggerInterval={0.15}>` with `<RevealItem>` children |
| **UX rationale** | Consistent page hero entrance across all sub-pages. Heading first to set expectation, then description. |
| **Reduced-motion fallback** | StaggerRevealGroup returns plain `<div>` |

**Implementation detail:** In `src/app/our-work/page.tsx`:
```tsx
<section className="px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
  <StaggerRevealGroup className="max-w-7xl mx-auto" staggerInterval={0.15}>
    <RevealItem>
      <h1 ...>Projects we're proud of</h1>
    </RevealItem>
    <RevealItem>
      <p ...>Every project is an opportunity...</p>
    </RevealItem>
  </StaggerRevealGroup>
</section>
```

#### 3.4.2 ProjectGrid + ProjectCard (Priority 2) -- Audit #29, #30

**Current state:** ProjectCard has CSS `animate-fade-in-up` with staggered `animationDelay`. This works but is CSS-only and inconsistent with the framer-motion pattern used elsewhere.
**File:** `src/components/our-work/ProjectGrid.tsx`, `ProjectCard.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | Replace CSS `animate-fade-in-up` with ScrollReveal per card |
| **Sequence** | Cards stagger in: index * 0.1s |
| **Trigger** | Viewport intersection |
| **Component strategy** | In `ProjectGrid.tsx`, wrap each card's outer `<div>` (the one with `contentVisibility`) in `<ScrollReveal delay={index * 0.1}>`. Remove `animate-fade-in-up` class and `animationDelay` from `ProjectCard.tsx`. The `contentVisibility: "auto"` property should be preserved on the ScrollReveal wrapper or its parent. |
| **Specific wrapper** | `<ScrollReveal delay={index * 0.1}>` per card |
| **UX rationale** | Upgrades the basic CSS animation to the consistent framer-motion system. Spring physics feel more polished than a 0.6s ease-out CSS animation. The viewport-triggered approach is also more reliable than CSS animation that fires on render. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>`. Remove the CSS `animate-fade-in-up` class from ProjectCard so there's no double animation. |

**Implementation detail:**

In `ProjectGrid.tsx`:
```tsx
{projects.map((project, index) => (
  <ScrollReveal key={project.id} delay={index * 0.1} className={undefined}>
    <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}>
      <ProjectCard project={project} index={index} />
    </div>
  </ScrollReveal>
))}
```

In `ProjectCard.tsx`, remove `animate-fade-in-up` from the className and `animationDelay` from the style prop:
```tsx
// Before:
className="card-3d cursor-pointer group ... animate-fade-in-up focus-ring"
style={{ animationDelay: `${index * 100}ms` }}

// After:
className="card-3d cursor-pointer group ... focus-ring"
// Remove animationDelay from style (or remove style entirely if no other styles)
```

#### 3.4.3 Our Work Bottom CTA (Priority 4) -- Audit #31

**Current state:** Static. Arrow hover translate only.
**File:** `src/app/our-work/page.tsx` (lines 57-68)

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal |
| **Sequence** | Single reveal |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap the bottom CTA `<section>` content in `<ScrollReveal>` |
| **Specific wrapper** | `<ScrollReveal>` |
| **UX rationale** | Low priority but maintains consistency. A simple reveal for the page's closing CTA. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** Wrap the bottom CTA inner div in `<ScrollReveal>`.

---

### 3.5 ABOUT PAGE (`/about`)

#### 3.5.1 About Hero (Priority 1) -- Audit #32

**Current state:** Static. h1 and description appear instantly.
**File:** `src/app/about/page.tsx` (lines 38-52)

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup + RevealItem |
| **Sequence** | h1 -> description. Stagger 0.15s. |
| **Trigger** | Viewport intersection (fires immediately) |
| **Component strategy** | Wrap inline hero JSX with `<StaggerRevealGroup>` and `<RevealItem>` in the page file |
| **Specific wrapper** | `<StaggerRevealGroup className="max-w-7xl mx-auto text-center" staggerInterval={0.15}>` |
| **UX rationale** | Consistent page hero entrance. Heading establishes "who we are," description fills in the philosophy. |
| **Reduced-motion fallback** | StaggerRevealGroup returns plain `<div>` |

**Implementation detail:** In `src/app/about/page.tsx`:
```tsx
<section className="px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
  <StaggerRevealGroup className="max-w-7xl mx-auto text-center" staggerInterval={0.15}>
    <RevealItem>
      <h1 ...>Crafting Digital Excellence</h1>
    </RevealItem>
    <RevealItem>
      <p ...>TekZuri draws inspiration from...</p>
    </RevealItem>
  </StaggerRevealGroup>
</section>
```

#### 3.5.2 TeamSection + TeamMemberCards (Priority 2) -- Audit #33, #34

**Current state:** Static heading + grid. Cards have `.card-3d` hover only.
**File:** `src/components/about/TeamSection.tsx`, `TeamMemberCard.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on heading block, ScrollReveal with stagger delay on each card |
| **Sequence** | Heading + description reveal -> Cards stagger in: index * 0.12s |
| **Trigger** | Viewport intersection |
| **Component strategy** | TeamSection is a Server Component. Wrap the heading `<div className="text-center mb-16">` in `<ScrollReveal>` and each `<TeamMemberCard>` in `<ScrollReveal delay={index * 0.12}>`. TeamSection remains a Server Component. |
| **Specific wrapper** | `<ScrollReveal>` for heading, `<ScrollReveal delay={index * 0.12}>` per card |
| **UX rationale** | Team members are the "face" of the company. A staggered reveal humanizes the page by introducing each person one at a time rather than dumping them all at once. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `TeamSection.tsx`:
```tsx
<ScrollReveal>
  <div className="text-center mb-16">
    <h2 ...>Meet the People Behind TekZuri</h2>
    <p ...>We are a passionate team...</p>
  </div>
</ScrollReveal>

<div className="flex flex-wrap justify-center gap-6 lg:gap-8">
  {teamMembers.map((member, index) => (
    <ScrollReveal key={member.id} delay={index * 0.12}>
      <TeamMemberCard member={member} />
    </ScrollReveal>
  ))}
</div>
```

---

### 3.6 TEAM MEMBER BIO PAGE (`/about/team/[slug]`)

#### 3.6.1 TeamMemberBio (Priority 3) -- Audit #36

**Current state:** Static card layout.
**File:** `src/components/about/TeamMemberBio.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal (single reveal) |
| **Sequence** | Entire bio card reveals at once |
| **Trigger** | Viewport intersection (fires immediately since above-the-fold) |
| **Component strategy** | Wrap `<TeamMemberBio />` in `<ScrollReveal>` in the page file (`[slug]/page.tsx`) |
| **Specific wrapper** | `<ScrollReveal>` |
| **UX rationale** | The bio card is the primary content. A single reveal provides a polished entrance without over-animating what is essentially a reading page. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `src/app/about/team/[slug]/page.tsx`:
```tsx
<ScrollReveal>
  <TeamMemberBio member={member} />
</ScrollReveal>
```

#### 3.6.2 OtherTeamMembers (Priority 3) -- Audit #37

**Current state:** Static. CSS hover border transition only.
**File:** `src/components/about/OtherTeamMembers.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal on heading, ScrollReveal with stagger on each member card |
| **Sequence** | "See Other Members" heading -> member cards stagger in: index * 0.1s |
| **Trigger** | Viewport intersection |
| **Component strategy** | Wrap internally in `OtherTeamMembers.tsx`. Wrap the h2 in `<ScrollReveal>` and each card `<Link>` in `<ScrollReveal delay={index * 0.1}>`. OtherTeamMembers remains a Server Component. |
| **Specific wrapper** | `<ScrollReveal>` for heading, `<ScrollReveal delay={index * 0.1}>` per card |
| **UX rationale** | Encourages exploration of other team members. A staggered reveal draws attention to the "other members" section that might otherwise be overlooked at the bottom of the page. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `OtherTeamMembers.tsx`:
```tsx
<section className="mt-16">
  <ScrollReveal>
    <h2 ...>See Other Members</h2>
  </ScrollReveal>
  <div className="flex flex-wrap justify-center gap-6">
    {members.map((member, index) => (
      <ScrollReveal key={member.id} delay={index * 0.1}>
        <Link ...>
          {/* existing card content */}
        </Link>
      </ScrollReveal>
    ))}
  </div>
</section>
```

---

### 3.7 CONTACT PAGE (`/contact`)

#### 3.7.1 Contact Hero (Priority 1) -- Audit #38

**Current state:** Static. h1 and description appear instantly.
**File:** `src/app/contact/page.tsx` (lines 39-45)

| Field | Value |
|-------|-------|
| **Animation type** | StaggerRevealGroup + RevealItem |
| **Sequence** | h1 -> description. Stagger 0.15s. |
| **Trigger** | Viewport intersection (fires immediately) |
| **Component strategy** | Wrap inline hero JSX in `<StaggerRevealGroup>` + `<RevealItem>` |
| **Specific wrapper** | `<StaggerRevealGroup className="text-center mb-16" staggerInterval={0.15}>` |
| **UX rationale** | Consistent page hero entrance. Sets the tone for the contact form below. |
| **Reduced-motion fallback** | StaggerRevealGroup returns plain `<div>` |

**Implementation detail:** In `src/app/contact/page.tsx`:
```tsx
<StaggerRevealGroup className="text-center mb-16" staggerInterval={0.15}>
  <RevealItem>
    <h1 ...>Contact Us</h1>
  </RevealItem>
  <RevealItem>
    <p ...>We'd love to hear from you...</p>
  </RevealItem>
</StaggerRevealGroup>
```

#### 3.7.2 ContactInfo (Priority 2) -- Audit #39

**Current state:** `.card-3d` hover on each info card. No entrance animation.
**File:** `src/components/contact/ContactInfo.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal with stagger delay on each card |
| **Sequence** | Info cards stagger in: index * 0.1s |
| **Trigger** | Viewport intersection |
| **Component strategy** | ContactInfo is a Server Component. Wrap each card `<div>` in `<ScrollReveal delay={index * 0.1}>`. ContactInfo remains a Server Component. |
| **Specific wrapper** | `<ScrollReveal delay={index * 0.1}>` per card |
| **UX rationale** | Contact info cards cascade in to guide the user through available contact methods before they look at the form. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `ContactInfo.tsx`, wrap each card:
```tsx
{contactItems.map(({ title, content }, index) => (
  <ScrollReveal key={title} delay={index * 0.1}>
    <div className="card-3d bg-bg-elevated ...">
      {/* existing card content */}
    </div>
  </ScrollReveal>
))}

<ScrollReveal delay={contactItems.length * 0.1}>
  <div className="card-3d bg-bg-elevated ...">
    {/* Follow Us card */}
  </div>
</ScrollReveal>
```

#### 3.7.3 ContactForm (Priority 2) -- Audit #40

**Current state:** No entrance animation. Already `'use client'`.
**File:** `src/components/contact/ContactForm.tsx`

| Field | Value |
|-------|-------|
| **Animation type** | ScrollReveal wrapping the form |
| **Sequence** | Single reveal |
| **Trigger** | Viewport intersection |
| **Component strategy** | ContactForm is already `'use client'`. Wrap the outer `<div className="bg-bg-elevated ...">` with `<ScrollReveal delay={0.15}>` either inside ContactForm or from the page level. **Decision: Wrap from page level** to keep the form component focused on form logic. |
| **Specific wrapper** | `<ScrollReveal delay={0.15}>` wrapping `<ContactForm />` in `contact/page.tsx` |
| **UX rationale** | The form enters slightly after the info cards (0.15s delay) so the user processes the contact options first, then sees the form. A single reveal (not staggered) because form fields shouldn't animate independently -- the form is one coherent unit. |
| **Reduced-motion fallback** | ScrollReveal returns plain `<div>` |

**Implementation detail:** In `src/app/contact/page.tsx`:
```tsx
<div className="lg:col-span-2">
  <ScrollReveal delay={0.15}>
    <ContactForm />
  </ScrollReveal>
</div>
```

---

## 4. Scroll Narrative per Page

### 4.1 Homepage (`/`)

```
[Page Load]
  HeroSection: StaggerReveal fires on load (label -> h1 -> WordCarousel -> CTAs)
  HeroVisual: Orbital CSS animations start immediately

[Scroll to Services]
  SectionDivider: Fades in (existing)
  ServicesSection header: ScrollReveal (existing)
  ServiceCard3D cards: ScrollReveal with stagger (existing)
  Services CTA: ScrollReveal (existing)

[Scroll to Featured Work]
  SectionDivider: Fades in (existing)
  FeaturedWork header: ScrollReveal (NEW - fixes inconsistency)
  FeaturedWorkGrid cards: ScrollReveal with stagger (existing)

[Scroll to About]
  SectionDivider: Fades in (existing)
  AboutSection: ScrollReveal entrance (NEW)
  Enso circle + glow pulse: CSS ambient animations continue after reveal

[Scroll to Contact]
  SectionDivider: Fades in (existing)
  ContactSection: ScrollReveal entrance (NEW)
  Pulse-dot badge: CSS animation continues after reveal
```

**Narrative feel:** A cinematic scroll from bold hero -> structured services -> visual portfolio -> philosophical pause -> clear call-to-action. Each section reveals as the user reaches it, maintaining engagement without rushing.

### 4.2 Service Detail Pages (`/services/*`)

```
[Page Load / Above-the-fold]
  ServiceHero: StaggerRevealGroup (h1 -> description -> CTA)

[Scroll to Features]
  FeatureGrid heading: ScrollReveal
  Feature cards: ScrollReveal with stagger (4 cards, index * 0.1)

[Scroll to Pricing]
  PricingGrid heading: ScrollReveal
  Pricing cards: ScrollReveal with stagger (index * 0.12)
  (Repeated for each pricing section)

[Scroll to Trust/Value]
  TransparencySection: ScrollReveal (single reveal)
  ValuePropSection: ScrollReveal (single reveal)

[Scroll to CTA]
  ServiceCTA: ScrollReveal (single reveal)
```

**Narrative feel:** Professional and structured. Hero sets the promise, features deliver evidence, pricing makes it tangible, trust sections provide reassurance, CTA closes the deal. Each section enters cleanly without overwhelming the user.

### 4.3 Our Work Page (`/our-work`)

```
[Page Load / Above-the-fold]
  Hero: StaggerRevealGroup (h1 -> description)

[Scroll to Projects]
  ProjectCards: ScrollReveal with stagger (index * 0.1, up to ~9 cards)

[Scroll to Bottom]
  Bottom CTA: ScrollReveal
```

**Narrative feel:** Portfolio-first. Quick hero entrance, then the work speaks for itself through a satisfying card cascade. Clean closing CTA.

### 4.4 About Page (`/about`)

```
[Page Load / Above-the-fold]
  Hero: StaggerRevealGroup (h1 -> description)

[Scroll to Team]
  TeamSection heading: ScrollReveal
  TeamMemberCards: ScrollReveal with stagger (index * 0.12)
```

**Narrative feel:** Personal and human. The philosophy sets the stage, then each team member is introduced individually. The stagger interval is slightly longer (0.12) to give each person their moment.

### 4.5 Team Member Bio Page (`/about/team/[slug]`)

```
[Page Load / Above-the-fold]
  Back link: No animation (immediate, functional element)
  TeamMemberBio: ScrollReveal (single entrance)

[Scroll to Other Members]
  "See Other Members" heading: ScrollReveal
  Other member cards: ScrollReveal with stagger (index * 0.1)
```

**Narrative feel:** Focused reading page. The bio enters cleanly, then related members appear below as an invitation to explore further.

### 4.6 Contact Page (`/contact`)

```
[Page Load / Above-the-fold]
  Hero: StaggerRevealGroup (h1 -> description)

[Scroll to Content (if needed, may be above-fold on desktop)]
  ContactInfo cards: ScrollReveal with stagger (index * 0.1)
  ContactForm: ScrollReveal (delay 0.15, enters after info cards)
```

**Narrative feel:** Welcoming and clear. Hero sets the tone, contact info provides options, form provides the action. Info cards enter slightly before the form to guide the user's attention from "how to reach us" to "or fill this out."

---

## 5. Reduced-Motion Fallback Plan

### 5.1 Principle

ALL animations must be skippable. When `prefers-reduced-motion: reduce` is set, users see fully-rendered content immediately with zero motion.

### 5.2 Implementation

Every animation wrapper (`ScrollReveal`, `StaggerRevealGroup`, `RevealItem`) already implements this pattern:

```tsx
const prefersReducedMotion = useReducedMotion();

if (prefersReducedMotion) {
  return <div className={className}>{children}</div>;
}
```

- `ScrollReveal`: Already implements this (verified in code)
- `StaggerRevealGroup`: Must implement this (specified in Section 2.2)
- `RevealItem`: When inside a non-animated parent (plain `<div>` from StaggerRevealGroup's reduced motion path), `motion.div` with `variants` will not animate because there is no parent `animate` prop to trigger it. However, to be safe, RevealItem should also handle this explicitly: if the parent is not a motion component, the variant won't fire and the element may remain in its `hidden` initial state. **Solution:** RevealItem should NOT set `initial="hidden"` on itself -- it should only use `variants`, inheriting the animation state from the parent. When the parent is a plain `<div>` (reduced motion), framer-motion won't apply the variants and the content renders normally. This is the current behavior in the existing `RevealItem` in `HeroContent.tsx` -- it uses `variants` without `initial`/`animate`, which is correct.

### 5.3 CSS Animations

Existing CSS animations are already handled in the `@media (prefers-reduced-motion: reduce)` block in `globals.css`. Since we are replacing the CSS `animate-fade-in-up` on ProjectCard with framer-motion ScrollReveal, no new CSS reduced-motion rules are needed.

### 5.4 What NOT to Disable

- Hover transitions (color, border, arrow translate) are NOT disabled -- they are user-initiated and do not cause vestibular issues
- The `.card-3d` hover effect is already gracefully degraded (transform removed, box-shadow transition kept)
- Focus ring styles are never disabled

---

## 6. Implementation Notes for the Motion Engineer

### 6.1 File Changes Summary

**New files to create (3):**
1. `src/components/animations/ScrollReveal.tsx` -- move from `src/components/home/ScrollReveal.tsx`
2. `src/components/animations/StaggerRevealGroup.tsx` -- new component
3. `src/components/animations/RevealItem.tsx` -- extract from `src/components/home/HeroContent.tsx`

**Files to update for re-exports (2):**
4. `src/components/home/ScrollReveal.tsx` -- re-export from animations/
5. `src/components/home/HeroContent.tsx` -- import RevealItem from animations/, keep StaggerReveal and AccentLine locally (they are load-triggered, different from StaggerRevealGroup)

**Files to update with animation wrappers (14):**
6. `src/app/page.tsx` -- wrap AboutSection and ContactSection in ScrollReveal
7. `src/components/home/FeaturedWork.tsx` -- wrap header in ScrollReveal
8. `src/app/services/page.tsx` -- StaggerRevealGroup for hero, ScrollReveal for grid cards and CTA
9. `src/components/services/ServiceHero.tsx` -- StaggerRevealGroup + RevealItem
10. `src/components/services/FeatureGrid.tsx` -- ScrollReveal for heading + cards
11. `src/components/services/PricingGrid.tsx` -- ScrollReveal for heading + cards
12. `src/components/services/ServiceLayout.tsx` -- ScrollReveal for TransparencySection, ValuePropSection, ServiceCTA
13. `src/app/our-work/page.tsx` -- StaggerRevealGroup for hero, ScrollReveal for CTA
14. `src/components/our-work/ProjectGrid.tsx` -- ScrollReveal per card
15. `src/components/our-work/ProjectCard.tsx` -- remove animate-fade-in-up and animationDelay
16. `src/app/about/page.tsx` -- StaggerRevealGroup for hero
17. `src/components/about/TeamSection.tsx` -- ScrollReveal for heading + cards
18. `src/app/about/team/[slug]/page.tsx` -- ScrollReveal for bio
19. `src/components/about/OtherTeamMembers.tsx` -- ScrollReveal for heading + cards
20. `src/app/contact/page.tsx` -- StaggerRevealGroup for hero, ScrollReveal for ContactForm
21. `src/components/contact/ContactInfo.tsx` -- ScrollReveal per card

### 6.2 Implementation Order

Follow this order to minimize breakage and allow incremental testing:

1. **Phase 1: Create the animation library** (files 1-5)
   - Move ScrollReveal, create StaggerRevealGroup, extract RevealItem
   - Set up re-exports for backward compatibility
   - Verify homepage still works identically

2. **Phase 2: Homepage gaps** (files 6-7)
   - Add ScrollReveal to AboutSection, ContactSection, FeaturedWork header
   - Test: scroll through homepage, verify new sections animate and existing ones are unchanged

3. **Phase 3: Service pages** (files 8-12)
   - Hero, FeatureGrid, PricingGrid, TransparencySection, ValuePropSection, ServiceCTA
   - Test: visit each of the 4 service detail pages + the index page

4. **Phase 4: Our Work page** (files 13-15)
   - Hero, ProjectGrid (replace CSS animation), bottom CTA
   - Test: verify ProjectCard no longer uses CSS animation, framer-motion works

5. **Phase 5: About pages** (files 16-19)
   - About hero, TeamSection, TeamMemberBio, OtherTeamMembers
   - Test: visit /about and /about/team/[slug]

6. **Phase 6: Contact page** (files 20-21)
   - Contact hero, ContactInfo, ContactForm wrapper
   - Test: visit /contact, ensure form still works

### 6.3 Key Constraints

1. **Do NOT convert Server Components to Client Components** unless absolutely unavoidable. The animation wrappers (ScrollReveal, StaggerRevealGroup, RevealItem) are `'use client'` and can be rendered as children of Server Components. This is the React Server Component composition pattern.

2. **Preserve existing functionality.** The `contentVisibility: "auto"` on ProjectGrid cards must be maintained. The `animationDelay` on services index cards must be REMOVED (it's a bug). The `.card-3d` hover on all cards must be kept.

3. **Do NOT add `'use client'` to page files.** Page files (`page.tsx`) should remain Server Components. Import the client animation wrappers and use them as JSX children.

4. **framer-motion bundle size.** The animation components only use `motion`, `useInView`, `useReducedMotion`, and `AnimatePresence` -- all of which are already in the bundle from existing homepage components. No new framer-motion sub-packages need to be imported.

5. **No new CSS keyframe animations.** Everything uses framer-motion springs. The only CSS change is removing the `animate-fade-in-up` class from ProjectCard (which is being replaced with ScrollReveal).

6. **Test reduced motion.** After implementation, test with `prefers-reduced-motion: reduce` enabled in browser dev tools. ALL animated sections should render immediately with no transforms.

### 6.4 Verification Checklist

After implementation, the QA agent should verify:

- [ ] Homepage: AboutSection has scroll-reveal entrance
- [ ] Homepage: ContactSection has scroll-reveal entrance
- [ ] Homepage: FeaturedWork header has scroll-reveal entrance
- [ ] Homepage: All existing animations still work (hero, services, featured grid, dividers)
- [ ] Services index: Hero has staggered entrance (label, h1, description)
- [ ] Services index: Grid cards stagger in with scroll reveal
- [ ] Services index: Bottom CTA has scroll reveal
- [ ] Service detail pages (all 4): Hero has staggered entrance (h1, description, CTA)
- [ ] Service detail pages: FeatureGrid heading + cards have scroll reveal with stagger
- [ ] Service detail pages: PricingGrid heading + cards have scroll reveal with stagger
- [ ] Service detail pages: TransparencySection has scroll reveal (where present)
- [ ] Service detail pages: ValuePropSection has scroll reveal (where present)
- [ ] Service detail pages: ServiceCTA has scroll reveal
- [ ] Our Work: Hero has staggered entrance
- [ ] Our Work: ProjectCards use framer-motion (NOT CSS animate-fade-in-up)
- [ ] Our Work: Bottom CTA has scroll reveal
- [ ] About: Hero has staggered entrance
- [ ] About: TeamSection heading has scroll reveal
- [ ] About: TeamMemberCards stagger in
- [ ] Team Bio: Bio card has scroll reveal entrance
- [ ] Team Bio: Other members heading + cards have scroll reveal with stagger
- [ ] Contact: Hero has staggered entrance
- [ ] Contact: Info cards stagger in
- [ ] Contact: Form has scroll reveal (with slight delay)
- [ ] ALL: prefers-reduced-motion disables all new animations
- [ ] ALL: No layout shift caused by animation wrappers
- [ ] ALL: No hydration errors from client/server component mismatch
- [ ] ALL: Page load performance not degraded (Lighthouse check)

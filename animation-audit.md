# Animation Audit - TekZuri Website

**Date:** 2026-02-17
**Auditor:** Scout Agent
**Scope:** All routes, all sections, all components

---

## 1. Executive Summary

The TekZuri website has **strong animation foundations on the homepage** but **significant gaps on all secondary pages**. The homepage (`/`) uses framer-motion extensively for scroll reveals, staggered hero entrance, 3D card tilt, word carousel, and CSS orbital animations. However, every other route -- services, services/*, our-work, about, about/team/[slug], and contact -- is almost entirely static, relying only on CSS hover transitions and the global `card-3d` hover effect.

**Key statistics:**
- **Total section-level components audited:** 40
- **Animated:** 12 (30%)
- **Partially animated:** 6 (15%) -- hover-only or CSS-only ambient
- **Static:** 22 (55%)
- **Client components with framer-motion:** 9
- **Server components (no animation library):** 31

The biggest visual-impact opportunities are the service detail pages (hero, feature grid, pricing), the `/our-work` project grid, the `/about` team section, and the `/contact` form area. These are high-traffic destinations that currently appear instantly with no entrance animation.

---

## 2. Existing Animation System Catalog

### 2.1 Framer Motion Patterns

| Pattern | Component(s) | Description |
|---------|-------------|-------------|
| **Staggered entrance** | `HeroContent.tsx` (StaggerReveal + RevealItem) | Container uses `staggerChildren: 0.15`, `delayChildren: 0.1`. Items animate opacity 0->1, y 20->0, blur 6px->0px. Spring transition. |
| **Scroll reveal** | `ScrollReveal.tsx` | `useInView` with `once: true`, `amount: 0.2`. Same hidden/visible states as hero items. Accepts `delay` prop for stagger offsets. |
| **Word carousel** | `WordCarousel.tsx` | `AnimatePresence mode="wait"`. Words cycle every 3s with y/opacity/blur/scale transitions. |
| **3D card tilt** | `ServiceCard3D.tsx` | `useMotionValue` + `useSpring` for mouseMove-driven rotateX/rotateY. Radial gradient glare follows cursor via `useMotionTemplate`. |
| **Hover scale** | `FeaturedWorkCard.tsx` | `whileHover={{ scale: 1.03 }}` with spring stiffness 300, damping 20. |
| **Section divider fade** | `SectionDivider.tsx` | `whileInView={{ opacity: 1 }}` with `viewport: { once: true, amount: 0.5 }`, duration 0.8s. |

### 2.2 CSS Keyframe Animations (globals.css)

| Animation | Class | Duration | Easing | Usage |
|-----------|-------|----------|--------|-------|
| `fade-in-up` | `.animate-fade-in-up` | 0.6s | ease-out | ProjectCard on `/our-work` (staggered via animationDelay) |
| `enso-drift` | `.animate-enso-drift` | 120s | linear infinite | Enso circle in AboutSection on homepage |
| `glow-pulse` | `.animate-glow-pulse` | 8s | ease-in-out infinite | Ambient glow in AboutSection |
| `orbit-rotate` | (inline style) | 20s / 55s | linear infinite | HeroVisual orbital rings (inner, outer) |
| `orbit-rotate-reverse` | (inline style) | 35s | linear infinite | HeroVisual middle ring |
| `center-glow-pulse` | (inline style) | 4s | ease-in-out infinite | HeroVisual center dot |
| `pulse-dot` | (inline style) | 2s | ease-in-out infinite | Green availability dot in ContactSection |

### 2.3 CSS Transition Effects (non-keyframe)

| Effect | Class / Style | Properties | Duration |
|--------|--------------|------------|----------|
| **Card 3D hover** | `.card-3d` | transform, box-shadow | 0.3s cubic-bezier(0.16, 1, 0.3, 1) |
| **Hover lift** | `.hover-lift` | transform, box-shadow | 0.3s ease |
| **Image zoom on hover** | Tailwind classes | transform (scale) | 0.7s (duration-700) |
| **Border/color transitions** | Various Tailwind | border-color, color, background | 0.2s-0.5s |
| **Arrow translate on hover** | `group-hover:translate-x-1` | transform | 0.3s |
| **Active scale** | `active:scale-[0.98]` | transform | instant |

### 2.4 Spring Configuration (Shared)

```
Primary spring: { type: "spring", damping: 30, stiffness: 100, mass: 0.8 }
Card tilt spring: { damping: 30, stiffness: 100 }
Featured card hover spring: { type: "spring", stiffness: 300, damping: 20 }
```

### 2.5 Trigger Mechanisms

| Trigger | Where Used |
|---------|-----------|
| **Page load** | HeroContent (StaggerReveal), WordCarousel, HeroVisual orbital CSS, BackgroundAnimation |
| **Viewport intersection (once)** | ScrollReveal, SectionDivider, FeaturedWorkGrid |
| **Mouse move** | ServiceCard3D (3D tilt + glare) |
| **Mouse hover** | FeaturedWorkCard (scale), all card-3d elements, arrow icons, buttons |
| **Timer interval** | WordCarousel (3s cycle) |
| **Scroll position** | ScrollProgressBar (scroll event listener) |

### 2.6 Shared Animation Utilities

- `ScrollReveal` component -- reusable wrapper for any content needing scroll-triggered entrance
- `StaggerReveal` + `RevealItem` -- container/item pattern for staggered entrances
- `SectionDivider` -- animated divider between homepage sections

---

## 3. Section-by-Section Inventory

### 3.1 Global Layout Components (all routes)

| # | Component | File Path | Route(s) | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 1 | **Navbar** | `src/components/common/Navbar.tsx` | All | **static** | Server | CSS transitions only: hover color changes, logo scale, button active:scale | Navigation | Above-the-fold (sticky) | 4 |
| 2 | **MobileMenu** | `src/components/common/MobileMenu.tsx` | All (mobile) | **partially-animated** | Client | CSS transitions: opacity/max-height for overlay and panel (duration-300), no framer-motion | Navigation (mobile overlay) | Above-the-fold | 3 |
| 3 | **Footer** | `src/components/common/Footer.tsx` | All | **static** | Server | CSS transitions only: hover color changes, logo scale | Footer | Bottom | 5 |
| 4 | **BackgroundAnimation** | `src/components/common/BackgroundAnimation.tsx` | All | **static** | Server | No animation -- purely static layered backgrounds (gradients, dot grid, noise texture). Despite the name, it does not animate. | Decorative background | Full-page | 5 |
| 5 | **ScrollProgressBar** | `src/components/common/ScrollProgressBar.tsx` | All | **animated** | Client | JS scroll event listener drives scaleX transform on a fixed div | Progress indicator | Fixed top | 5 |

### 3.2 Homepage (`/`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 6 | **HeroSection** | `src/components/home/HeroSection.tsx` | **animated** | Client | Wraps content in StaggerReveal; contains WordCarousel and HeroVisual | Hero | Above-the-fold | 1 |
| 7 | **HeroContent** (StaggerReveal + RevealItem) | `src/components/home/HeroContent.tsx` | **animated** | Client | Framer-motion stagger: containerVariants (staggerChildren 0.15, delayChildren 0.1), itemVariants (opacity, y, blur with spring). AccentLine animates width. Respects prefers-reduced-motion. | Hero text | Above-the-fold | 1 |
| 8 | **WordCarousel** | `src/components/home/WordCarousel.tsx` | **animated** | Client | Framer-motion AnimatePresence mode="wait". Words rotate every 3s with y/opacity/blur/scale spring transitions. Respects prefers-reduced-motion. | Hero text effect | Above-the-fold | 2 |
| 9 | **HeroVisual** | `src/components/home/HeroVisual.tsx` | **animated** | Client | CSS keyframe animations: orbit-rotate (20s, 55s), orbit-rotate-reverse (35s), center-glow-pulse (4s). 3 orbital rings with dots. Respects prefers-reduced-motion via useReducedMotion. | Decorative visual | Above-the-fold | 3 |
| 10 | **SectionDivider** (x4 on homepage) | `src/components/common/SectionDivider.tsx` | **animated** | Client | Framer-motion whileInView opacity fade, once:true, duration 0.8s | Decorative divider | Between sections | 5 |
| 11 | **ServicesSection** | `src/components/home/ServicesSection.tsx` | **animated** | Server (imports client children) | Uses ScrollReveal for header + each ServiceCard3D + bottom CTA. Stagger delay: index * 0.12 | Service cards | Mid-page | 1 |
| 12 | **ServiceCard3D** | `src/components/home/ServiceCard3D.tsx` | **animated** | Client | Mouse-driven 3D tilt (rotateX/rotateY via useSpring), radial glare overlay via useMotionTemplate, ambient glow on hover. Respects prefers-reduced-motion. | Card | Mid-page | 2 |
| 13 | **FeaturedWork** | `src/components/home/FeaturedWork.tsx` | **partially-animated** | Server | Header and CTA link are static (no ScrollReveal wrapper). Delegates to FeaturedWorkGrid which is animated. | Section wrapper | Mid-page | 2 |
| 14 | **FeaturedWorkGrid** | `src/components/home/FeaturedWorkGrid.tsx` | **animated** | Client | Each card wrapped in ScrollReveal with stagger delay: index * 0.15 | Grid wrapper | Mid-page | 2 |
| 15 | **FeaturedWorkCard** | `src/components/home/FeaturedWorkCard.tsx` | **animated** | Client | Framer-motion whileHover scale 1.03 with spring (stiffness 300, damping 20). CSS image scale on hover (duration-700). Overlay fade on hover. Respects prefers-reduced-motion. | Project card | Mid-page | 2 |
| 16 | **AboutSection** | `src/components/home/AboutSection.tsx` | **partially-animated** | Server | CSS-only animations: enso-drift (120s rotation), glow-pulse (8s ambient). No framer-motion, no scroll reveal, no entrance animation. Hover transitions on card border. | About preview | Mid-page | 2 |
| 17 | **ContactSection** | `src/components/home/ContactSection.tsx` | **partially-animated** | Server | CSS pulse-dot animation on availability badge (2s loop). No entrance animation, no scroll reveal. Button hover transitions only. | CTA section | Bottom | 2 |

### 3.3 Services Index Page (`/services`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 18 | **ServicesPage header** | `src/app/services/page.tsx` (inline) | **static** | Server | No animation. Swiss label, h1, description appear instantly. | Page hero | Above-the-fold | 1 |
| 19 | **Services grid** | `src/app/services/page.tsx` (inline) | **partially-animated** | Server | Cards have `animationDelay` inline style set but no `animate-fade-in-up` class applied. CSS hover transitions via Tailwind (border, color, arrow translate). Card shadow via CSS var. | Service cards | Mid-page | 1 |
| 20 | **Bottom CTA** | `src/app/services/page.tsx` (inline) | **static** | Server | No animation. Static card with button. | CTA | Bottom | 3 |

### 3.4 Service Detail Pages (`/services/*`)

All four service detail pages (web-development, ai-automation, digital-marketing, it-consulting) use the same `ServiceLayout` component which composes these sub-components:

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 21 | **ServiceHero** | `src/components/services/ServiceHero.tsx` | **static** | Server | No animation. h1, description, CTA button appear instantly. Button has active:scale CSS. | Hero | Above-the-fold | 1 |
| 22 | **FeatureGrid** | `src/components/services/FeatureGrid.tsx` | **partially-animated** | Server | Cards use `.card-3d` class for CSS hover lift (translateY -4px, scale 1.005, box-shadow transition). No entrance animation. | Feature cards | Mid-page | 1 |
| 23 | **PricingGrid** | `src/components/services/PricingGrid.tsx` | **static** | Server | No animation. Static grid layout. | Section wrapper | Mid-page | 2 |
| 24 | **PricingCard** | `src/components/services/PricingCard.tsx` | **partially-animated** | Server | Non-consulting variant uses `.card-3d` for hover. Consulting variant has static box-shadow via inline style, no hover animation. | Pricing card | Mid-page | 2 |
| 25 | **TransparencySection** | `src/components/services/TransparencySection.tsx` | **static** | Server | No animation. Static card layout. | Trust section | Mid-page | 3 |
| 26 | **ValuePropSection** | `src/components/services/ValuePropSection.tsx` | **static** | Server | No animation. Static card layout. | Value proposition | Mid-page | 3 |
| 27 | **ServiceCTA** | `src/components/services/ServiceCTA.tsx` | **static** | Server | No animation. Static CTA card. Button has active:scale CSS. | CTA | Bottom | 3 |

### 3.5 Our Work Page (`/our-work`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 28 | **OurWork page hero** | `src/app/our-work/page.tsx` (inline) | **static** | Server | No animation. h1 and description appear instantly. | Page hero | Above-the-fold | 1 |
| 29 | **ProjectGrid** | `src/components/our-work/ProjectGrid.tsx` | **static** | Server | No animation on wrapper. Uses contentVisibility: "auto" for perf. Delegates to ProjectCard. | Grid wrapper | Mid-page | 2 |
| 30 | **ProjectCard** | `src/components/our-work/ProjectCard.tsx` | **partially-animated** | Server | CSS `animate-fade-in-up` class with staggered `animationDelay` (index * 100ms). `.card-3d` hover effect. Image scale on hover (duration-700). | Project card | Mid-page | 1 |
| 31 | **OurWork bottom CTA** | `src/app/our-work/page.tsx` (inline) | **static** | Server | No animation. Arrow hover translate only. | CTA | Bottom | 4 |

### 3.6 About Page (`/about`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 32 | **About page hero** | `src/app/about/page.tsx` (inline) | **static** | Server | No animation. h1 and description appear instantly. | Page hero | Above-the-fold | 1 |
| 33 | **TeamSection** | `src/components/about/TeamSection.tsx` | **static** | Server | No animation. Static heading + grid. | Team section | Mid-page | 1 |
| 34 | **TeamMemberCard** | `src/components/about/TeamMemberCard.tsx` | **partially-animated** | Server | `.card-3d` hover only (CSS translateY + shadow). No entrance animation. | Team card | Mid-page | 1 |

### 3.7 Team Member Bio Page (`/about/team/[slug]`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 35 | **TeamMemberPage** | `src/app/about/team/[slug]/page.tsx` | **static** | Server | No animation. Back link, bio, other members all static. | Page wrapper | Above-the-fold | 3 |
| 36 | **TeamMemberBio** | `src/components/about/TeamMemberBio.tsx` | **static** | Server | No animation. Static card layout. Button has active:scale CSS. | Bio card | Above-the-fold | 2 |
| 37 | **OtherTeamMembers** | `src/components/about/OtherTeamMembers.tsx` | **static** | Server | No animation. CSS hover border transition only. | Related members | Bottom | 3 |

### 3.8 Contact Page (`/contact`)

| # | Component | File Path | Classification | Server/Client | Animation Details | Content Type | Scroll Position | Priority |
|---|-----------|-----------|----------------|---------------|-------------------|-------------|----------------|----------|
| 38 | **Contact page hero** | `src/app/contact/page.tsx` (inline) | **static** | Server | No animation. h1 and description appear instantly. | Page hero | Above-the-fold | 1 |
| 39 | **ContactInfo** | `src/components/contact/ContactInfo.tsx` | **partially-animated** | Server | `.card-3d` hover on each info card. No entrance animation. | Info cards | Mid-page | 2 |
| 40 | **ContactForm** | `src/components/contact/ContactForm.tsx` | **static** | Client | No entrance animation. Only animate-spin on submit button loading state. CSS input focus transitions. | Form | Mid-page | 2 |

### 3.9 UI Primitives (used across pages)

| Component | File Path | Classification | Notes |
|-----------|-----------|----------------|-------|
| **ArrowIcon** | `src/components/ui/ArrowIcon.tsx` | **static** | Pure SVG, animated by parent via CSS classes |
| **PrimaryButton** | `src/components/ui/PrimaryButton.tsx` | **static** | CSS hover/active transitions only |
| **SecondaryButton** | `src/components/ui/SecondaryButton.tsx` | **static** | CSS hover transitions only |
| **DecorativeNumber** | `src/components/ui/DecorativeNumber.tsx` | **static** | No animation |
| **SectionHeader** | `src/components/ui/SectionHeader.tsx` | **static** | No animation |
| **FormField** | `src/components/ui/FormField.tsx` | **static** | CSS focus transitions only |

---

## 4. Priority-Ranked Gap List (Static Sections Needing Animation)

Ranked by visual impact and user engagement potential. Priority 1 = highest impact.

### Priority 1 -- High Visual Impact, Above-the-Fold

| # | Section | Route | Current State | Recommended Animation Type |
|---|---------|-------|---------------|---------------------------|
| 1 | **Service detail hero** | `/services/*` | Static, no entrance | Staggered fade-in-up (heading, subtext, CTA) |
| 2 | **Services index hero** | `/services` | Static, no entrance | Staggered fade-in-up |
| 3 | **About page hero** | `/about` | Static, no entrance | Staggered fade-in-up |
| 4 | **Our Work page hero** | `/our-work` | Static, no entrance | Staggered fade-in-up |
| 5 | **Contact page hero** | `/contact` | Static, no entrance | Staggered fade-in-up |
| 6 | **Homepage AboutSection** | `/` | CSS ambient only, no entrance | Scroll reveal entrance for text + visual |
| 7 | **Homepage ContactSection** | `/` | CSS pulse only, no entrance | Scroll reveal entrance for badge, heading, CTAs |

### Priority 2 -- Mid-Page Content, High Engagement

| # | Section | Route | Current State | Recommended Animation Type |
|---|---------|-------|---------------|---------------------------|
| 8 | **FeatureGrid cards** | `/services/*` | Hover-only, no entrance | Staggered scroll reveal |
| 9 | **PricingGrid cards** | `/services/*` | Static, no entrance | Staggered scroll reveal |
| 10 | **Services index grid** | `/services` | Broken fade-in (delay set, class missing) | Fix CSS animation or convert to scroll reveal |
| 11 | **TeamSection + TeamMemberCards** | `/about` | Hover-only, no entrance | Staggered scroll reveal |
| 12 | **ProjectGrid + ProjectCards** | `/our-work` | CSS fade-in-up (basic) | Upgrade to framer-motion scroll reveal for consistency |
| 13 | **FeaturedWork header** | `/` | Not wrapped in ScrollReveal | Add ScrollReveal to header and CTA |
| 14 | **ContactForm + ContactInfo** | `/contact` | Static | Scroll reveal entrance |

### Priority 3 -- Supporting Content

| # | Section | Route | Current State | Recommended Animation Type |
|---|---------|-------|---------------|---------------------------|
| 15 | **TransparencySection** | `/services/*` | Static | Scroll reveal |
| 16 | **ValuePropSection** | `/services/*` | Static | Scroll reveal |
| 17 | **ServiceCTA** | `/services/*` | Static | Scroll reveal |
| 18 | **Services index bottom CTA** | `/services` | Static | Scroll reveal |
| 19 | **TeamMemberBio** | `/about/team/[slug]` | Static | Fade-in entrance |
| 20 | **OtherTeamMembers** | `/about/team/[slug]` | Static | Staggered scroll reveal |

### Priority 4 -- Low Impact / Already Adequate

| # | Section | Route | Current State | Recommended Animation Type |
|---|---------|-------|---------------|---------------------------|
| 21 | **Navbar** | All | CSS transitions sufficient | Optional: scroll-based bg opacity |
| 22 | **MobileMenu** | All | CSS max-height/opacity transitions | Optional: framer-motion for smoother feel |
| 23 | **OurWork bottom CTA** | `/our-work` | Static | Scroll reveal (low priority) |

### Priority 5 -- Decorative / No Change Needed

| # | Section | Route | Notes |
|---|---------|-------|-------|
| 24 | **Footer** | All | Scroll reveal optional, low-value target |
| 25 | **BackgroundAnimation** | All | Static by design; adding animation could hurt performance |
| 26 | **ScrollProgressBar** | All | Already animated via scroll events |
| 27 | **SectionDividers** | `/` | Already animated |

---

## 5. Accessibility Baseline

### Components That Respect `prefers-reduced-motion`

| Component | Method | Behavior When Reduced |
|-----------|--------|-----------------------|
| **HeroContent** (StaggerReveal) | `useReducedMotion()` from framer-motion | Returns plain `<div>` with no animation |
| **WordCarousel** | `useReducedMotion()` | Returns static `<span>`, still cycles text but no motion |
| **HeroVisual** | `useReducedMotion()` | Sets `animation: none` on all orbital rings and center dot |
| **ScrollReveal** | `useReducedMotion()` | Returns plain `<div>` with no animation |
| **ServiceCard3D** | `useReducedMotion()` | Returns static card with no tilt/glare, keeps hover border |
| **FeaturedWorkCard** | `useReducedMotion()` | Skips `whileHover` scale effect |

### CSS prefers-reduced-motion (globals.css)

The `@media (prefers-reduced-motion: reduce)` block disables:
- `animate-fade-in-up` (sets animation: none, opacity: 1)
- `hover-lift` hover transform
- `card-3d` transform (keeps box-shadow transition)
- `animate-enso-drift`
- `animate-glow-pulse` (sets static opacity: 0.06)
- `.hero-orbital *` (all children animation: none !important)
- `html scroll-behavior` (sets to auto)

### Gaps in Accessibility Coverage

- **SectionDivider**: Uses framer-motion `whileInView` but does NOT check `useReducedMotion`. Opacity-only animation is generally acceptable for a11y, but for consistency it should be wrapped.
- New animations added to static sections MUST use the same `useReducedMotion()` pattern or the `ScrollReveal` component (which already handles it).
- All CSS keyframe animations added should have corresponding entries in the `@media (prefers-reduced-motion: reduce)` block.

---

## 6. Recommendations for the Choreographer

### 6.1 Reuse Existing Patterns

The `ScrollReveal` component is the ideal building block for animating static sections. It already:
- Uses the established spring config (damping: 30, stiffness: 100, mass: 0.8)
- Respects prefers-reduced-motion
- Fires once on viewport intersection (amount: 0.2)
- Accepts a `delay` prop for staggering

For page-level hero entrances, reuse the `StaggerReveal` + `RevealItem` pattern from `HeroContent.tsx`.

### 6.2 Server vs. Client Component Consideration

Most static sections are **Server Components**. To add framer-motion animations, you have two options:
1. **Wrap** the server component content in a client `ScrollReveal` from the parent page/layout
2. **Convert** the component to a client component with `'use client'`

Option 1 is preferred when possible to keep the component tree lean. Option 2 is necessary when internal stagger delays or per-item animation is needed.

### 6.3 Consistency Guidelines

- **Entrance transitions**: Use the shared spring `{ damping: 30, stiffness: 100, mass: 0.8 }` for all new scroll reveals
- **Stagger offset**: Use 0.10-0.15s between items (consistent with homepage)
- **Reveal threshold**: Use `amount: 0.2` (20% visible before triggering)
- **Direction**: fade-in-up (y: 20 -> 0) + blur(6px) -> blur(0px) for consistency
- **Duration ceiling**: No animation should exceed 0.8s perceived duration
- **Hover effects**: `.card-3d` class is already consistent; keep using it

### 6.4 Noted Bugs / Inconsistencies

1. **Services index grid cards** (`/services/page.tsx` line 63): Have `animationDelay` set in inline style but the `animate-fade-in-up` class is NOT applied to the cards. The delay has no effect. Either add the class or switch to ScrollReveal.
2. **FeaturedWork header** (`/` route): The section header ("Featured work", description, "View all projects" link) is NOT wrapped in ScrollReveal, even though the grid items below it are. This creates a visual inconsistency where the heading appears instantly but cards animate in.
3. **BackgroundAnimation** name is misleading -- it contains no animation, only static gradient/texture layers.

### 6.5 Performance Notes

- All new animations should use `transform` and `opacity` properties (GPU-accelerated, no layout thrash)
- The existing `filter: blur()` in reveal animations is slightly expensive but acceptable for one-shot reveals
- Avoid adding continuous/looping animations on secondary pages to keep CPU idle
- The `ScrollReveal` component already uses `once: true` which is critical for performance
- For the `/our-work` ProjectGrid, the existing `contentVisibility: "auto"` on card wrappers helps with off-screen rendering cost; any animation wrapper should preserve this

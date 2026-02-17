# Tekzuri Animation Sprint — Specialized Agent Team Plan

---

## Mission

Identify every unanimated section across the Tekzuri website and bring them to life with purposeful, polished animations — while preserving the existing brand, content, and layout. This is a surgical strike: no redesign, no restructuring — just motion craftsmanship applied where it's missing.

---

## Required Skills

All agents **must** read and internalize these before writing a single line of code:

| Skill | Path | Why |
|---|---|---|
| **Frontend Design** | `/mnt/skills/public/frontend-design/SKILL.md` | Motion principles, scroll-triggered reveals, hover states, micro-interactions, visual depth through animation |
| **UX Principles** | Applied throughout | Animation must serve UX — guide attention, communicate state, reduce cognitive load, never distract |

### Animation Philosophy (from Frontend Design Skill)

> *"Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise."*

Every animation must pass the **Kaizen test**: Does this motion *improve* the user's experience, or is it decoration? If it doesn't guide, delight, or clarify — cut it.

---

## Constraints (Non-Negotiable)

- **Zero changes** to Tekzuri's color palette, font stack, or content
- **Zero changes** to existing layout structure or component hierarchy
- **Zero changes** to sections that are already animated (preserve as-is)
- **Only add or enhance** — never remove or restructure
- All animations must be **performant** (GPU-accelerated, no layout thrash, no jank)
- All animations must be **accessible** (respect `prefers-reduced-motion`)
- Animation library/approach must be **consistent** with what's already in use

### Next.js Component Architecture (Critical)

**Preserve SSR/SEO by default. Never convert a Server Component to a Client Component just to add animation.**

The correct pattern is **composition** — Server Components render all static content (text, images, metadata) for full SSR and SEO indexing, while animation logic lives in dedicated, thin Client Components that wrap or compose with the server-rendered content.

```
✅ CORRECT — Content stays server-rendered, animation is a client wrapper:

// components/animations/ScrollReveal.tsx   ← 'use client' (thin animation shell)
'use client';
export function ScrollReveal({ children, ...motionProps }) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}

// app/page.tsx                             ← Server Component (static content, full SSR)
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Page() {
  return (
    <ScrollReveal initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
      <section>
        <h2>Static SEO-crawlable heading</h2>
        <p>Server-rendered content preserved for SSR and SEO.</p>
      </section>
    </ScrollReveal>
  );
}
```

```
❌ WRONG — Converting the page/section to a client component:

// app/page.tsx
'use client';  // ← NEVER do this just to use Framer Motion
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.section animate={...}>
      <h2>This heading is now invisible to crawlers at initial load</h2>
    </motion.section>
  );
}
```

**Rules:**
1. Page-level components (`page.tsx`, `layout.tsx`) **must remain Server Components**
2. Section components that contain static content **should remain Server Components**
3. Animation logic is extracted into **dedicated Client Component wrappers** in a `components/animations/` directory (or similar)
4. Client animation wrappers receive **`children`** (server-rendered content passed through) — they add motion, not content
5. If a section already has `'use client'` for interactivity (forms, state), animation can be added directly — no need to extract
6. Hover/micro-interaction components (animated buttons, cards) can be Client Components since they're leaf nodes with no SEO-critical content beneath them

---

## Team Structure

```
┌──────────────────────────────────────────────┐
│              TEAM LEAD (You)                 │
│   Coordinates handoffs · Gates each phase    │
│   Enforces Kaizen checkpoints                │
└──────────┬───────────────────────────────────┘
           │
    ┌──────┼──────────────┬────────────────────┐
    ▼      ▼              ▼                    ▼
┌────────┐┌────────────┐┌───────────────────┐┌──────────────┐
│ SCOUT  ││ CHOREO-    ││ MOTION            ││ POLISH       │
│        ││ GRAPHER    ││ ENGINEER          ││ INSPECTOR    │
└────────┘└────────────┘└───────────────────┘└──────────────┘
```

---

### Agent 1 — Scout (Animation Audit & Gap Analysis)

**Specialization:** Forensic codebase analysis — finds exactly what moves and what doesn't.

**Skills to read first:** Frontend Design SKILL.md (to understand what "good motion" looks like and what gaps to flag).

**Tasks:**

1. **Map every section** across all pages — build a complete section inventory with identifiers (component name, CSS selector, route)
2. **Classify each section** into one of three states:
   - `animated` — already has entrance/scroll/hover animation (document what it does)
   - `partially-animated` — has some motion but is incomplete or inconsistent
   - `static` — no animation whatsoever
3. **Audit component boundaries (Server vs Client):**
   - For each section, document whether it's currently a **Server Component** or **Client Component** (`'use client'`)
   - Identify which static sections can receive animation via a **client wrapper** without converting the section itself
   - Flag any sections that are *already* Client Components (animation can be added directly)
   - Note page-level components (`page.tsx`, `layout.tsx`) that must stay as Server Components
4. **Catalog the existing animation system:**
   - Library in use (Framer Motion, GSAP, AOS, CSS-only, Intersection Observer, etc.)
   - Easing curves and duration patterns already established
   - Trigger mechanisms (scroll, viewport entry, load, hover)
   - Any shared animation utilities, client wrapper components, or config already in place
5. **UX context for each static section:**
   - What is the section's purpose? (hero, feature grid, testimonial, CTA, footer, etc.)
   - Where does it sit in the scroll journey?
   - What content type does it contain? (text, cards, images, icons, stats, forms)
6. **Flag priority:** Rank unanimated sections by visual impact (above-the-fold first, high-engagement sections next, footer/utility last)
7. **Accessibility baseline:** Check if existing animations respect `prefers-reduced-motion`

**Output:** `animation-audit.md` — a complete inventory with classification, **server/client component status per section**, priority ranking, existing animation patterns, and UX context for every gap.

**Completion Gate:** Team Lead reviews and approves the audit. No ambiguity about what's animated and what isn't.

---

### Agent 2 — Choreographer (Animation Design & Sequencing)

**Specialization:** Designs the animation *experience* — what moves, when, how, and why. Thinks in sequences and storytelling, not individual tweens.

**Skills to read first:** Frontend Design SKILL.md (motion, spatial composition, visual depth), UX principles (attention flow, cognitive load, progressive disclosure).

**Depends on:** Scout's approved `animation-audit.md`

**Tasks:**

1. **Define the motion language** — formalize what already exists into a coherent system:
   - Standard easing curve(s) to reuse
   - Duration scale (fast: 200ms, normal: 400ms, slow: 600ms, etc.)
   - Stagger interval for grouped elements
   - Entrance direction conventions (e.g., content enters from bottom, images from side)
2. **Design animation for every `static` and `partially-animated` section:**
   - **Type:** Scroll-reveal, staggered entrance, parallax, counter/number roll, hover state, background effect, etc.
   - **Sequence:** What enters first? What follows? How does stagger flow?
   - **Trigger:** Viewport intersection threshold, scroll position, load event
   - **Component strategy:** For each animation, specify:
     - Does the section stay as a Server Component with a client animation wrapper? (default)
     - Or is it already a Client Component where animation can be added inline?
     - What reusable client wrapper to use? (e.g., `<ScrollReveal>`, `<StaggerGroup>`, `<CounterAnimation>`)
   - **UX rationale:** Why this animation serves the section's purpose (e.g., "Stats counter draws the eye to key metrics; staggered card reveal creates scannable rhythm")
3. **Plan the animation component library** — define the set of reusable `'use client'` wrapper components:
   - `ScrollReveal` — generic viewport-triggered entrance (opacity, transform, configurable)
   - `StaggerChildren` — wraps a group, staggers child entrances
   - `CountUp` — animated number counter
   - `ParallaxLayer` — scroll-linked transform offset
   - Others as the choreography demands
   - Each wrapper must accept `children` (server content) and motion config as props — **zero content inside the wrapper itself**
4. **Design scroll narrative:** Ensure the full-page scroll feels like a composed journey, not random sections popping in. Apply the Frontend Design skill principle: *"one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions."*
4. **Hover & micro-interaction design** for interactive elements (buttons, cards, links, nav items) that are currently flat
5. **Reduced-motion fallback plan** — what each animation degrades to when `prefers-reduced-motion: reduce` is active (e.g., instant reveal with opacity only, no transforms)
6. **Performance budget:** Flag any animation that risks jank (complex parallax, heavy SVG morphing) and propose GPU-friendly alternatives

**Output:** `animation-choreography.md` — section-by-section animation specifications with motion language tokens, sequencing diagrams, UX rationale, and reduced-motion fallbacks.

**Completion Gate:** Team Lead reviews choreography for consistency, UX intent, and feasibility. No animation exists "just because" — every motion has a stated purpose.

---

### Agent 3 — Motion Engineer (Implementation)

**Specialization:** Translates choreography into production-grade, performant animation code. Writes clean, maintainable, GPU-optimized motion.

**Skills to read first:** Frontend Design SKILL.md (motion implementation, backgrounds & visual details, spatial composition through code), UX implementation patterns.

**Depends on:** Choreographer's approved `animation-choreography.md`

**Tasks:**

1. **Build the animation component library first (`components/animations/`):**
   - Each component is a `'use client'` wrapper — thin, reusable, zero content
   - Implements the wrappers defined in the choreography (e.g., `ScrollReveal`, `StaggerChildren`, `CountUp`, `ParallaxLayer`)
   - Each wrapper accepts `children` + motion config props
   - All wrappers include `prefers-reduced-motion` handling internally
   - Export from a barrel file for clean imports
2. **Extend (never replace) the existing animation system:**
   - Use the same library/approach already in the codebase
   - Define motion tokens as constants/config (durations, easings, thresholds) matching the choreography spec
   - If reusable animation hooks/utilities already exist, extend them rather than duplicating
3. **Apply animations section-by-section, in priority order, following the Server/Client pattern:**
   - **Server Components (most sections):** Import the appropriate client animation wrapper → wrap the existing static JSX with it → pass motion config as props. The section's `page.tsx` or section component **stays as a Server Component**. Content remains server-rendered and SEO-crawlable.
   - **Existing Client Components:** Add animation directly (Framer Motion, hooks, etc.) — no wrapper needed since `'use client'` is already declared.
   - **Never add `'use client'` to page-level files** (`page.tsx`, `layout.tsx`) or to section components that contain static, SEO-critical content.
   
   Animation types to implement per choreography:
   - Scroll-triggered entrance animations (viewport intersection)
   - Staggered reveals for grouped elements (cards, features, grid items)
   - Number/stat counters with easing
   - Parallax or layered depth effects where specified
   - Hover states and micro-interactions for buttons, cards, links
   - Background atmospheric effects (subtle gradients, grain, floating elements) if specified
4. **Respect the Monozukuri principle — craftsmanship in every detail:**
   - Easing curves feel natural, not robotic
   - Stagger timing creates rhythm, not chaos
   - Elements never "pop" — they arrive with intention
   - No animation fires twice on the same element (use `once` / `triggerOnce`)
   - Scroll-triggered animations use appropriate thresholds (not too eager, not too late)
4. **Performance discipline:**
   - Only animate `transform` and `opacity` (compositor-friendly properties)
   - Use `will-change` sparingly and only where needed
   - Lazy-load heavy animation assets
   - Test at 60fps — if it drops, simplify
5. **Accessibility implementation:**
   - Wrap all animations with `prefers-reduced-motion` media query or equivalent
   - Reduced-motion fallback: opacity fade-in only, no transforms, instant or very short duration
   - Ensure no animation creates seizure risk (no rapid flashing, no strobing)

**Output:** Working code with all animations implemented, committed in logical increments (one section or page at a time).

**Completion Gate:** Build compiles. Every previously-static section now animates per the choreography spec. No regressions on already-animated sections.

---

### Agent 4 — Polish Inspector (QA & Refinement)

**Specialization:** Obsessive quality verification — ensures every animation feels right, performs well, and serves the user. The team's quality conscience.

**Skills to read first:** Frontend Design SKILL.md (to validate against quality standards — "distinctive, production-grade, avoids generic AI aesthetics"), UX evaluation criteria.

**Runs in parallel with:** Motion Engineer (continuous review loop).

**Tasks:**

1. **Animation completeness check:**
   - Cross-reference every section in `animation-audit.md` against the implemented code
   - Confirm every `static` section is now animated
   - Confirm every `partially-animated` section is now complete
   - Confirm every `animated` section is untouched/preserved
2. **Motion quality review (Frontend Design Skill standards):**
   - Do animations feel intentional and distinctive, or generic and formulaic?
   - Is there a coherent scroll narrative, or are sections randomly popping in?
   - Do stagger timings create pleasant rhythm?
   - Are easing curves smooth and natural?
   - Do hover states surprise and delight without being distracting?
   - Is there visual depth created through layered motion?
3. **UX validation:**
   - Do animations guide attention to the right content?
   - Is any animation *distracting* from the content it's meant to support?
   - Does the scroll journey feel composed or chaotic?
   - Are interactive elements (buttons, cards, nav) clearly communicating state through motion?
   - Mobile experience: are animations appropriate for touch (no hover-dependent reveals)?
4. **Performance audit:**
   - Lighthouse performance score (target: no regression from current)
   - 60fps validation on scroll (Chrome DevTools Performance tab)
   - No layout shift caused by animations (CLS check)
   - No unnecessary repaints on static content
5. **Accessibility verification:**
   - Enable `prefers-reduced-motion: reduce` — confirm all animations gracefully degrade
   - No rapid flashing or strobing effects
   - Screen reader test: animations don't interfere with content reading order
6. **Cross-environment testing:**
   - Desktop: Chrome, Firefox, Safari
   - Mobile: iOS Safari, Android Chrome
   - Responsive breakpoints: animations adapt appropriately (simpler on mobile if needed)
7. **Regression check:**
   - Previously animated sections behave identically to before
   - No content, layout, color, or typography changes anywhere
   - All routes, links, and interactive elements still functional
8. **Server/Client Component boundary audit:**
   - Verify no `page.tsx` or `layout.tsx` files were converted to Client Components
   - Verify no section components with static/SEO content were given `'use client'`
   - Confirm all animation logic lives in dedicated `components/animations/` client wrappers
   - Validate that server-rendered HTML contains all static text content (view source / curl — content must be in the initial HTML payload, not hydrated client-side)
   - Check that animation wrappers are thin (no content, only motion logic + `children`)

**Output:** `animation-verification-report.md` — section-by-section pass/fail with evidence (screenshots, performance metrics, accessibility results), plus a punch list of refinements needed.

**Completion Gate:** All checks green. Zero regressions. Every animation serves its UX purpose. Motion Engineer addresses any punch list items before final sign-off.

---

## Workflow Sequence

```
Phase 1: Scout ────────────────────────────────► animation-audit.md ✓
                                                   │
Phase 2: Choreographer (reads audit) ──────────► animation-choreography.md ✓
                                                   │
Phase 3: Motion Engineer + Polish Inspector ───► animated codebase + verification-report.md
         (parallel — build & review loop)          │
                                                   │
Phase 4: Team Lead final review ───────────────► Ship 🚀
```

---

## Kaizen Checkpoints

| Gate | Criteria | Owner |
|---|---|---|
| Audit approval | Every section classified, server/client status documented, no unknowns, priority ranked | Team Lead |
| Choreography approval | Every animation has UX rationale, component strategy defined (wrapper vs inline), motion language consistent, reduced-motion planned | Team Lead |
| Per-section sign-off | Each section's animation reviewed by Polish Inspector before moving to next | Motion Engineer + Polish Inspector |
| SSR integrity gate | No `page.tsx`/`layout.tsx` converted to client, all static content present in initial HTML payload | Polish Inspector |
| Performance gate | No Lighthouse regression, 60fps on scroll, no CLS | Polish Inspector |
| Accessibility gate | `prefers-reduced-motion` tested, no seizure risks | Polish Inspector |
| Final verification | All sections animated, zero regressions, SSR intact, report complete | Team Lead |

Small, verified increments. If any gate fails, the responsible agent iterates before the team moves forward. **No big-bang deploys — animate, verify, advance.**

---

## Spawn Prompt

```
Create an agent team for animating the remaining static sections of the Tekzuri website.

All agents must read /mnt/skills/public/frontend-design/SKILL.md before 
writing any code. Apply motion principles (scroll-triggered reveals, staggered 
entrances, hover states, visual depth through animation) and UX best practices 
throughout.

Spawn 4 specialized teammates:

1. "scout" — audit every section across the site, classify as animated / 
   partially-animated / static, catalog the existing animation system, 
   and priority-rank all gaps. Output: animation-audit.md

2. "choreographer" — after scout completes, design the animation experience 
   for every static section: what moves, when, how, and why. Formalize 
   the motion language, plan scroll narrative, design reduced-motion 
   fallbacks. Output: animation-choreography.md

3. "motion-engineer" — after choreography is approved, implement all 
   animations using the existing animation system, in priority order. 
   GPU-optimized, accessible, 60fps. Build incrementally.

4. "polish-inspector" — run alongside motion-engineer, continuously 
   verifying animation quality, UX intent, performance (60fps, no CLS), 
   accessibility (prefers-reduced-motion), and zero regressions.

Constraints: 
- Only ADD animations to static/incomplete sections
- Never modify already-animated sections
- Never change colors, fonts, content, or layout
- Use the same animation library/approach already in the codebase
- Every animation must have a UX purpose — no decoration for decoration's sake
- Respect prefers-reduced-motion for all new animations

Next.js Architecture (CRITICAL):
- Static content MUST stay in Server Components for full SSR/SEO
- Extract all animation logic into dedicated 'use client' wrapper components
  in a components/animations/ directory
- Animation wrappers receive children (server content) — they add motion, 
  not content
- NEVER add 'use client' to page.tsx, layout.tsx, or section components 
  with SEO-critical static content
- If a section is already a Client Component, animation can be added inline
```
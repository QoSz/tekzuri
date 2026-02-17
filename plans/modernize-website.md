# Tekzuri Website Modernization — Agent Team Plan

---

## Required Skills

All agents must read and follow these skill files before writing any code:

- **Frontend Design** (`/mnt/skills/public/frontend-design/SKILL.md`) — Production-grade, distinctive UI that avoids generic AI aesthetics. Covers typography, color systems, motion/animation, spatial composition, and visual depth.
- **UX Principles** — Every agent must consider purpose, audience, accessibility, and interaction patterns. Navigation, information hierarchy, and responsiveness must be intentional, not an afterthought.

**Skill constraint:** The frontend-design skill encourages bold, unique choices — but in this project, those choices must operate *within* Tekzuri's existing brand (colors, fonts). Creativity applies to layout, motion, spatial composition, and micro-interactions — not to palette or typography overrides.

---

## Team Structure

```
┌─────────────────────────────────────┐
│           TEAM LEAD (You)           │
│  Coordinates tasks, gates approvals │
└──────────┬──────────────────────────┘
           │
    ┌──────┼──────────┬───────────────┐
    ▼      ▼          ▼               ▼
┌───────┐┌─────────┐┌──────────────┐┌────────────┐
│EXPLORE││IMPROVE  ││ IMPLEMENT    ││  VERIFY    │
│ Agent ││ Agent   ││ Agent        ││  Agent     │
└───────┘└─────────┘└──────────────┘└────────────┘
```

### Agent 1 — Explore (Discovery & Audit)

**Goal:** Map the current Tekzuri codebase and extract design tokens.

**Skills to read first:** Frontend Design SKILL.md (to know what to look for), UX audit principles.

**Tasks:**
- Crawl repo structure — identify frameworks, bundler, dependencies
- Extract the full color scheme (hex/RGB values, CSS variables, Tailwind config)
- Extract typography (font families, weights, sizes, line-heights)
- Catalog all existing content (copy, images, metadata, routes)
- Document current component tree and page hierarchy
- Audit current UX: navigation flow, information architecture, CTAs, mobile experience
- Flag technical debt, accessibility issues, and performance bottlenecks
- Output a `discovery-report.md` with all findings

**Completion gate:** `discovery-report.md` reviewed and approved.

---

### Agent 2 — Improve (Architecture & Design)

**Goal:** Propose a modern architecture and UX improvements that preserve Tekzuri's brand identity.

**Skills to read first:** Frontend Design SKILL.md (design thinking, spatial composition, motion guidelines), UX best practices.

**Depends on:** Explore agent's `discovery-report.md`

**Tasks:**
- Define target stack (e.g. Next.js/Astro, Tailwind, component library)
- Create a design token file locking in Tekzuri's current colors and fonts
- Apply frontend-design skill principles: plan distinctive layouts, purposeful motion/animations, visual depth, and spatial composition — all within the existing brand
- Propose UX improvements: navigation, information hierarchy, interaction patterns, responsive breakpoints, accessibility enhancements
- Propose component-based architecture with clear file structure
- Plan SEO preservation (URLs, meta, structured data)
- Write an `improvement-plan.md` with migration steps, risks, and rollback strategy

**Constraints:**
- Zero deviation from Tekzuri's existing color palette
- Zero deviation from Tekzuri's existing font stack
- All current content must carry over 1:1
- Creative freedom applies to: layout, animations, spacing, composition, micro-interactions, UX flow

**Completion gate:** `improvement-plan.md` and `design-tokens.json` reviewed and approved.

---

### Agent 3 — Implement (Build & Migrate)

**Goal:** Execute the modernization with production-grade frontend quality.

**Skills to read first:** Frontend Design SKILL.md (aesthetics guidelines, motion, backgrounds & visual details), UX implementation patterns.

**Depends on:** Improve agent's approved plan and tokens.

**Tasks:**
- Scaffold the new project using the approved stack
- Implement design tokens (Tekzuri colors, typography) as the foundational config
- Build reusable, polished components (header, footer, sections, CTA blocks)
- Apply frontend-design skill: distinctive spatial composition, scroll-triggered animations, hover states, layered visual depth, atmospheric backgrounds — all using Tekzuri's palette
- Implement UX improvements: intuitive navigation, clear information hierarchy, smooth transitions, accessible interactive elements
- Migrate all page content, preserving copy verbatim
- Implement responsive design with intentional breakpoints
- Optimize assets (images, fonts, lazy loading)
- Ensure all existing routes and links are preserved

**Completion gate:** Build compiles, all pages render with correct content, design feels polished and intentional.

---

### Agent 4 — Verify (QA & Validation)

**Goal:** Confirm nothing was lost, UX improved, and frontend quality is production-grade.

**Skills to read first:** Frontend Design SKILL.md (to validate against quality standards), UX evaluation criteria.

**Runs in parallel with:** Implement agent (continuous review).

**Tasks:**
- Visual regression testing — compare old vs new screenshots
- Validate color palette matches Tekzuri's original (automated hex comparison)
- Validate font rendering matches original
- Content diff — confirm no copy was altered or lost
- UX review: test navigation flows, interaction patterns, mobile experience, form usability
- Frontend quality check: animations are smooth, no layout jank, no generic AI aesthetics
- Run Lighthouse audit (performance, accessibility, SEO, best practices)
- Cross-browser and responsive testing
- Check all links, forms, and interactive elements
- Output a `verification-report.md` with pass/fail and evidence

**Completion gate:** All checks green in `verification-report.md`.

---

## Workflow Sequence

```
Phase 1: Explore ──────────────────────────► discovery-report.md ✓
Phase 2: Improve (reads discovery-report) ─► improvement-plan.md + design-tokens.json ✓
Phase 3: Implement + Verify (parallel) ────► modernized codebase + verification-report.md ✓
Phase 4: Team Lead reviews final output ───► Ship 🚀
```

## Sample Prompt to Spawn the Team

```
Create an agent team for modernizing the Tekzuri website.

All agents must read /mnt/skills/public/frontend-design/SKILL.md before 
writing any code. Apply frontend-design principles (spatial composition, 
motion, visual depth, distinctive layouts) and UX best practices throughout.

Spawn 4 teammates:
1. "explore" — audit the current Tekzuri codebase, extract colors, fonts, 
   content, audit UX flows, and document everything in discovery-report.md
2. "improve" — after explore completes, propose a modern architecture with 
   UX improvements that locks in existing colors, fonts, and content. 
   Apply frontend-design skill for layout/motion/composition creativity. 
   Output improvement-plan.md and design-tokens.json
3. "implement" — after improve is approved, scaffold and build the new site 
   using the approved plan, tokens, and frontend-design skill guidelines
4. "verify" — run alongside implement, continuously checking visual fidelity, 
   content parity, colors, fonts, UX quality, frontend polish, performance, 
   and accessibility

Constraints: Tekzuri's color scheme, font stack, and all content must remain 
identical to the current site. Creative freedom applies to layout, animations, 
spatial composition, UX flow, and micro-interactions only.
```

---

## Kaizen Checkpoints

Each phase includes a review loop before proceeding — small, verified increments rather than a big-bang migration. If any gate fails, the responsible agent iterates before the team moves forward. Continuous improvement, zero waste.
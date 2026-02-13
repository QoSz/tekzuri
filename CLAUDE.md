# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TekZuri is a portfolio/marketing website built with Next.js 16, React 19, and TypeScript. The name derives from the Japanese concept of monozukuri (ものづくり) - the art of making things with craftsmanship and elegance. Domain: `tekzuri.com`

## Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No testing framework is configured.

## Architecture

- **Framework**: Next.js 16 with App Router (not Pages Router)
- **Styling**: Tailwind CSS v4 with `@theme inline` directive in `globals.css`
- **Fonts**: Plus Jakarta Sans (`--font-sans`) and JetBrains Mono (`--font-mono`) via `next/font/google`
- **Icons**: `lucide-react` (tree-shaken via `optimizePackageImports` in next.config.ts)
- **Forms**: `react-hook-form` + `zod` for validation (see `src/lib/validations.ts`)
- **Type Safety**: Strict TypeScript enabled

### Key Directories

```
src/app/                    # App Router pages and layouts
src/components/home/        # Homepage section components (Hero, Services, FeaturedWork, About, Contact)
src/components/common/      # Shared layout: Navbar, MobileMenu, Footer, BackgroundAnimation
src/components/about/       # Team member components
src/components/contact/     # Contact form and info
src/components/our-work/    # Project portfolio grid/cards
src/components/ui/          # Reusable form primitives (FormField)
src/lib/data/               # Static data arrays (services, projects, team) — acts as the "database"
src/lib/validations.ts      # Zod schemas for form validation
```

### Route Structure

- `/` — Homepage with section components
- `/services` — Services overview + individual pages (`/services/web-development`, `/services/ai-automation`, `/services/digital-marketing`, `/services/it-consulting`)
- `/our-work` — Project portfolio grid
- `/about` — Team overview
- `/about/team/[slug]` — Dynamic team member bios (slugs from `src/lib/data/team.ts`)
- `/contact` — Contact form

### Data Pattern

All content lives in typed arrays in `src/lib/data/`. Each file exports the data array plus helper functions (e.g., `getFeaturedProjects()`, `getTeamMemberBySlug()`). There is no backend or CMS.

### SEO

Root layout includes JSON-LD structured data (Organization + WebSite schemas). SEO files: `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/manifest.ts`. Each page exports its own `metadata` object.

### Path Aliases

`@/*` maps to `src/*`.

## Styling Notes

- Dark-first design — the default theme is dark (`--background: #05050a`, `--foreground: #ffffff`)
- Accent color is burgundy: `--accent: #8B2346` (available as Tailwind `accent`, `accent-dark`, `accent-light`)
- Custom CSS animations in `globals.css`: `animate-fade-in`, `animate-fade-in-up`, `animate-blob`, `matrix-column`
- Mobile-first responsive design using Tailwind breakpoints (`md:`, `lg:`)

## Workflow

When carrying out a task always use sub-agents to Explore, Plan and Implement, then use a verification agent to make sure the implementation has been done according to plan and nothing else has broken. Allow the agents to communicate with each other.

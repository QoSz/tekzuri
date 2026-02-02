# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TekZuri is a portfolio/marketing website built with Next.js 16, React 19, and TypeScript. The name derives from the Japanese concept of monozukuri (ものづくり) - the art of making things with craftsmanship and elegance.

## Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16.1.4 with App Router (not Pages Router)
- **Styling**: Tailwind CSS v4 with custom burgundy color palette (`--primary: #8B2346`)
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Type Safety**: Strict TypeScript enabled

### Directory Structure

```
src/app/           # App Router pages and layouts
public/            # Static assets
public/clients/    # Client portfolio images (SVG)
```

### Path Aliases

Use `@/*` to import from `src/*`:
```typescript
import { Component } from '@/app/component'
```

## Current State

- Static marketing site with no backend/database
- Single-page design with sections: Hero, Services, Portfolio, About, Contact
- Contact via mailto: `business@tekzuri.com`
- No API routes or state management
- No testing framework configured

## Styling Notes

- Mobile-first responsive design using Tailwind breakpoints (`md:`, `lg:`)
- Custom CSS variables defined in `globals.css`
- Dark mode support via `prefers-color-scheme`

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 fan website for "大航海时代4 威力加强版" (Uncharted Waters IV: Power Pack), a classic KOEI naval strategy game. The site provides game downloads, guides, character information, and FAQs for Chinese-speaking players.

## Tech Stack

- **Framework**: Next.js 16.0.7 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Build Tool**: Next.js built-in system

## Development Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages
  - `download/` - Game download page
  - `guide/` - Guide section with dynamic routes
    - `[slug]/` - Individual guide articles
    - `data.ts` - Static data for guide articles
  - `qa/` - FAQ section
  - `globals.css` - Global styles with Tailwind
  - `layout.tsx` - Root layout with navigation
  - `page.tsx` - Homepage
- `public/images/` - Static images
  - `articles/` - Guide article images
  - `characters/` - Character avatars
  - `man/` - Character portraits

### Key Patterns

1. **Static Data Management**
   - Guide articles stored in `app/guide/data.ts`
   - Uses TypeScript interfaces for type safety
   - Static generation via `generateStaticParams`

2. **Routing**
   - File-based routing with App Router
   - Dynamic routes for guide articles (`/guide/[slug]`)
   - Section-specific layouts for guide and qa

3. **Styling**
   - CSS custom properties for theming
   - Dark naval theme with consistent color scheme
   - Tailwind utilities with custom CSS overrides

4. **Content Rendering**
   - Custom parser for guide content
   - Supports tables, code blocks, images
   - Markdown-like structure

## Layout Components

### Homepage Features
- Hero section with CTA buttons
- Game features grid (card-grid)
- Character selection grid (character-grid)
- Power Pack features list

### Grid Layouts
- `.card-grid` - Game features (currently auto-fit, 300px minimum)
- `.character-grid` - Characters (currently auto-fit, 280px minimum)
- `.feature-list` - Power Pack features (auto-fit, 250px minimum)

## SEO Configuration

- Comprehensive metadata in each layout
- OpenGraph and Twitter cards
- Canonical URLs
- Dynamic sitemap generation
- Robots.txt configuration

## External Integrations

- 51.la analytics for Chinese web traffic
- Quark cloud storage for game file downloads
- No external APIs or databases

## Common Tasks

When modifying the homepage:
1. Edit `app/page.tsx` for content changes
2. Modify `app/globals.css` for layout adjustments
3. Update grid layouts by changing CSS Grid properties in classes like `.card-grid` and `.character-grid`

When adding new guide articles:
1. Add article data to `app/guide/data.ts`
2. Download and place images in `public/images/articles/`
3. Follow existing TypeScript interfaces

## Deployment Notes

- Optimized for Vercel deployment
- All routes can be statically generated
- Images served from public directory
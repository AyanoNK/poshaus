# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Poshaus is a personal portfolio/art website built with **Astro 7** (static pages), styled with **Tailwind CSS v4**, and deployed on **Vercel** at `poshaus.vercel.app`.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm check        # Type-check with astro check
pnpm preview      # Preview production build locally
```

No test or lint commands are configured. Formatting uses Prettier with the Astro plugin (`prettier.config.js`).

## Architecture

- **Astro pages** (`src/pages/`) — file-based routing; `404.astro` is the not-found page
- **Astro components** (`src/components/`) — shared UI (waves, links, social links, header, footer); `gallery/` subdir has grid components for each content type (projects, games, illustrations, images)
- **Layouts** (`src/layouts/`) — MainLayout (base HTML shell, takes `title` and `description`), IndexLayout (home page), GalleryLayout (gallery pages with animated wave SVG headers)
- **Images** (`src/assets/`) — rendered with `<Image>` from `astro:assets`, which makes the resized versions at build time. Every image needs a real `alt`.
- **Projects** — a content collection (`src/content.config.ts`, entries in `src/data/projects.json`, read through `src/lib/projects.ts`). A project with a `gallery` gets its own page at `/projects/[project]`; one with a `url` links there.
- **Other content** — illustrations, tattoos and games are lists in the component or page that shows them
- **Shared constants** — social links in `src/consts.ts`

### Rendering Model

All pages are built ahead of time (default `output: "static"`) with the `@astrojs/vercel` adapter. Redirects (`/store`, `/projects/magic_markers`) are set in `redirects` in `astro.config.mjs`.

### Styling

Tailwind v4 via `@tailwindcss/vite` plugin. `src/styles/global.css` holds the `@theme` colors, global CSS variables and base styles:
- `bluewave` (#63e1da), `darkbluewave` (#47a39f), `greenwave` (#00CC99) and their opaque variants
- Components use scoped `<style>` tags for animations (wave SVG keyframes, hover effects); set CSS variables on the component's own element, not `:root`

The Gantari font loads through the Astro fonts API (`fonts` in `astro.config.mjs`, `<Font />` in MainLayout).

### Package Manager

pnpm 12, pinned with `packageManager` in `package.json`. Settings live in `pnpm-workspace.yaml`. Vercel needs the pin: without it, it falls back to pnpm 9, which fails on `pnpm-workspace.yaml`.

`astro check` needs TypeScript 6; it does not support TypeScript 7 yet.

# Poshaus

Personal portfolio and art website built with Astro, deployed on Vercel.

## Tech Stack

- **[Astro 7](https://astro.build/)** — static pages with the `@astrojs/vercel` adapter
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling via `@tailwindcss/vite` plugin
- **[Vercel](https://vercel.com/)** — hosting and deployment

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/projects` | Projects gallery |
| `/projects/[project]` | Individual project detail |
| `/games` | Games gallery |
| `/tattoos` | Tattoo art gallery |
| `/store` | Redirects to the Everpress store |
| `/ticket` | Ticket page |

## Project Structure

```
src/
├── assets/              # Images, optimized at build time with astro:assets
├── components/
│   ├── gallery/         # Grid components (projects, games, illustrations, images)
│   ├── BlueWave.astro   # Animated wave SVG elements
│   ├── GreenWave.astro
│   ├── WavedHeader.astro
│   ├── Footer.astro
│   └── ...
├── layouts/
│   ├── MainLayout.astro     # Base HTML shell
│   ├── IndexLayout.astro    # Home page layout
│   └── GalleryLayout.astro  # Gallery pages with animated wave headers
├── data/
│   └── projects.json        # Projects collection entries
├── lib/
│   └── projects.ts          # Reads the projects collection in order
├── pages/                   # File-based routing
├── styles/
│   └── global.css           # Tailwind theme, global variables and base styles
├── consts.ts                # Social links
└── content.config.ts        # Content collections
public/
├── favicon/
├── svg/
├── video/
├── robots.txt
└── site.webmanifest
```

## Development

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server on localhost:3000
pnpm build     # Production build
pnpm check     # Type-check with astro check
pnpm preview   # Preview production build
```

## License

All rights reserved.

# Poshaus

Personal portfolio and art website built with Astro and React, deployed on Vercel.

## Tech Stack

- **[Astro 6](https://astro.build/)** — full SSR with `@astrojs/vercel` adapter
- **[React 19](https://react.dev/)** — interactive client-side components
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
| `/store` | Store page |
| `/ticket` | Ticket page |

## Project Structure

```
src/
├── components/
│   ├── gallery/         # Grid components (projects, games, illustrations, images)
│   ├── BlueWave.astro   # Animated wave SVG elements
│   ├── GreenWave.astro
│   ├── WavedHeader.astro
│   ├── Card.astro
│   ├── Footer.astro
│   └── ...
├── layouts/
│   ├── MainLayout.astro     # Base HTML shell
│   ├── IndexLayout.astro    # Home page layout
│   └── GalleryLayout.astro  # Gallery pages with animated wave headers
├── pages/                   # File-based routing
└── styles/
    └── global.css           # Tailwind theme with custom colors
public/
├── fonts/
├── img/
├── svg/
└── video/
```

## Development

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server on localhost:3000
pnpm build     # Production build
pnpm preview   # Preview production build
```

## License

All rights reserved.

---
technologies: [Astro, Tailwind CSS, TypeScript, Vercel]
links:
  - title: Live site
    url: https://poshaus.art/
---

# Poshaus

Portfolio website for Poshaus, an illustrator and designer, showing illustrations, tattoo designs, games and client projects.

Poshaus is the online home for an illustrator's work. It puts illustrations, tattoo designs, game art and client projects in one place, with a playful look built around moving water and waves.

## What is on the site

- **Home page**: the Poshaus logo and links over a looping water video, with the full illustrations gallery below.
- **Tattoo designs**: a gallery of tattoo flash and custom pieces.
- **Games**: logos and concept sheets for games made with Studio 904, each linking to its itch.io page.
- **Projects**: client work such as festival posters and a children's book.
- **Store**: a short link to the Poshaus shop on Everpress.

## How it is built

Every page is built ahead of time with Astro, so visitors get plain HTML and CSS with almost no JavaScript. Pictures go through Astro's image tools, which make smaller, resized versions at build time so the galleries load fast on phones.

The projects are a content collection: each one is an entry in a JSON file with a cover picture and, optionally, a gallery that gets its own page or an outside link.

Styling uses Tailwind CSS with a small set of theme colors taken from the wave artwork. The animated wave headers on the gallery pages are SVGs moved with CSS keyframes.

The site is hosted on Vercel.

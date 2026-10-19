import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  redirects: {
    "/store": "https://everpress.com/profile/poshaus",
    "/projects/magic_markers": "https://www.youtube.com/@MagicMarkersPro/videos",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

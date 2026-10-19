import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  redirects: {
    "/store": "https://everpress.com/profile/poshaus",
    "/projects/magic_markers":
      "https://www.youtube.com/@MagicMarkersPro/videos",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Gantari",
      cssVariable: "--font-gantari",
      weights: [400],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

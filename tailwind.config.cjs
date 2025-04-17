/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bluewave: "#63e1da",
        opaquebluewave: "#63e1da80",
        darkbluewave: "#47a39f",
        greenwave: "#00CC99",
        opaquegreenwave: "#00CC9980",
      },
    },
  },
  plugins: [],
};

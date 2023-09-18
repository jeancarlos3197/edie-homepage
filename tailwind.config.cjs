/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Heebo",
          fontWeight: "800",
          src: 'url(./src/fonts/Heebo-ExtraBold.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Montserrat",
          fontWeight: "500",
          src: 'url(./src/fonts/Montserrat-Medium.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "300",
          src: 'url(./src/fonts/Poppins-Light.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "400",
          src: 'url(./src/fonts/Poppins-Regular.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "500",
          src: 'url(./src/fonts/Poppins-Medium.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "700",
          src: 'url(./src/fonts/Poppins-Bold.woff) format("woff")',
        },
      });
    }),
  ],
};

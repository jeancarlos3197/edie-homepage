/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["heebo"],
        montserrat: ["montserrat"],
        "poppins-300": ["poppins-300"],
        "poppins-400": ["poppins-400"],
        "poppins-500": ["poppins-500"],
        "poppins-700": ["poppins-700"],
      },
    },
  },
  plugins: [],
};

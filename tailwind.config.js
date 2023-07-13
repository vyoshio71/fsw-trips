/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/world-map.png)",
      },
      colors: {
        primary: "#590bd8",
        primaryLighter: "#ddd5ea",
        primaryDarker: "#312a4f",
        grayPrimary: "#717171",
        grayLighter: "#bbbfbf",
      },
      textColor: {
        dark: "#717171",
      },
    },
  },
  plugins: [],
};

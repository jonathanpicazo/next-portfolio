/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "1024px",
    },
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
      colors: {
        "dracula-yellow": "#f1fa8c",
      },
    },
  },
  plugins: [
    require("tailwind-dracula")("dracula"),
    require("prettier-plugin-tailwindcss"),
  ],
};

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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "1440px",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-dracula")("dracula"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};

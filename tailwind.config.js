/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
    },
  },
  plugins: [require("tailwind-dracula")("dracula")],
};

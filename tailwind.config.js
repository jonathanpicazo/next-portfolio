/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'myriad-pro': ['myriad-pro', 'sans-serif'],
      'proxima-nova': ['proxima-nova', 'sans-serif'],
    },
    screens: {
      md: '1024px',
      ipad: '600px',
    },
    extend: {
      maxWidth: {
        desktop: '1280px',
      },
      colors: {
        'dracula-yellow': '#f1fa8c',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '1280px',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-dracula')('dracula'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
  ],
};

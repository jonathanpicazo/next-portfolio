/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
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

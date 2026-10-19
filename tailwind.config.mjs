/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cello: '#7c3aed',
        clay: '#a855f7',
        cream: '#faf5ff',
        charcoal: '#1A1A1A',
        grape: '#2d1155',
        ink: '#14142B',
        body: '#3A3A4A',
        sand: '#F1E5D9',
        mist: '#F3F3F5',
        accent: '#7B2FF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        head: ['Montserrat', 'Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-headings': '#2d1155',
            '--tw-prose-links': '#7c3aed',
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
};

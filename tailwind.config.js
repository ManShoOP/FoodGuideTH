/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf9f0',
          100: '#f5f0dc',
          200: '#ebdeba',
          300: '#dec791',
          400: '#d0ac66',
          500: '#c59345',
          600: '#b07a37',
          700: '#8d5c2e',
          800: '#734b2b',
          900: '#603f27',
        },
        navy: {
          800: '#0f172a',
          900: '#090d16',
          950: '#04070d',
        }
      },
      fontFamily: {
        sans: ['var(--font-prompt)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

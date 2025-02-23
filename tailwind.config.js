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
        primary: '#0066CC',
        'primary-dark': '#004C99',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter-sm': '-0.03em',
        'tighter-xs': '-0.02em',
      },
      fontSize: {
        'display-lg': ['84px', {
          letterSpacing: '-0.04em',
          lineHeight: '1.2',
        }],
        'display-md': ['64px', {
          letterSpacing: '-0.03em',
          lineHeight: '1.2',
        }],
        'display-sm': ['48px', {
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
        }],
        'body-lg': ['20px', {
          letterSpacing: '-0.04em',
          lineHeight: '1.6',
        }],
        'body-md': ['16px', {
          letterSpacing: '-0.03em',
          lineHeight: '1.6',
        }],
        'body-sm': ['14px', {
          letterSpacing: '-0.02em',
          lineHeight: '1.6',
        }],
      },
    },
  },
  plugins: [],
} 
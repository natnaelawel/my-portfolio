/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C3469',
        secondary: '#294d7b',
        accent: '#02F0F0',
        slate: 'var(--slate)',
        light_slate: 'var(--light-slate)',
        lightest_slate: 'var(--lightest-slate)',
        dark_slate: 'var(--dark-slate)',
        dark_navy: 'var(--dark-navy)',
        navy: 'var(--navy)',
        light_navy: 'var(--light-navy)',
        lightest_navy: 'var(--lightest-navy)',
      },
      fontFamily: {
        mono: 'var(--font-mono)',
      },
      animation: {
        tilt: 'tilt 2s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
  },
  plugins: [],
};

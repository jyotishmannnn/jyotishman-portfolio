/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#8A2BE2',
        accent: '#FF4500',
        background: '#0A0A0A',
        text: '#FFFFFF',
        subtext: '#A9A9A9',
        'particle-base-1': '#20B2AA',
        'particle-base-2': '#8A2BE2',
        'particle-base-3': '#1E90FF',
        'particle-highlight-1': '#FFD700',
        'particle-highlight-2': '#FF4500',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontSize: {
        'hero': 'clamp(3rem, 5vw, 6rem)',
      },
      fontWeight: {
        'hero': '700',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(30, 144, 255, 0.8)',
        'neon-hover': '0 0 40px rgba(255, 69, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
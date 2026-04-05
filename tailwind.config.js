/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0d1a',
        'bg-card': '#0f1424',
        'bg-card-hover': '#141828',
        'blue-accent': '#3b82f6',
        'blue-light': '#60a5fa',
        'blue-dim': '#1d4ed8',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)',
        'blue-gradient-subtle': 'linear-gradient(135deg, rgba(29,78,216,0.15), rgba(96,165,250,0.05))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

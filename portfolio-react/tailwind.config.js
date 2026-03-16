/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-orb': 'floatOrb 10s ease-in-out infinite',
        'float-dot': 'floatDot 6s ease-in-out infinite',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%':       { transform: 'translate(24px, -20px) scale(1.04)' },
          '50%':       { transform: 'translate(8px,  -40px) scale(0.97)' },
          '75%':       { transform: 'translate(-18px, -12px) scale(1.02)' },
        },
        floatDot: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.35' },
          '50%':       { transform: 'translateY(-18px) translateX(8px)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
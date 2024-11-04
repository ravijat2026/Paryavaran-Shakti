/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'google-gradient': 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    keyframes: {
      levitate: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-0.5rem)' },
      },
    },
      animation: {
        levitate: 'levitate 2s ease-in-out infinite',
      },
  },
  plugins: [],
}


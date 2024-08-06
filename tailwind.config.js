/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      animationDelay: {
        '0': '0s',
        '200': '0.2s',
        '400': '0.4s',
        '600': '0.6s',
        '800': '0.8s',
        '1000': '1s',
        '1200': '1.2s',
      },
    },
  },
  plugins: [],
}

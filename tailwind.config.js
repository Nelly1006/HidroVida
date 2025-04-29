/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#22c55e',
        'dark-bg': '#1a1a1a',
        'dark-card': '#2d2d2d',
      },
    },
  },
  plugins: [],
}

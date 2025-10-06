/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#deddd8',
        accent: '#9b8868',
        garnet: '#7e2430',
        ink: '#222632',
      },
    },
  },
  plugins: [],
}

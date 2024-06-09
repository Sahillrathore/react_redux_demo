/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'reddish': 'rgb(182, 47, 47)',
        "cyanLight": "#c5f8e982",
        "lightbeige": "#f5f5dcbd",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e56c0',
        'secondary': '#ffcc00',
        'card-yellow': '#ffcc00',
        'card-green': '#00cc66',
        'card-blue': '#2255aa'
      }
    },
  },
  plugins: [],
}

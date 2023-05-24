/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        greeny: "#388E3C",
        blacky: "#18181B"
      },
      backgroundImage: {
        "pattern": "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '85%': '85%',
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        greeny: "#388E3C",
      },
      backgroundImage: {
        'hero-pattern': "url('../public/hero_bg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

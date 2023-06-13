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
      colors: {
        greeny: "#92FF33",
        whity: "#F9FFF3",
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

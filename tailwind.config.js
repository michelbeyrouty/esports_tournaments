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
      '130%': '133%',
    },
    extend: {
      colors: {
        greeny: "#92FF33",
        whity: "#F9FFF3",
        blacky: "#060702",
        grayy: "#272825",
        lightgray: "#7B7D78"
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/hero_bg.png')",
        'hero-pattern2': "url('../assets/images/hero_bg_2.png')",
        'pattern-dark-full': "url('../assets/images/pattern_dark_full.png')",
        'pattern-dark': "url('../assets/images/pattern_dark.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

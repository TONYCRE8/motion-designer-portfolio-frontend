module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter-black': ['inter-black', 'sans-serif'],
        'inter-extrabold': ['inter-extrabold', 'sans-serif'],
        'inter-semibold': ['inter-semibold', 'sans-serif'],
        'inter-medium': ['inter-medium', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      margin: ['hover']
    },
  },
  plugins: [],
}
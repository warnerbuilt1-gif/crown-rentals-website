module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        copper: '#C9895C',
        'copper-light': '#E8B896',
        'copper-deep': '#8B4E2A',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

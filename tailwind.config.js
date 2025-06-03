/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,º}"],
  theme: {
    extend: {
      colors: {
        "color-green": "#2e7d32",
        "color-green-light": "#a5d6a7",
        "color-veige": "#f1f8e9",
        "color-white": "#ffffff",
        "color-green-dark": "#3b6f6e",
        "color-grey": "#616161",
        "color-blue": "#0277bd",
        "color-violet": "#5e35b1",
        "color-orange": "#ff7043",
        "bg-web": "color-scale-lightness($color_green, 95%)",
        "accordion-button-active-bg": "color(display-p3 0.89 0.2 0.97 / 0.50)",
      },
      fontFamily: {
        titulo: ["Poppins", "sans-serif"],
        texto: ["Onest", "sans-serif"],
      },
    },
    fontSize: {
      '2xl': '2rem',
    }
  },
  plugins: [],
};

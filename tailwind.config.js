/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,º}"],
  theme: {
    extend: {
      colors: {
        "verde-texto": "#3a7044",
        "beis-fondo": "#f8ffe5",
        "verde-fondo": "#359c48",
        "blanco-texto": "#ffffff",
        // Añade aquí tus colores personalizados
      },
      fontFamily: {
        titulo: ["Poppins", "sans-serif"],
        texto: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};

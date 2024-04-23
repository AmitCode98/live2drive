/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "100%",
        "md": "100%",
        "lg": "100%",
        "xl": "100%",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#100d1f",
        // Define other colors here if needed
      },
      fontFamily: {
        'alumni-sans': ["Alumni Sans",'sans-serif'],
        'montserrat': ["Montserrat",'sans-serif'],
      },
    },
  },
  plugins: [],
}

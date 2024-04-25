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
      // gradientColorStops: theme => ({
      //   'custom-gradient': {
      //     'start': '#5E0616',
      //     'end': '#DA00B7',
      //   },
      // }),
      colors: {
        background: "#100d1f",
        muted: "#BFBFBF"
        // Define other colors here if needed
      },
      fontFamily: {
        'alumni-sans': ["Alumni Sans", 'sans-serif'],
        'montserrat': ["Montserrat", 'sans-serif'],
        'red-hat-display':["Red Hat Display", 'sans-serif']
      },
    },
  },
  plugins: [],
}


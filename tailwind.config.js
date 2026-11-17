/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#009966",
          emerald: "#33AD82",
          soft: "#E6F5F0",
        },
        surface: {
          bg: "#F7FAF9",
          elevated: "#F3FAF7",
          border: "#E3EAE6",
        },
        content: {
          primary: "#17211D",
          secondary: "#414D48",
          muted: "#76837D",
          disabled: "#A5B2AC",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

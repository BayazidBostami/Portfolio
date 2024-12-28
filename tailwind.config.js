/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAILT: '1rem'
      }
    },
    extend: {
      fontFamily: {
        "vollkorn": ["Vollkorn", "serif"],
        "jost": ["Jost", "sans-serif"]
      },

      colors: {
        "primary": "#00413D",
        "secondery": "#E5745D"
      },
      dropShadow: {
        'box': '0 20px 100px  rgba(0, 65, 61, 0.4)',

      }
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "xl": "1024px",
      "2xl": "1170px",
    },

  },
  plugins: [],
}


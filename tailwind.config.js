/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "orange": "#F97B22",
      "yellow": "#FEE8B0",
      "sage": "#9CA777",
      "nature": "#7C9070",
      "yellows": {
        50: "#FFFCF5",
        100: "#FFFBF0",
        200: "#FFF6E1",
        300: "#FEF2D2",
        400: "#FEECBE",
        500: "#FEE8B0",
        600: "#FDCE59",
        700: "#FCB708",
        800: "#AB7B02",
        900: "#563E01",
        950: "#281D01"
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

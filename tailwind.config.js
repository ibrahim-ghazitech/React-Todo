/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your project file paths here
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: '#d6542c',
        textColor: '#eda28a',

      }
    },
  },
  plugins: [],
};

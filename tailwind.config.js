/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        syntax: {
          darkBlue: '#0A0E1A',      // Deeper, darker background
          darker: '#05070F',         // Almost black for dramatic contrast
          purple: '#7C3AED',        // More intense purple
          darkPurple: '#5B21B6',    // Deeper purple
          accent: '#9333EA',        // Bright accent purple
          mediumPurple: '#6A5ACD',  // Medium-dark purple
          lightPurple: '#B19CD9',   // Light lavender/pale purple
          soft: '#C8B9E4',          // Soft lavender background
        },
      },
    },
  },
  plugins: [],
}


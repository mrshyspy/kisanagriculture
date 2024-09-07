/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure this matches your project structure
  theme: {
    extend: {
      colors: {
        customBlue: '#FFFFFF', // Custom color addition (check if you intended white)
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif', 'Inter'], // Custom font family
      },
    },
  },
  plugins: [
    require('daisyui'), // DaisyUI plugin
    require('tailwind-scrollbar-hide'), // Plugin to hide scrollbars
  ],
}

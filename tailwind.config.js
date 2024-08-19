/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust this path as per your project structure.
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

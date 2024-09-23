/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.spec.ts",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
    variants: {
        extend: {
            display: ["group-hover","new-hover"],
        },
    },
  }
  
  
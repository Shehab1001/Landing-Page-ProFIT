/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        // ...
      },
      placeholderColor: {
        'gray-500': '#6b7280',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['responsive', 'dark', 'focus', 'hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],

}


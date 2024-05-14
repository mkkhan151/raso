/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#22202D',
        'dark-red': '#922123',
        'baltic-sea': {
          DEFAULT: '#22202d',
          '50': '#f5f5f9',
          '100': '#e7e8f2',
          '200': '#d5d6e8',
          '300': '#b8bbd8',
          '400': '#9699c4',
          '500': '#7d7db4',
          '600': '#6f6ba5',
          '700': '#665f96',
          '800': '#57517c',
          '900': '#484464',
        },
        'old-brick': {
          DEFAULT: '#922123',
          '50': '#fdf3f3',
          '100': '#fde3e3',
          '200': '#fbcdce',
          '300': '#f8a9aa',
          '400': '#f1787a',
          '500': '#e74c4f',
          '600': '#d32f32',
          '700': '#b12426',
          '900': '#7a2224',
          '950': '#420d0e',
        },
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#FFFFFF',
        'custom-light-red': '#fb4a40',
        'custom-white': '#fefcfb',
        'custom-dark-gray': '#5f5f6c',
        'custom-light-gray': '#f7f7f7',
        'custom-border-gray': '#eeeeee',
        'custom-footer-bg': '#1d2124',
        'blue-700': "#517EB9"
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

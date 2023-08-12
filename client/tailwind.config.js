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
        'light-green': '#EAF1F1',
        'light-green-700': 'rgba(234, 241, 241, 0.7)',
        'light-green-600': 'rgba(234, 241, 241, 0.6)',
        'light-green-500': 'rgba(234, 241, 241, 0.5)',
        'light-green-400': 'rgba(234, 241, 241, 0.4)',
        'light-green-300': 'rgba(234, 241, 241, 0.3)',
        'light-green-200': 'rgba(234, 241, 241, 0.2)'
      }
    },
  },
  plugins: [],
}



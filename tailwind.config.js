/**** Tailwind CSS configuration for Dino Bee ****/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#fff7e6',
          100: '#ffedcc',
          200: '#ffd999',
          300: '#ffc466',
          400: '#ffb033',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        forest: {
          50: '#eef6f1',
          100: '#d8ecdf',
          200: '#b5d9c4',
          300: '#8dc3a6',
          400: '#62a783',
          500: '#4d7c57',
          600: '#3f6246',
          700: '#344f3a',
          800: '#2a3f2f',
          900: '#213226'
        },
        bee: '#f59e0b',
        hive: '#fbbf24',
        leaf: '#34d399'
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: []
} 
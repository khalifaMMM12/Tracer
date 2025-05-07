/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a3b8fc',
          400: '#8193f9',
          500: '#626ef4',
          600: '#4f4be7',
          700: '#3e38c9',
          800: '#3630a2',
          900: '#2f2e7e',
          950: '#1f1b4b',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2d9e7',
          300: '#aab9d1',
          400: '#7d93b7',
          500: '#5c759e',
          600: '#475d83',
          700: '#394a69',
          800: '#324058',
          900: '#2c374a',
          950: '#1c2330',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffeed3',
          200: '#ffd9a6',
          300: '#ffbe6d',
          400: '#ff9730',
          500: '#ff7a0f',
          600: '#fb5d05',
          700: '#cf4207',
          800: '#a5340e',
          900: '#862d0f',
          950: '#491306',
        },
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
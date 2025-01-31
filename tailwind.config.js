/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },

    colors: {
      bg: '#003E74',
      titledark: '#0B80FF',  
      title: '#98C7FA',
      subtitle: '#D9FF00',
      icon: '#FFC947',
      buttom: '#007BFF',
      white: '#FFFFFF',
      black: '#000000',
      custom1: 'rgba(var(--black), 0.8)',
      //mantener los colores por defecto tmb
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(0deg, transparent, transparent, #3b82f6, #3b82f6, #3b82f6)'
      },
      animation: {
        'animar-borde-slow': 'ov-animar-borde 6s linear infinite',
        'animar-borde-slow-2': 'ov-animar-borde 6s linear infinite reverse',
        'spin-slow-reverse': 'spin 3s linear infinite reverse',
        'spin-slow-2': 'spin 6s linear infinite',
        'spin-slow-reverse-2': 'spin 6s linear infinite reverse',
        'spin-slow-3': 'spin 9s linear infinite',
        'spin-slow-reverse-3': 'spin 9s linear infinite reverse',
        'spin-slow-4': 'spin 12s linear infinite',
        'spin-slow-reverse-4': 'spin 12s linear infinite reverse',
        'spin-slow-5': 'spin 15s linear infinite',
        'spin-slow-reverse-5': 'spin 15s linear infinite reverse',
        'sube': 'sube 1s linear infinite',
      },
      keyframes: {
        'ov-animar-borde': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
        'sube': {
          '0%': { top: '150px' },
          '50%': { transform: '100px' },
          '100%': { transform: '150px' },
        }
      }
    },
  },
  plugins: [],
}
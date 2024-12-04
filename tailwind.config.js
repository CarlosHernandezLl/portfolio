/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {

    colors: {
      primary: '#121921',
      secondary: '#C48CB3',
      terciary: '#E5C9D7',
      cuaternary: '#83A6CE',
      quinary: '#26415E',
      senary: '#0B1B32',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#D3D3D3',
      gray2: '#A9A9A9',
      gray3: '#808080',
      gray4: '#696969',
      gray5: '#778899',
      gray6: '#708090',
      gray7: '#2F4F4F',
      gray8: '#708090',
      gray9: '#778899',
      gray10: '#708090',
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
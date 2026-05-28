import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adicione isso aqui dentro de extend:
      keyframes: {
        shakehand: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        shakeImage: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'translateY(10px) rotate(0deg)' },
        }
      },
      animation: {
        'shakehand': 'shakehand 0.5s ease-in-out infinite',
        'shake-image': 'shakeImage 10s infinite',
      }
    },
  },
  plugins: [],
} satisfies Config
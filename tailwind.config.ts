import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'rgb(6 8 20)',
        },
      },
    },
  },
} satisfies Config


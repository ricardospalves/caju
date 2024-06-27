import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7500',
        secondary: '#e80537',
      },
    },
  },
  plugins: [],
} satisfies Config

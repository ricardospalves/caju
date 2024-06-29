import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cajuPrimary: '#e80537',
        cajuSecondary: '#ff7500',
      },
    },
  },
  plugins: [],
} satisfies Config

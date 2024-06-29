import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cajuPrimary: '#e80537',
        cajuSecondary: '#ff7500',
        primary: '#64a98c',
        primaryDark: '#467662',
        primaryLight: '#93c3af',
        primaryContrast: '#fff',
        review: '#efc24d',
        approved: '#4242df',
        reproved: '#ce2893',
      },
    },
  },
  plugins: [],
} satisfies Config

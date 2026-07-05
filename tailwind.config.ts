import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        'burger-bg': '#fffaf0',
        'burger-surface': '#fff3c4',
        'burger-cream': '#fef3c7',
        'burger-accent': '#f59e0b',
        'burger-accent-dark': '#b45309',
        'burger-ink': '#2d1602',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
        body: ['"Inter"', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
} satisfies Config

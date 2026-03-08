import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accentCyan: '#06B6D4',
        accentGreen: '#22C55E',
        bg: '#F8FAFC',
        softBg: '#E2E8F0',
        warning: '#F59E0B',
        danger: '#EF4444',
        textPrimary: '#0B1220',
        textSecondary: '#475569',
      },
      boxShadow: {
        premium: '0 18px 42px -20px rgba(15, 23, 42, 0.4)',
      },
      backgroundImage: {
        'route-grid':
          'linear-gradient(rgba(15,23,42,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;

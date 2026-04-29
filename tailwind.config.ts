import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          light: '#F4D03F',
          dark: '#B8860B',
        },
        background: {
          DEFAULT: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#141414',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37' },
          'to': { boxShadow: '0 0 20px #D4AF37, 0 0 40px #D4AF37, 0 0 60px #D4AF37' },
        }
      }
    },
  },
  plugins: [],
}
export default config

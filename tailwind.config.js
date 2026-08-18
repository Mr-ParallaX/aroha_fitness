/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#fbf8f3',
          100: '#f5efe4',
          200: '#e9dcc6',
          300: '#d9c5a0',
          400: '#c4a878',
          500: '#b08d5c',
          600: '#96754a',
          700: '#785c3c',
          800: '#5e4a32',
          900: '#3d3020',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ece4',
          200: '#c7d8ca',
          300: '#a3bda9',
          400: '#7c9b83',
          500: '#5d7d65',
          600: '#4a6450',
          700: '#3b5140',
          800: '#304134',
          900: '#1f2b22',
        },
        terracotta: {
          50: '#fbf3ef',
          100: '#f5e2d8',
          200: '#e9c4b2',
          300: '#d99e82',
          400: '#c77a57',
          500: '#b15f3c',
          600: '#964d30',
          700: '#783d27',
          800: '#5d3121',
          900: '#3e2117',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slow-zoom': 'slow-zoom 18s ease-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

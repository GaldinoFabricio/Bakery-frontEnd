/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        amber: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.amber.700'),
              '&:hover': {
                color: theme('colors.amber.800'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h4: {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
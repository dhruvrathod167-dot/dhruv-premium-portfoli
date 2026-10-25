/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080808',
          900: '#0B0B0B',
          850: '#0E0E0E',
          800: '#101010',
          700: '#161616',
          600: '#1C1C1C',
          500: '#242424',
          400: '#2E2E2E',
        },
        bone: {
          50: '#F5F5F2',
          100: '#EDEDE8',
          200: '#D8D8D2',
        },
        ash: {
          400: '#A1A1A1',
          500: '#777777',
          600: '#5A5A5A',
        },
        ember: {
          400: '#FF6338',
          500: '#FF4D24',
          600: '#E63E1A',
        },
        // Light theme colors
        light: {
          background: '#F5F3EF',
          backgroundSecondary: '#EBE9E4',
          textPrimary: '#111111',
          textSecondary: '#555555',
          textMuted: '#858585',
          border: 'rgba(0,0,0,0.10)',
          accent: '#E84A25',
          accentHover: '#C93618',
          accentSoft: '#FFB088',
          navBackground: 'rgba(245, 243, 239, 0.7)',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 10vw, 10rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        display: ['clamp(2.5rem, 7vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        section: ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        label: '0.22em',
        micro: '0.14em',
      },
      maxWidth: {
        shell: '1600px',
        content: '1400px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

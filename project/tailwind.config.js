/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'blood-red': '#E63946',
        'blood-dark': '#A31621',
        'blood-light': '#FF8C94',
        'medical-blue': '#457B9D',
        'medical-light': '#A8DADC',
        'background': '#F1FAEE',
        'text-dark': '#1D3557',
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
        
        // Dark theme colors - flattened structure
        'dark-background': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-primary': '#FF4C5B',
        'dark-secondary': '#5B9BD5',
        'dark-text': '#E5E7EB',
        'dark-text-secondary': '#9CA3AF',
        'dark-border': '#374151',
        'dark-hover': '#2D2D2D',
        'dark-accent': '#FF6B6B'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'blood-flow': 'bloodFlow 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 1.5s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wave': 'wave 2s linear infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        bloodFlow: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(10px) scale(0.95)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      boxShadow: {
        'blood': '0 4px 14px 0 rgba(230, 57, 70, 0.39)',
        'hover': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px -4px rgba(0, 0, 0, 0.08)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(230, 57, 70, 0.5)',
        'dark': '0 4px 14px 0 rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blood': 'linear-gradient(135deg, #E63946 0%, #A31621 100%)',
        'gradient-medical': 'linear-gradient(135deg, #457B9D 0%, #1D3557 100%)',
        'gradient-light': 'linear-gradient(135deg, #F1FAEE 0%, #A8DADC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E1E1E 0%, #121212 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'transform': 'transform',
      },
      scale: {
        '102': '1.02',
        '98': '.98',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
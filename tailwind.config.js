/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF8C33',
          dark: '#E05E00',
        },
        'bg-dark': '#0A0A0A',
        'bg-card': '#111111',
        'bg-section-alt': '#0F0F0F',
        'bg-elevated': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-muted': '#666666',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.3)',
        glow: '0 0 30px rgba(255, 107, 0, 0.15)',
        elevated: '0 8px 40px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideOutRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(100px)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, -10px)' },
        },
        scrollDown: {
          '0%': { opacity: '1', transform: 'translate(-50%, 0)' },
          '100%': { opacity: '0', transform: 'translate(-50%, 10px)' },
        },
        'pulse-green': {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.4s ease forwards',
        'slide-out-right': 'slideOutRight 0.4s ease forwards',
        float: 'float 2s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s infinite',
        'scroll-down': 'scrollDown 1.5s infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
    },
  },
  plugins: [],
};

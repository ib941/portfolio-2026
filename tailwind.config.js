/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        liquid: {
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#bae0fd',
            300: '#7cc7fb',
            400: '#36abf7',
            500: '#0c92ea',
            600: '#0273c8',
            700: '#035ca1',
          },
          cool: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.03), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'glass': '0 12px 32px -4px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
        'glass-lg': '0 24px 48px -8px rgba(0, 0, 0, 0.05), 0 8px 18px -4px rgba(0, 0, 0, 0.02)',
        'glass-glow': '0 0 35px -5px rgba(56, 171, 247, 0.22)',
        'glass-glow-subtle': '0 0 25px -3px rgba(124, 199, 251, 0.16)',
        'inset-specular': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)',
        'inset-specular-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.65)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '40px',
        '3xl': '60px',
      },
      animation: {
        'ambient-pulse': 'ambientPulse 14s ease-in-out infinite alternate',
        'ambient-drift': 'ambientDrift 18s ease-in-out infinite alternate',
      },
      keyframes: {
        ambientPulse: {
          '0%': { transform: 'scale(1) translate(0px, 0px)', opacity: '0.45' },
          '50%': { transform: 'scale(1.12) translate(15px, -20px)', opacity: '0.6' },
          '100%': { transform: 'scale(0.96) translate(-10px, 15px)', opacity: '0.45' },
        },
        ambientDrift: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-30px, 25px)' },
          '100%': { transform: 'translate(20px, -15px)' },
        },
      },
    },
  },
  plugins: [],
};

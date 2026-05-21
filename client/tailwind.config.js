/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-dark': '#0A0A0A',
        'brand-white': '#FFFFFF',
        'brand-yellow': '#FFDE4D',
        'brand-yellow-alt': '#FACC15',
        'brand-muted': '#737373',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 0 0 2px #FFDE4D',
        'yellow-glow-lg': '0 0 0 3px #FFDE4D, 0 0 20px rgba(255, 222, 77, 0.25)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

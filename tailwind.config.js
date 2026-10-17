/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050B24',
        navy: '#0A1640',
        sky: '#00A8F0',
        ice: '#90D8F0',
        sun: '#FFC81E',
        amber: '#F0A800'
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['"Inter Tight"', 'Manrope', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

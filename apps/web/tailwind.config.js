const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2s forwards',
        'blur': 'blur 3s forwards 3s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'blur': {
          '0%': { filter: 'blur(0)' },
          '100%': { filter: 'blur(16px)' },
        },
      }
    }
  },
  darkMode: 'class',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
        cream: 'var(--color-cream)',
        'cream-muted': 'var(--color-cream-muted)',
        amber: 'var(--color-amber)',
        'amber-dim': 'var(--color-amber-dim)',
        sage: 'var(--color-sage)',
        'sage-dim': 'var(--color-sage-dim)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
}

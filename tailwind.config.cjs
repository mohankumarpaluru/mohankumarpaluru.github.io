/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./canvas/**/*.{js,ts,jsx,tsx}",
        "./store/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                'accent': '#0d9488', // Teal 600 (light primary)
                'accent-secondary': '#ea580c', // Orange 600 (ember accent)
                'bg-dark': '#050505', // Deep black
                'bg-light': '#f8fafb', // Cool off-white
                // Semantic tokens via CSS custom properties
                'primary': 'var(--color-primary)',
                'primary-strong': 'var(--color-primary-strong)',
                'theme-accent': 'var(--color-accent)',
                'accent-strong': 'var(--color-accent-strong)',
                'theme-text': 'var(--color-text)',
                'text-muted': 'var(--color-text-muted)',
                'theme-border': 'var(--color-border)',
                'border-strong': 'var(--color-border-strong)',
                'focus-ring': 'var(--color-focus-ring)',
                'gradient-from': 'var(--color-gradient-from)',
                'gradient-via': 'var(--color-gradient-via)',
                'gradient-to': 'var(--color-gradient-to)',
                'glow': 'var(--color-glow)',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            }
        }
    },
    plugins: [],
}

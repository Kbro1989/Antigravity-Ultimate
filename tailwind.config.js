/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void': '#000000',
                'deep': '#0a0a14',
                'space': '#141428',
                'neon-cyan': '#00ffff',
                'neon-magenta': '#ff00ff',
                'neon-purple': '#9d00ff',
                'neon-blue': '#0080ff',
                'neon-pink': '#ff0080',
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'jetbrains': ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'cosmic-shift': 'cosmic-shift 20s ease-in-out infinite',
                'grid-flow': 'grid-flow 20s linear infinite',
                'holo-shift': 'holo-shift 3s linear infinite',
                'border-spin': 'border-spin 3s linear infinite',
                'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                'cosmic-shift': {
                    '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
                    '50%': { transform: 'scale(1.1) rotate(2deg)' },
                },
                'grid-flow': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '50px 50px' },
                },
                'holo-shift': {
                    '0%': { backgroundPosition: '0% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'border-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'neon-pulse': {
                    '0%, 100%': { filter: 'drop-shadow(0 0 5px currentColor) drop-shadow(0 0 10px currentColor)' },
                    '50%': { filter: 'drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor)' },
                }
            }
        },
    },
    plugins: [],
}

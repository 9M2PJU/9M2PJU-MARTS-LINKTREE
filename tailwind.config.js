/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                marts: {
                    blue: '#1B365D', // Deep Royal Blue
                    yellow: '#FFD700', // Gold/Yellow
                }
            },
            animation: {
                'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}

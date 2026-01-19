import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['marts-logo.png'],
            manifest: {
                name: 'MARTS Directory',
                short_name: 'MARTS',
                description: 'National Amateur Radio Society of Malaysia Directory',
                theme_color: '#1B365D',
                background_color: '#0f172a',
                display: 'standalone',
                icons: [
                    {
                        src: 'marts-logo.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'marts-logo.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    base: '/', // Root path for custom domain
    build: {
        outDir: 'docs',
    },
})


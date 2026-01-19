import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/9M2PJU-MARTS-LINKTREE/',
    build: {
        outDir: 'docs',
    },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000/api/v1',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/v1/, ''),
            },
        },
    },
    plugins: [react(), TanStackRouterVite()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
    }
})

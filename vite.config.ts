import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    base: '/vite-host-app-example/',
    plugins: [
        react(),
        federation({
            name: 'host-app',
            remotes: {
                micro1: 'http://localhost:4173/assets/remoteEntry.js',
            },
            // shared: ['react'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: ['micro1/App']
        }
    },
})

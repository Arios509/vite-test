import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePWA()],
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
            '@': path.resolve('src'),
            'views': path.resolve('src/views'),
            '@components': path.resolve('src/@components'),
            'seedwork': path.resolve('src/infrastructure/seedwork'),
            'model': path.resolve('src/infrastructure/model'),
            "assets": path.resolve(__dirname, "/src/assets"),
            "~assets": path.resolve(__dirname, "/src/assets")
        }
    },
})

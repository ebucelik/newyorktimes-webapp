// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        register: resolve(__dirname, 'src/ui/register.html'),
        favorites: resolve(__dirname, 'src/ui/favorites.html'),
        styler: resolve(__dirname, 'src/Styler/styler.css'),
        registerts: resolve(__dirname, 'src/register.ts'),
      },
    },
  },
})
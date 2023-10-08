// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(".", 'index.html'),
        register: resolve(".", 'src/ui/register.html'),
        favorites: resolve(".", 'src/ui/favorites.html'),
        styler: resolve(".", 'src/Styler/styler.css'),
        registerts: resolve(".", 'src/register.ts'),
      },
    },
  },
})
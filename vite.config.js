// vite.config.js
import path from 'path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        register: resolve(__dirname, 'src/ui/register.html'),
        favorites: resolve(__dirname, 'src/ui/favorites.html'),
        styler: resolve(__dirname, 'src/Styler/styler.css'),
        registerts: resolve(__dirname, 'src/register.ts'),
        favoritefilled: resolve(__dirname, 'src/resources/favorite-filled.png'),
        favorite: resolve(__dirname, 'src/resources/favorite.png')
      },
    },
  },
  base: 'https:///ebucelik.github.io/newyorktimes-webapp'
})
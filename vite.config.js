import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/my-portfolio/',
    resolve: {
      alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@sections': path.resolve(__dirname, './src/sections'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@assets': path.resolve(__dirname, './src/assets'),
      }
    }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',          // ⬅️ WAJIB untuk EdgeOne Pages
  plugins: [react()],
})

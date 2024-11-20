import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    port: 3002, // Escolha a porta desejada, como 3001 ou outra
  },
  resolve:{
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})

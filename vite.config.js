import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Excluir `ion-icon` da resolução de componentes Vue
          isCustomElement: (tag) => tag === 'ion-icon',
        },
      },
    }),
  ],
  server: {
    port: 8081, // Escolha a porta desejada, como 3001 ou outra
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

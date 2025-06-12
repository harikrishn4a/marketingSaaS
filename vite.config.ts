import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/marketingSaaS/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5174,
    hmr: {
      overlay: true,
    },
  },
  build: {
    sourcemap: true,
  },
});

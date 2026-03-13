import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});

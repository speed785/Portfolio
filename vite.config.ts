import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
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

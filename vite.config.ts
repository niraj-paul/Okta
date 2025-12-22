import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.js'),
        styles: path.resolve(__dirname, 'src/styles.css'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
    outDir: 'public',
  },
});

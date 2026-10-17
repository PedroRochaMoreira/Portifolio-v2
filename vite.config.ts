import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Configuração do Vite para desenvolvimento e build de produção
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'es2022',
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Separação de chunks para manter o bundle inicial leve (< 180 KB gzip)
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion']
        }
      }
    }
  }
});

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generouted from '@generouted/react-router/plugin';
import autoImportComponents from './src/utils/vite-plugin-auto-import-components';

// @ts-expect-error: TailwindCSS Vite plugin import error workaround
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), autoImportComponents(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
});

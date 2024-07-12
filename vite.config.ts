import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generouted from '@generouted/react-router/plugin';
import autoImportComponents from './src/utils/vite-plugin-auto-import-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), autoImportComponents()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
});

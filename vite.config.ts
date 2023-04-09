import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      $assets: path.resolve("src/assets"),
      $components: path.resolve("src/components"),
      $constants: path.resolve("src/constants"),
      $pages: path.resolve("src/pages"),
      $router: path.resolve("src/router"),
      $services: path.resolve("src/services"),
      $store: path.resolve("src/store"),
      $types: path.resolve("src/types"),
      $utils: path.resolve("src/utils"),
    },
  },
});

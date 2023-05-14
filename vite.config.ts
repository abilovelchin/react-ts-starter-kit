import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import UnoCSS from "unocss/vite";
import generouted from "@generouted/react-router/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(), generouted()],
  resolve: {
    alias: {
      $src: path.resolve("src"),
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

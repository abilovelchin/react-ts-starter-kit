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
      "@": path.resolve("src"),
    },
  },
});

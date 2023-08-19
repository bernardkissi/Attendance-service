import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/resources/js",
      "~": "/public",
    },
  },
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    eslintPlugin(),
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
      output: {
        dir: "dist",
        entryFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash][extname]",
        chunkFileNames: "[name].[hash].js",
        format: "es",
        exports: "named",
      },
      external: [],
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});

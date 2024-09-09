import { defineConfig } from 'vite';
import path from "path"
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if you are deploying to a subdirectory
  build: {
    outDir: 'dist', // Default output directory
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

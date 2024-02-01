import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Homyz2/',
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the desired output directory here
  },
});

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const env = loadEnv("production", process.cwd(), '')
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@assets': path.resolve(__dirname, 'src/assets'), // Alias for assets
    },
  },
  define: {
    __APP_ENV__: JSON.stringify(env.APP_ENV),
  },
  build: {
    outDir: path.resolve(__dirname, 'abetrade'), // Custom output directory
  },
  server: {
    port: 8080,
    hot: true
  }
});

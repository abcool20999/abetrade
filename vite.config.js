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
    },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      // VITE_REACT_APP_GOOGLE_CLIENT_ID:"596693022834-oou2lgt3l76t8329mbvjo0p3ss6330ho.apps.googleusercontent.com"    
      },
  server: {
    port: 8080,
    hot: true
  }
})

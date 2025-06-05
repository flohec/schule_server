import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  plugins: [react()],
  server: {
    host: true, // ← wichtig für Docker-Zugriff
    watch: {
      usePolling: true, // ← wichtig für Hot Reload in Docker
    },
  },
};


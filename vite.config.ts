import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    allowedHosts: ["1419-2a0d-f302-135-d726-00-1.ngrok-free.app"],
  },
  preview: {
    allowedHosts: ["rush-up-frontend-production.up.railway.app"],
  },
});

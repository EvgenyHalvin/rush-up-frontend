import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    allowedHosts: [
      "rush-up-frontend-production.up.railway.app",
      "https://lamprey-accurate-barely.ngrok-free.app",
    ],
  },
});

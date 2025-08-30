import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true,       // Accept connections from your local network
    port: 5173,       // Optional: set a fixed port
    strictPort: true, // Optional: ensures Vite uses this exact port
  },
})
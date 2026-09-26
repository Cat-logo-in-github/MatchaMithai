import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative base so the build works no matter what sub-path it's served
  // from (e.g. a GitHub Pages project site at /<repo-name>/) without
  // hardcoding the repo name here.
  base: './',
  server: {
    host: true,
  },
})

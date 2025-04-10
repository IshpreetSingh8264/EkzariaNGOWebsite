import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/EkzariaNGOWebsite/', // Replace <your-repo-name>
  plugins: [
    tailwindcss(),
  ],
})
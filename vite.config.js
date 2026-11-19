import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub repo name aanu ivide (exact case). Vercel/Netlify aanenkil '/' aakkuka.
  base: '/-MS-Portfolio-/',
  plugins: [react() ,tailwindcss(),],
})

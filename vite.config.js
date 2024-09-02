import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  server: {
    // proxy: {
    //   '/moviemaniac': 'https://api-proxy.up.railway.app/',
    //   // changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/api/, '')
    // }
  },
  plugins: [react(), svgr()],
  base: '/moviemaniac/',
})

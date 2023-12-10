import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons/fa', 'react-icons/fi', 'react-icons/md', 'react-icons/ri'],
  },
  server: {
    fs: {
      allow: ['..'], // allow the parent directory of your project
    },
  },
};
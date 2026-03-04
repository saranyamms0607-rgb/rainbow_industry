import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/rainbow_industry/' : '/',

  build: {
    // Raise warning limit to 600 kB (Three.js is inherently large)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate Three.js into its own chunk — only loads when 3D viewer is used
          'three-vendor': ['three'],

          // React ecosystem in its own chunk
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // Animation libraries
          'animation-vendor': ['gsap', 'framer-motion'],
        },
      },
    },
  },

  // Optimise dev server
  server: {
    hmr: true,
  },
})

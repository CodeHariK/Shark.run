import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  build: {
    outDir: "./dist",
  },
  resolve: {
    alias: {
      'solid-js': '/Users/Shared/Code/Shark.run/node_modules/solid-js',
    },
  },
})

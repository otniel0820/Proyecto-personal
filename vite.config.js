import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: ["react","react-router","react-router-dom"],
    output: {
      globals: {
        react: "React",
      },
    },
  },
})

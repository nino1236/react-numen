import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // Si necesitás proxy para backend en dev, descomenta y configura:
  // server: {
  //   proxy: {
  //     "/products": "http://localhost:3000",
  //     "/cart": "http://localhost:3000",
  //   },
  // },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, 'src/_helpers')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/_services')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/_utils')
      }
    ]
  }
})

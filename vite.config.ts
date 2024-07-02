import path from 'node:path'
import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons', 'uuid'],
  },
  resolve: {
    alias: {
      '~': root,
    } as AliasOptions,
  },
})

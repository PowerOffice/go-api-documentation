import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Plugin to copy JSON files to dist
const copyJsonFilesPlugin = () => ({
  name: 'copy-json-files',
  closeBundle() {
    const destDir = join(process.cwd(), 'dist', 'openapi')
    mkdirSync(destDir, { recursive: true })
    
    // Copy swagger.json and swag.json to dist/openapi
    copyFileSync(
      join(process.cwd(), 'openapi', 'swagger.json'),
      join(destDir, 'swagger.json')
    )
    copyFileSync(
      join(process.cwd(), 'openapi', 'swag.json'),
      join(destDir, 'swag.json')
    )
    console.log('✓ Copied swagger.json and swag.json to dist/openapi')
  }
})

export default defineConfig({
  plugins: [react(), copyJsonFilesPlugin()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        openapi: './openapi/index.html'
      }
    }
  }
})

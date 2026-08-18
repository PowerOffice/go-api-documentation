import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, cpSync, existsSync } from 'fs'
import { join } from 'path'

// Plugin to copy static files and folders to dist
const copyStaticFilesPlugin = () => ({
  name: 'copy-static-files',
  closeBundle() {
    const distDir = join(process.cwd(), 'dist')
    
    // Copy swagger.json to dist/openapi
    const openapiDestDir = join(distDir, 'openapi')
    mkdirSync(openapiDestDir, { recursive: true })
    copyFileSync(
      join(process.cwd(), 'openapi', 'swagger.json'),
      join(openapiDestDir, 'swagger.json')
    )
    console.log('✓ Copied swagger.json to dist/openapi')
    
    // Copy docs folder
    const docsSource = join(process.cwd(), 'docs')
    const docsDestDir = join(distDir, 'docs')
    if (existsSync(docsSource)) {
      cpSync(docsSource, docsDestDir, { recursive: true })
      console.log('✓ Copied docs/ folder to dist/docs')
    }
    
    // Copy nuget folder
    const nugetSource = join(process.cwd(), 'nuget')
    const nugetDestDir = join(distDir, 'nuget')
    if (existsSync(nugetSource)) {
      cpSync(nugetSource, nugetDestDir, { recursive: true })
      console.log('✓ Copied nuget/ folder to dist/nuget')
    }
    
    // Copy root level static files
    const staticFiles = [
      'robots.txt',
      'sitemap.xml',
      'api-docs.html',
      'backend-changes.html',
      'poweroffice-api-index.html',
      'poweroffice-api.json',
      'bakgrunn_skyer.png',
      'deviser_orange-sky.png',
      'po_logo.png',
      'favicon.ico',
      'favicon.png'
    ]
    
    staticFiles.forEach(file => {
      const source = join(process.cwd(), file)
      const dest = join(distDir, file)
      if (existsSync(source)) {
        copyFileSync(source, dest)
      }
    })
    console.log('✓ Copied root level static files to dist/')
  }
})

export default defineConfig({
  plugins: [react(), copyStaticFilesPlugin()],
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

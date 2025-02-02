import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

const PWA_Manifest = {
  "name": "Calculadora",
  "short_name": "Calculadora",
  "id": "/",
  "description": "Apenas uma calculadora",
  "start_url": "/",
  "display": "fullscreen",
  "background_color": "#fff",
  "theme_color": "#fff",
  "orientation": "portrait",
  "icons": [
      {
        "src": "img/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "img/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "img/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "img/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ]
    
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    svelte(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: PWA_Manifest
    })
  ],
})

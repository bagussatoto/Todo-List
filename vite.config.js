import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  	vue(),
  	VitePWA({
		includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
		manifest: {
		  name: 'Scheduled App',
		  short_name: 'Scheduled App',
		  description: 'Scheduled App slicing design ui using Vue JS and tailwind',
		  theme_color: '#ffffff',
		  icons: [
		    {
		      src: 'pwa-192x192.png',
		      sizes: '192x192',
		      type: 'image/png',
		    },
		    {
		      src: 'pwa-512x512.png',
		      sizes: '512x512',
		      type: 'image/png',
		    },
		    {
		      src: 'pwa-512x512.png',
		      sizes: '512x512',
		      type: 'image/png',
		      purpose: 'any maskable',
		    }
		  ]
		},
		registerType: 'autoUpdate',
		devOptions: {
			enabled: true
		},
		workbox: {
			cleanupOutdatedCaches: false,
			sourcemap: true
		}
  	})
  ],
  define: {
     	'process.env': {}
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})

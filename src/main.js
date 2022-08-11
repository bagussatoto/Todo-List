import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from '@/router'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
	onNeedRefresh() {},
	onOfflineReady() {}
})

//Import Tailwind
import './index.css'

createApp(App)
.use(VueRouter)
.mount('#app')

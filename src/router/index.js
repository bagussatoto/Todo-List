import { createRouter, createWebHistory } from 'vue-router'
//Import components
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'

//Create routes path
const routes = [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'detail',
      path: '/',
      component: Detail
    }
  ]
  
//Create vue-router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Export
export default router
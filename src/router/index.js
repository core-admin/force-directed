import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/force-directed'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/force-directed',
    name: 'ForceDirected',
    component: () => import('@/views/ForceDirected.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'router-active',
  routes
})

export default router

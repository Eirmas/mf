import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MF from '@/views/mf.vue'
import IG from '@/views/ig.vue'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mf',
    name: 'mf',
    component: MF
  },
  {
    path: '/ig',
    name: 'ig',
    component: IG
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import { Landing } from '@/pages/Landing'
import { Insurance } from '@/pages/Insurance'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/insurance',
    name: 'insurance',
    component: Insurance,
  },
]

const router = new VueRouter({
  routes,
})

export default router

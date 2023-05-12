import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
   path: '/',
   name: 'Home',
   component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Config_back.vue')
  },

]

const router = new VueRouter({
  routes,
  //mode: "history",
})

export default router

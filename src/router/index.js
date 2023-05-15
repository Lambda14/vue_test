import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Settings from '../views/Settings.vue'
Vue.use(VueRouter)

const routes = [
  {
   path: '/',
   redirect: '/orders',
  //  name: 'Home',
  //  component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },

]

const router = new VueRouter({
  routes,
  // mode: "history",
})

export default router

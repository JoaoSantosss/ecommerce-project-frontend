import { createRouter, createWebHistory } from 'vue-router'

import Home from '../layouts/Home.vue'
import Login from '../views/componentsLogin/Login.vue'
import Register from '../views/componentsLogin/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

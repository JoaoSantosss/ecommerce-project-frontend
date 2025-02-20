import { createRouter, createWebHistory } from 'vue-router'
import type { Route } from '../interfaces/interfaces'

import Home from '../layouts/Home.vue'
import Login from '../views/componentsLogin/Login.vue'
import Register from '../views/componentsLogin/Register.vue'


import DataAccount from '../views/componentsDataAccount/DataAccount.vue'


const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/data-account', component: DataAccount }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

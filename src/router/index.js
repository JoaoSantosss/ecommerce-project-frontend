import { createRouter, createWebHistory } from 'vue-router';

// Importando os componentes
import PageLogin from '../views/AuthenticationPages/Login.vue'
import PageRegister from '../views/AuthenticationPages/Register.vue'

import TheHeader from '../components/ContentMain/TheHeader.vue'
import TheMain from '../components/ContentMain/TheHeader.vue'
import TheFooter from '../components/ContentMain/TheHeader.vue'


const routes = [
    {
        path: "/:home",
        name: 'home',
        component: [TheHeader, TheMain, TheFooter],
        props: true
      },
    {
        path: '/PageLogin/:title',
        name: 'PageLogin',
        component: PageLogin,
        props: true
    },
    {
        path: '/PageRegister/:title',
        name: 'PageRegister',
        component: PageRegister,
        props: true
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

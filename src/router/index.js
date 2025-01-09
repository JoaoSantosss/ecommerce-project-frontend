import { createRouter, createWebHistory } from 'vue-router';

// Importando os componentes
import PageLogin from '@/views/AuthenticationPages/Login.vue'
import PageRegister from '@/views/AuthenticationPages/Register.vue'
import AccountInformation from '@/views/ComponentsSettings/account_information_components/AccountInformation.vue'

import PageAddress from '@/views/ComponentsSettings/AddressComponents/PageAddress.vue';


import TheHeader from '@/components/ContentMain/TheHeader.vue'
import TheMain from '@/components/ContentMain/TheMain.vue'
import TheFooter from '@/components/ContentMain/TheFooter.vue'


const routes = [
    {
        path: "/PageHome/:title",
        name: 'PageHome',
        component: [ TheHeader, TheMain, TheFooter ],
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
    {
        path: '/AccountInformation/:title',
        name: 'AccountInformation',
        component: AccountInformation,
        props: true
    },
    {
        path: '/AddressInformation/:title',
        name: 'AddressInformation',
        component: PageAddress,
        props: true
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

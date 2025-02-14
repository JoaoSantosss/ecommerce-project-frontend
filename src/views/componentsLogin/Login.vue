<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getImageUrl } from '../../utils/imageHelper'

import FormLogin from './FormLogin.vue';

const router = useRouter()


const RouterLogin = () => {
  router.push('/')
}
</script>

<template>
    <div id="containerLogin">
        <section  id="container_logo_back_Login">
            <div id="container_logoLogin" @click="RouterLogin">
                <img :src="getImageUrl('Logo.png')" alt="">
            </div>

            <h1 id="backHome" @click="RouterLogin">Voltar</h1>
        </section>
        <section id="container_form">
            <FormLogin />
        </section>
    </div>
</template>

<style scoped>
#containerLogin {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/image/backgroundLogin.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
}

#container_logo_back_Login {
    width: 100%;
    height: 10%;
    min-height: 5rem;
    /* border: 2px solid blue; */
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
}

#container_form {
    width: 100%;
    height: 90%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
}
#container_logoLogin {
    /* border: 2px solid red; */
    width: 20%;

}
#container_logoLogin > img {
    width: 100%;
}
#backHome {
    font-size: 1.3vw;
    font-weight: 100;
    cursor: pointer;
}


</style>
<script setup lang="ts">
import { getImageUrl } from '../../utils/imageHelper'
import { useRouter } from 'vue-router'

const router = useRouter()

function RouterLogin() {
    router.push('/')
}
</script>

<template>
    <div id="containerRegister">
        <section  id="container_logo_back_Login">
            <div id="container_logoRegister" @click="RouterLogin">
                <img :src="getImageUrl('Logo.png')" alt="">
            </div>

            <h1 id="backHome" @click="RouterLogin">Voltar</h1>
        </section>
        <section>

        </section>
    </div>
</template>

<style scoped>
#containerRegister {
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/image/backgrond_register.png');
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
#container_logoRegister {
    /* border: 2px solid red; */
    width: 20%;

}
#container_logoRegister > img {
    width: 100%;
}
</style>
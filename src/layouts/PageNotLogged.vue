<script setup lang="ts">
import { getImageUrl } from '../utils/imageHelper'
import { useRouter } from 'vue-router'
import Buttons from '../components/SubComponents/Buttons.vue';



const router = useRouter()
const RouterLogin = (): void => {
  router.push('/login')
}
const RouterRegister = (): void => {
  router.push('/register')
}
</script>

<template>

    <div id="containerPageNotLogged">
        <div id="containerTextContent">
            <h1>Opa! Parece que você não está logado. Que tal entrar pra gente continuar essa aventura juntos? 🚀</h1>
            
            <aside id="containerButtonsLogin">
                <Buttons 
                :text="'Logar'" 
                @click="RouterLogin"

                />
                <Buttons 
                :text="'Cadastrar'" 
                @click="RouterRegister"

                />
            </aside>
        </div>

        <div id="containerImage">
            <img :src="getImageUrl('personLogin.png')" alt="">
        </div>
    </div>

</template>

<style scoped>
#containerPageNotLogged {
    width: 100%;
    min-height: 80vh;
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#containerTextContent {
    width: 53%;
    height: 60vh;
    /* border: 2px solid red; */
    padding-top: 70px;
}

h1 {
    color: var(--color--text);
    font-weight: 100;
    font-size: 3vw;
}

#containerButtonsLogin {
    /* border: 2px solid blue; */
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

#containerImage {
    width: 37%;
    height: 60vh;
    /* border: 2px solid red; */
}
#containerImage > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
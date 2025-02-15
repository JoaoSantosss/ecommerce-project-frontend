<script setup lang="ts">
import { ref } from 'vue'
import { getImageUrl } from '../../utils/imageHelper'
import { useRouter } from 'vue-router'

import FormPersonCommon from './FormPersonCommon.vue'
import FormPersonSeller from './FormPersonSeller.vue'

const router = useRouter()

function RouterLogin() {
    router.push('/')
}

const ShowFormPersonSeller = ref(false);
function toggleForm(): void {
    ShowFormPersonSeller.value = !ShowFormPersonSeller.value
}

function styleInputFocus(event: Event): void {
    const input = event.target as HTMLInputElement;

    const label = document.querySelector(`label[for="${input.id}"]`) as HTMLLabelElement

    if (input.value.length > 0) {
        label.classList.add('classActiveFocus')
    } else {
        label.classList.remove('classActiveFocus')
    }

    //FUNÇÃO PARA PERSISTIR O FOCO DO INPUT CASO TIVER ALGO ESCRITO NELE

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
        <section id="container_MainFormRegister">
            <div id="containerGroupForms_register">
                <div id="TopLocal_ContainerForm_Register">
                    <h1 id="titleForm">Cadastro usuário comum</h1>

                    <button id="buttonToggleForm" @click="toggleForm">Cadastro vendedor</button>
                </div>

                <FormPersonCommon v-if="!ShowFormPersonSeller" :styleInputFocus="styleInputFocus"/>                
                <FormPersonSeller v-else/>

            </div>
        </section>
    </div>
</template>

<style scoped>
#containerRegister {
    width: 100vw;
    min-height: 100vh;
    background-image: url('../../assets/image/backgrond_register.png');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 100px;
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

#container_MainFormRegister {
    /* border: 2px solid rgb(74, 146, 68); */
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* margin-bottom: 100px; */
}

#containerGroupForms_register {
    width: 80%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 50px 50px 100px 50px;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

#TopLocal_ContainerForm_Register {
    width: 100%;
    height: 15%;
    min-height: 7rem;
    /* border: 2px solid rgb(26, 119, 33); */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#titleForm {
    width: 50%;
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 100;
}

#buttonToggleForm {
    width: 20%;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(10px);
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1vw;
    transition: all 0.3s ease;
    cursor: pointer;
    transition: all 0.3s ease;
}

#buttonToggleForm:hover {
    background-color: rgba(255, 255, 255, 0.295);
    backdrop-filter: blur(10px);
    scale: 1.1;
}

</style>
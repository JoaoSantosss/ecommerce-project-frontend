<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '../../utils/imageHelper'

import FormLogin from './FormLogin.vue';
import AlertSucess from '../../components/Modais/AlertSucess.vue'
import AlertError from '../../components/Modais/AlertError.vue';




const router = useRouter()


const RouterLogin = () => {
  router.push('/')
  return ''
}

const showModalSucess = ref(false)


const onShowModalSucess = (status: boolean): void => {
  if (status) {
    showModalSucess.value = true
  }
};


const closeModal = (): void => {
  showModalSucess.value = false
  RouterLogin()
}

const showModalError = ref(false);

const onShowModalError = (status: boolean): void => {
  if (status) {
    showModalError.value = true
  }
};




function GenereteError(input: HTMLInputElement, className: string, box: HTMLDivElement, Paragraph: HTMLParagraphElement, text: string): void {
    input.classList.add(className);
    box.style.display = 'flex';
    Paragraph.textContent = text
    input.focus();
    return
}


function isEmailValue(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
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
            <FormLogin 
            @showModalSucessLoginUser="onShowModalSucess"
            @showModalErrorLoginUser="onShowModalError"
            :GenereteError="GenereteError"
            :isEmailValue="isEmailValue"
            />
        </section>
    </div>

    <AlertSucess 
    v-if="showModalSucess"
    :NextPath="RouterLogin"
    @closeModal="closeModal" 
    :TextContent="'Login realizado com sucesso'"
    :TextButton="'Ir para o site'"
    :buttonOK="false"
    />


    <AlertError 
    v-if="showModalError"
    @closeModal="showModalError = false"
    :TextContent="'Email ou senha incorretos'"
    />

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
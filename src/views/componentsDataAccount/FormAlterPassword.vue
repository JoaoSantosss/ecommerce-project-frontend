<script setup lang="ts">
import { defineProps } from 'vue';
import { getImageUrl } from '../../utils/imageHelper'


import Buttons from '../../components/SubComponents/Buttons.vue'

const props = defineProps<{
    styleInputFocus: (event: Event) => void;
}>();


function toggleIconEye(event: Event): void {
    const element = event.currentTarget as HTMLImageElement;
    const img = element.querySelector('img') as HTMLImageElement;
    const aside = element.parentNode as HTMLElement;
    const input = aside.querySelector('input') as HTMLInputElement;

    element.classList.toggle('classEyeActive');

    if (element.classList.contains('classEyeActive')) {
        img.src = getImageUrl('icons8-visível-50.png');
        input.setAttribute('type', 'text');
    } else {
        img.src = getImageUrl('icons8-olho-100.png');
        input.setAttribute('type', 'password');
    }
}


function submit(event: Event): void {
    event.preventDefault();
}
</script>

<template>
    <form @submit="submit">
        <section class="sections">
            <aside class="asides">
                <input type="password" id="Name" @keyup="props.styleInputFocus">
                <label for="Name">Sua Senha</label>

                <div class="containerViewPassword" @click="toggleIconEye">
                    <img :src="getImageUrl('icons8-olho-100.png')" alt="">
                </div>
                <div class="containerMensageError boxErrorName">
                    <p>teste</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="password" id="Telephone" @keyup="props.styleInputFocus">
                <label for="Telephone">Nova Senha</label>

                <div class="containerViewPassword" @click="toggleIconEye">
                    <img :src="getImageUrl('icons8-olho-100.png')" alt="">
                </div>
                <div class="containerMensageError boxErrorTelephone">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>


        <section class="sectionsFull">

            <aside class="asidesFull">
                <Buttons :text="'Alterar'" :type="'button'" />
                <Buttons :text="'Salvar'" :type="'submit'" />
            </aside>
        </section>
    </form>
</template>

<style scoped>
form {
    /* border: 2px solid red; */
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}


.sections {
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

}

.sectionsFull {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 100px;
}
.asides {
    width: 45%;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    color: #ffffff;
}
.asidesFull {
    width: 45%;
    display: flex;
    justify-content: flex-end;
    color: #ffffff;
    gap: 30px;
}

.asides>input {
    border: 2px solid red;
    width: 100%;
    padding: 2px 5px;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid gray;
    outline: none;
    color: #ffffff;
    font-size: 1.2vw;
    transition: all 0.3s ease;
    cursor: pointer;
}


/*SERVE PARA REMOVE AQUELA COR CLARA QUANDO O NAVEGADOR AJUDA O USUÁRIO A PREENCHER O CAMPO*/
input:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
    color: white !important;
    /* Define a cor do texto como branco */
    -webkit-text-fill-color: white !important;
    /* Garante a cor do texto no autofill */
    transition: background-color 5000s ease-in-out 0s;
}


.asides>input:focus {
    border-bottom: 3px solid #ffffff;
}

.asides>label {
    transform: translateY(-30px);
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
}

.asides>input:focus+label {
    transform: translateY(-55px);

}


.containerViewPassword {
    width: 20px;
    position: relative;
    /* left: 0; */
    right: -95%;
    top: -70%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    /* background-color: aqua; */
}

.containerViewPassword>img {
    width: 100%;
    height: 100%;
}

.containerMensageError {
    display: none;
    /* border: 1px solid red; */
    transform: translateY(-10px);
    align-items: center;
    gap: 10px;
}

.containerMensageError>p {
    color: rgb(245, 39, 39);
    font-weight: bold;
}

.box_iconAlert {
    width: 20px;
    height: 20px;
    /* border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; */
}

.box_iconAlert>img {
    width: 100%;
    height: 100%;
}

.classActiveFocus {
    transform: translateY(-55px) !important;
}

.asideButton {
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-end;
}
</style>
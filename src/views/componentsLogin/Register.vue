<script setup lang="ts">
import { ref } from 'vue'
import { getImageUrl } from '../../utils/imageHelper'
import { useRouter } from 'vue-router'

import FormPersonCommon from './FormPersonCommon.vue'
import FormPersonSeller from './FormPersonSeller.vue'

const router = useRouter()

const TitleForms = ref('Cadastro usuário comum');
const NameButton = ref('Cadastro vendedor');

function RouterLogin() {
    router.push('/')
}

const ShowFormPersonSeller = ref(false);
function toggleForm(event: Event): void {
    // ShowFormPersonSeller.value = !ShowFormPersonSeller.value

    const button = event.target as HTMLButtonElement
    button.classList.toggle('active')

    if (button?.classList.contains('active')) {
        ShowFormPersonSeller.value = true
        TitleForms.value = 'Cadastro como vendedor'
        NameButton.value = 'Cadastro Pessoa comum'
    } else {
        ShowFormPersonSeller.value = false
        TitleForms.value = 'Cadastro usuário comum'
        NameButton.value = 'Cadastro vendedor'
    }
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

function GenereteError(input: HTMLInputElement, className: string, box: HTMLDivElement, Paragraph: HTMLParagraphElement, text: string): void {
    input.classList.add(className);
    box.style.display = 'flex';
    Paragraph.textContent = text
    input.focus();
    return
}

function applyCpfMask(value: string): string {
    value = value.replace(/[^\d]/g, "");

    return value
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
}

function isValidCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF tem 11 dígitos e não é uma sequência de dígitos iguais
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Função para calcular o dígito verificador
    const calculateDigit = (digits: number[], weights: number[]) => {
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += digits[i] * weights[i];
        }
        const remainder = (sum * 10) % 11;
        return remainder === 10 ? 0 : remainder;
    };

    // Calcula o primeiro dígito verificador
    const firstNineDigits = cpf.substring(0, 9).split('').map(Number);
    const firstDigit = calculateDigit(firstNineDigits, [10, 9, 8, 7, 6, 5, 4, 3, 2]);

    // Verifica o primeiro dígito verificador
    if (firstDigit !== Number(cpf.charAt(9))) return false;

    // Calcula o segundo dígito verificador
    const firstTenDigits = cpf.substring(0, 10).split('').map(Number);
    const secondDigit = calculateDigit(firstTenDigits, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

    // Verifica o segundo dígito verificador
    return secondDigit === Number(cpf.charAt(10));
}


function isEmailValue(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
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
                    <h1 id="titleForm">{{ TitleForms }}</h1>

                    <button id="buttonToggleForm" @click="toggleForm">{{ NameButton }}</button>
                </div>

                <FormPersonCommon 
                v-if="!ShowFormPersonSeller" 
                :styleInputFocus="styleInputFocus"
                :GenereteError="GenereteError"
                :maskCPF="applyCpfMask"
                :isValidCPF="isValidCPF"
                :isEmailValue="isEmailValue"
                />                
                <FormPersonSeller v-else :styleInputFocus="styleInputFocus"/>

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
    gap: 50px;
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

    margin-bottom: 50px;
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
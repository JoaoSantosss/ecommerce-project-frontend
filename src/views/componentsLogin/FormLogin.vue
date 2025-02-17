<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'

import type { TypeDataLogin, TypeTratDataLogin } from '../../interfaces/interfaces'

// const props = defineProps<{
//     GenereteError: (input: HTMLInputElement, className: string, box: HTMLDivElement, Paragraph: HTMLParagraphElement, text: string) => void;
//     isEmailValue: (email: string) => boolean
// }>();


const DataLogin = ref<TypeDataLogin[]>([{
    Email: '',
    Password: ''
}])

const TratData = computed<TypeTratDataLogin>(() => ({
    email: DataLogin.value[0].Email,
    password: DataLogin.value[0].Password
}))

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

function submit(event: Event): void {
    event.preventDefault()

    console.log(TratData.value);
    

    // if(!props.isEmailValue(DataLogin.value[0].Email)) {
    //     props.GenereteError(
    //         document.getElementById('Email') as HTMLInputElement,
    //         'classError' as string,
    //         document.querySelector('.boxErrorEmail') as HTMLDivElement,
    //         document.querySelector('.boxErrorEmail p') as HTMLParagraphElement,
    //         'Formato de email inválido!'
    //     )
    //     return
    // } 
}
</script>

<template>
    <form @submit="submit">
        <div id="containerContent_Form_Login">
            <h1>Login</h1>

            <aside>
                <input 
                type="text" 
                id="Name" 
                @keyup="styleInputFocus"
                v-model="DataLogin[0].Email"
                >
                <label for="Name">Email</label>
            </aside>
            <aside>
                <input 
                type="text" 
                id="Password" 
                @keyup="styleInputFocus"
                v-model="DataLogin[0].Password"
                >
                <label for="Password">Senha</label>
                <span id="forgotPassword">Esqueci minha senha</span>
                
            </aside>
            <aside id="aside_button">
                <button>Entrar</button>
            </aside>
        </div>
    </form>
</template>

<style scoped>
form {
    width: 35%;
    min-height: 70%;
    background-color: rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 40px;
}

#containerContent_Form_Login {
    width: 90%;
    /* height: 80%; */
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    gap: 50px;
}

h1 {
    font-size: 3.5vw;
    font-weight: 100;
}

aside {
    width: 100%;
    display: flex;
    position: relative;
}

input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid gray;
    outline: none;
    color: #ffffff;
    font-size: 1.2vw;
    transition: all 0.3s ease;
    cursor: pointer;
}
input:focus {
    border-bottom: 3px solid #ffffff;
}
input:focus + label {
    transform: translateY(-20px);
    transition: all 0.3s ease-in-out;
}

.classActiveFocus {
    transform: translateY(-20px);
}

label {
    position: absolute;
    left: 0;
    /* top: -25px; */
    transition: 0.2s ease all;
    cursor: pointer;
}

#forgotPassword {
    position: absolute;
    right: 0;
    top: 50px;
    cursor: pointer;
}

#aside_button {
    margin-top: 70px;
    display: flex;
    justify-content: center;
}
button {
    width: 50%;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(10px);
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.2vw;
    transition: all 0.3s ease;
    cursor: pointer;
}
button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    scale: 1.1;
}
</style>
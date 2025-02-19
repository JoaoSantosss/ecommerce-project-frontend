<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue'
import { getImageUrl } from '../../utils/imageHelper';


// import type { TypeDataLogin, TypeTratDataLogin, UserData } from '../../interfaces/interfaces'
import type * as interfaces from '../../interfaces/interfaces';
import { LoginUser } from '../../services/authService'


const props = defineProps<{
    GenereteError: (input: HTMLInputElement, className: string, box: HTMLDivElement, Paragraph: HTMLParagraphElement, text: string) => void;
    isEmailValue: (email: string) => boolean
}>();


const emits = defineEmits<{
    showModalSucessLoginUser: [status: boolean];
    showModalErrorLoginUser: [status: boolean]; // Evento aceita um booleano como argumento
}>();


const DataLogin = ref<interfaces.TypeDataLogin[]>([{
    Email: '',
    Password: ''
}])

const TratData = computed<interfaces.TypeTratDataLogin>(() => ({
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



const buttonLogin = ref<HTMLButtonElement | null>(null);
const textButton = ref('Entrar')

async function submit(event: Event): Promise<void> {
    event.preventDefault()

    
    
    if(!props.isEmailValue(TratData.value.email)) {
        props.GenereteError(
            document.getElementById('Email') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorEmail') as HTMLDivElement,
            document.querySelector('.boxErrorEmail p') as HTMLParagraphElement,
            'Email inválido'
        )
        return
    }

    if(TratData.value.password.length < 8) {
        props.GenereteError(
            document.getElementById('Password') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorPassword') as HTMLDivElement,
            document.querySelector('.boxErrorPassword p') as HTMLParagraphElement,
            'A senha deve ter no mínimo 8 caracteres'
        )
        return
    }


    console.log(TratData.value);
    textButton.value = 'Carregando...'
    
    if (buttonLogin.value) {
        buttonLogin.value.disabled = true;
    }


    const endpoint = 'http://localhost:8080/auth'

    const sucess = await LoginUser(endpoint, TratData.value);

    if (sucess) {
        // console.log('Login efetuado com sucesso!')

        console.log('Data do login completa', sucess);
        
        console.log("esse é o token", sucess.token);

        console.log("esse é o data", sucess.userDto);

        GetDataLocalStorage(sucess.token, sucess.userDto)
        

        emits('showModalSucessLoginUser', true)

        DataLogin.value[0].Email = ''
        DataLogin.value[0].Password = ''

        textButton.value = 'Entrar'
        if (buttonLogin.value) {
            buttonLogin.value.disabled = false;
        }
        
    } else {
        console.log('Email ou senha incorretos!')
        emits('showModalErrorLoginUser', true)

        DataLogin.value[0].Email = ''
        DataLogin.value[0].Password = ''

        textButton.value = 'Entrar'
        if (buttonLogin.value) {
            buttonLogin.value.disabled = false;
        }
    }
    
}


function GetDataLocalStorage(token: string, data: interfaces.UserData): void {
    localStorage.setItem("token", token);

    localStorage.setItem("UserData", JSON.stringify(data));
}



function KeyInputs(event: Event): void {
    const input = event.target as HTMLInputElement;
    const containerMensageError = document.querySelector(`.boxError${input.id}`) as HTMLDivElement;

    input.classList.remove('classError');
    containerMensageError.style.display = 'none';

}

const inputPassword = ref<HTMLInputElement | null>(null);

function toggleIconEye(event: Event): void {
    const element = event.target as HTMLInputElement;

    element.classList.toggle('classEyeActive');

    if (element.classList.contains('classEyeActive')) {
        element.src = getImageUrl('icons8-visível-50.png')
        inputPassword.value?.setAttribute('type', 'text')

    } else {
        element.src = getImageUrl('icons8-olho-100.png')
        inputPassword.value?.setAttribute('type', 'password')
    }
}


// TEM QUE REAJUSTA A FUNÇÃO DE VISUALIZAÇÃO DE SENHA
</script>

<template>
    <form @submit="submit">
        <div id="containerContent_Form_Login">
            <h1>Login</h1>

            <aside>
                <input 
                type="text" 
                id="Email" 
                @keyup="styleInputFocus"
                @input="KeyInputs"
                v-model="DataLogin[0].Email"
                >
                <label for="Email">Email</label>
                <div class="containerMensageError boxErrorEmail">
                    <p>teste</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
            <aside id="aside_password">
                <input 
                type="password" 
                id="Password" 
                @keyup="styleInputFocus"
                @input="KeyInputs"
                v-model="DataLogin[0].Password"
                ref="inputPassword"

                >
                <label for="Password">Senha</label>

                <div id="containerViewPassword" @click="toggleIconEye">
                    <img :src="getImageUrl('icons8-olho-100.png')" alt="">
                </div>
                <div class="containerMensageError boxErrorPassword">
                    <p>teste</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
                
            </aside>
            <aside id="aside_button">
                <button id="buttonLogin" ref="buttonLogin">{{ textButton }}</button>
                <p id="forgotPassword">Esqueci minha senha</p>
            </aside>

            
        </div>
    </form>
</template>

<style scoped>
form {
    width: 35%;
    min-height: 65%;
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
    flex-direction: column;
}
/* 
#aside_password {
    border: 1px solid red;
} */
#containerViewPassword {
    position: absolute;
    right: 0;
    /* top: -3px; */
    left: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    /* background-color: aqua; */

}

#containerViewPassword > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

/*SERVE PARA REMOVE AQUELA COR CLARA QUANDO O NAVEGADOR AJUDA O USUÁRIO A PREENCHER O CAMPO*/
input:-webkit-autofill {
  background-color: transparent !important;
  box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
  color: white !important; /* Define a cor do texto como branco */
  -webkit-text-fill-color: white !important; /* Garante a cor do texto no autofill */
  transition: background-color 5000s ease-in-out 0s;
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
    cursor: pointer;
}

#aside_button {
    margin-top: 30px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
}
button {
    width: 70%;
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


.containerMensageError {
    display: none;
    /* border: 1px solid red; */
    transform: translateY(10px);
    align-items: center;
    gap: 10px;
}

.containerMensageError > p {
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
.box_iconAlert > img {
    width: 100%;
    height: 100%;
}

.classError {
    border-bottom: 3px solid rgb(245, 39, 39) !important;
}
</style>
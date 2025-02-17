<script setup lang="ts">
import { ref, computed } from 'vue'
import { defineProps } from 'vue';
import { getImageUrl } from '../../utils/imageHelper'
import type { TypeRawDataSeller, TypeTratDataSeller } from '../../interfaces/interfaces'


import { RegisterUserSeller } from '../../services/authService'


const props = defineProps<{
    styleInputFocus: (event: Event) => void;
    GenereteError: (input: HTMLInputElement, className: string, box: HTMLDivElement, Paragraph: HTMLParagraphElement, text: string) => void;
    maskCPF: (value: string) => string;
    maskCNPJ: (value: string) => string;
    isValidCPF: (cpf: string) => boolean;
    isValidCNPJ: (cnpj: string) => boolean;
    isEmailValue: (email: string) => boolean
}>();

const RawDataSeller = ref<TypeRawDataSeller[]>([{
    Name: '',
    Surname: '',
    Cpf: '',
    Cnpj: '',
    LegalName: '',
    Email: '',
    ConfirmEmail: '',
    Password: ''
}])

const fullName = computed(() => `${RawDataSeller.value[0].Name} ${RawDataSeller.value[0].Surname}`);

const TratData = computed<TypeTratDataSeller>(() => ({
    name: fullName.value,
    cpf: RawDataSeller.value[0].Cpf,
    cnpj: RawDataSeller.value[0].Cnpj,
    email: RawDataSeller.value[0].Email,
    legalName: RawDataSeller.value[0].LegalName,
    password: RawDataSeller.value[0].Password
}))



async function submit(event: Event): Promise<void> {
    event.preventDefault()

    


    if(RawDataSeller.value[0].Name.length <= 3) {
        props.GenereteError(
            document.getElementById('Name') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorName') as HTMLDivElement,
            document.querySelector('.boxErrorName p') as HTMLParagraphElement,
            'O nome deve ter no mínimo 3 caracteres'
        )
        return
    }
    if(RawDataSeller.value[0].Surname.length <= 3) {
        props.GenereteError(
            document.getElementById('Surname') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorSurname') as HTMLDivElement,
            document.querySelector('.boxErrorSurname p') as HTMLParagraphElement,
            'O sobrenome deve ter no mínimo 3 caracteres'
        )
        return
    } 
    if(RawDataSeller.value[0].Cpf.length <= 13) {
        props.GenereteError(
            document.getElementById('Cpf') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorCpf') as HTMLDivElement,
            document.querySelector('.boxErrorCpf p') as HTMLParagraphElement,
            'Numero de caracteres inválido'
        )
        return
    }
    if(!props.isValidCPF(RawDataSeller.value[0].Cpf)) {
        props.GenereteError(
            document.getElementById('Cpf') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorCpf') as HTMLDivElement,
            document.querySelector('.boxErrorCpf p') as HTMLParagraphElement,
            'CPF inválido'
        )
        return
    } 
    if(RawDataSeller.value[0].Cnpj.length <= 17) {
        props.GenereteError(
            document.getElementById('Cnpj') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorCnpj') as HTMLDivElement,
            document.querySelector('.boxErrorCnpj p') as HTMLParagraphElement,
            'Numero de caracteres inválido'
        )
        return
    }
    if(!props.isValidCNPJ(RawDataSeller.value[0].Cnpj)) {
        props.GenereteError(
            document.getElementById('Cnpj') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorCnpj') as HTMLDivElement,
            document.querySelector('.boxErrorCnpj p') as HTMLParagraphElement,
            'CNPJ inválido'
        )
        return
    }
    if(RawDataSeller.value[0].LegalName.length <= 3) {
        props.GenereteError(
            document.getElementById('LegalName') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorLegalName') as HTMLDivElement,
            document.querySelector('.boxErrorLegalName p') as HTMLParagraphElement,
            'O nome fantasia deve ter no mínimo 3 caracteres'
        )
        return
    }
    if(!props.isEmailValue(RawDataSeller.value[0].Email)) {
        props.GenereteError(
            document.getElementById('Email') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorEmail') as HTMLDivElement,
            document.querySelector('.boxErrorEmail p') as HTMLParagraphElement,
            'Formato de email inválido!'
        )
        return
    } 
    if(RawDataSeller.value[0].ConfirmEmail != RawDataSeller.value[0].Email) {
        props.GenereteError(
            document.getElementById('ConfirmEmail') as HTMLInputElement,
            'classError' as string,
            document.querySelector('.boxErrorConfirmEmail') as HTMLDivElement,
            document.querySelector('.boxErrorConfirmEmail p') as HTMLParagraphElement,
            'Emails diferentes!'
        )
        return
    } 
    if(RawDataSeller.value[0].Password.length < 8) {
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

    const endpoint = 'http://localhost:8080/user/seller'

    const sucess = await RegisterUserSeller(endpoint, TratData.value)

    if(sucess) {
        alert('deu bom!!')
    } else {
        alert('deu merda')
    }
    
}



function KeyInputs(event: Event): void {
    const input = event.target as HTMLInputElement;
    const containerMensageError = document.querySelector(`.boxError${input.id}`) as HTMLDivElement;

    input.classList.remove('classError');
    containerMensageError.style.display = 'none';

    if(input.id == 'Cpf') {
        RawDataSeller.value[0].Cpf = props.maskCPF(RawDataSeller.value[0].Cpf)
    }else if(input.id == 'Cnpj') {
        RawDataSeller.value[0].Cnpj = props.maskCNPJ(RawDataSeller.value[0].Cnpj)
    }
}

</script>

<template>
    <form @submit="submit" id="containerFormSeller">
        <section class="sections">
            <aside class="asides">
                <input 
                type="text"
                id="Name"
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Name"

                >
                <label for="Name">Nome</label>
                <div class="containerMensageError boxErrorName">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input 
                type="text" 
                id="Surname" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Surname"

                >
                <label for="Surname">Sobrenome</label>
                <div class="containerMensageError boxErrorSurname">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections"> 
            <aside class="asides">
                <input 
                type="text" 
                id="Cpf" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Cpf"
                maxlength="14"

                >
                <label for="Cpf">CPF</label>
                <div class="containerMensageError boxErrorCpf">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input 
                type="text" 
                id="Cnpj" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Cnpj"
                maxlength="18"

                >
                <label for="Cnpj">CNPJ</label>
                <div class="containerMensageError boxErrorCnpj">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>


        <section class="sections"> 
            <aside class="asides_full asides">
                <input 
                type="text" 
                id="LegalName" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].LegalName"

                >
                <label for="LegalName">Nome legal</label>
                <div class="containerMensageError boxErrorLegalName">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections">
            <aside class="asides">
                <input 
                type="text" 
                id="Email" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Email"

                >
                <label for="Email">Email</label>
                <div class="containerMensageError boxErrorEmail">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input 
                type="text" 
                id="ConfirmEmail" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].ConfirmEmail"

                >
                <label for="ConfirmEmail">Confirme seu email</label>
                <div class="containerMensageError boxErrorConfirmEmail">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections">
            <aside class="asides">
                <input 
                type="password" 
                id="Password" 
                @keyup="props.styleInputFocus"
                @input="KeyInputs"
                v-model="RawDataSeller[0].Password"

                >
                <label for="Password">Senha</label>
                <div class="containerMensageError boxErrorPassword">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides asideButton">
                <button id="buttonRegisterSeller">Cadastrar</button>
            </aside>
        </section>
    </form>
</template>

<style scoped>
#containerFormSeller {
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
.asides {
    width: 45%;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    color: #ffffff;
}
.asides_full {
    width: 100%;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    color: #ffffff;
}

.asides > input {
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

.asides > input:focus {
    border-bottom: 3px solid #ffffff;
}
.asides > label {
    transform: translateY(-30px);
    transition: all 0.3s ease-in-out;
    font-size: 1.2vw;
}
.asides > input:focus + label {
    transform: translateY(-55px);
   
}

.containerMensageError {
    display: none;
    /* border: 1px solid red; */
    transform: translateY(-10px);
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

.classActiveFocus {
    transform: translateY(-55px) !important;
}
.asideButton {
    /* border: 1px solid red; */
    display: flex;
    align-items: flex-end;
}
#buttonRegisterSeller {
    width: 50%;
    padding: 10px 0;
    background-color: #ffffff;
    border: none;
    border-radius: 7px;
    color: #313131;
    font-weight: 100;
    cursor: pointer;
    font-size: 1.1vw;
    transition: all 0.3s ease;
}

#buttonRegisterSeller:hover {
    scale: 1.1;
}

.classError {
    border-bottom: 3px solid rgb(245, 39, 39) !important;
}
</style>
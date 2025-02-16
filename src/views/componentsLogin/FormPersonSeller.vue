<script setup lang="ts">
import { defineProps } from 'vue';
import { getImageUrl } from '../../utils/imageHelper'

const props = defineProps<{
    styleInputFocus: (event: Event) => void;
}>();

</script>

<template>
    <form id="containerFormSeller">
        <section class="sections">
            <aside class="asides">
                <input type="text" id="Name" @keyup="props.styleInputFocus">
                <label for="Name">Nome</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="text" id="Surname" @keyup="props.styleInputFocus">
                <label for="Surname">Sobrenome</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections"> 
            <aside class="asides">
                <input type="text" id="Cpf" @keyup="props.styleInputFocus">
                <label for="Cpf">CPF</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="text" id="Cnpj" @keyup="props.styleInputFocus">
                <label for="Cnpj">CNPJ</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>


        <section class="sections"> 
            <aside class="asides_full asides">
                <input type="text" id="LegalName" @keyup="props.styleInputFocus">
                <label for="LegalName">Nome legal</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections">
            <aside class="asides">
                <input type="text" id="Email" @keyup="props.styleInputFocus">
                <label for="Email">Email</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="text" id="ConfirmEmail" @keyup="props.styleInputFocus">
                <label for="ConfirmEmail">Confirme seu email</label>
                <div class="containerMensageError">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sections">
            <aside class="asides">
                <input type="password" id="Password" @keyup="props.styleInputFocus">
                <label for="Password">Senha</label>
                <div class="containerMensageError">
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
</style>
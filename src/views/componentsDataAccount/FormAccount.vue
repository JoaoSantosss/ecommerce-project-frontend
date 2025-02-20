<script setup lang="ts">
import { ref } from 'vue'
import type * as interfaces from '../../interfaces/interfaces'
import { getImageUrl } from '../../utils/imageHelper'

const RawDataAccount = ref<interfaces.TypeRawDataAccount[]>([{
    Name: '',
    Telephone: '',
}])


console.log(RawDataAccount);


const props = defineProps<{
    styleInputFocus: (event: Event) => void;
}>();

async function submit(event: Event): Promise<void> {
    event.preventDefault();


}
</script>

<template>
    <form @submit="submit" id="containerFormDataAccount">
        <section class="sections">
            <aside class="asides">
                <input 
                 type="text" 
                 id="Name" 
                 @keyup="props.styleInputFocus"

                >
                <label for="Name">Nome</label>
                <div class="containerMensageError boxErrorName">
                    <p>teste</p>
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
    </form>
</template>

<style>

#containerFormDataAccount {
    border: 2px solid red;
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


/*SERVE PARA REMOVE AQUELA COR CLARA QUANDO O NAVEGADOR AJUDA O USUÁRIO A PREENCHER O CAMPO*/
input:-webkit-autofill {
  background-color: transparent !important;
  box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
  color: white !important; /* Define a cor do texto como branco */
  -webkit-text-fill-color: white !important; /* Garante a cor do texto no autofill */
  transition: background-color 5000s ease-in-out 0s;
}


.asides > input:focus {
    border-bottom: 3px solid #ffffff;
}
.asides > label {
    transform: translateY(-30px);
    transition: all 0.3s ease-in-out;
    font-size: 1.1rem;
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
</style>
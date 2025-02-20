<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type * as interfaces from '../../interfaces/interfaces'
import { getImageUrl } from '../../utils/imageHelper'
import Buttons from '../../components/SubComponents/Buttons.vue'


const props = defineProps<{
    styleInputFocus: (event: Event) => void;
}>();

const RawDataAccount = ref<interfaces.TypeRawDataAccount[]>([{
    Name: 'exemple',
    Telephone: 'exemple',
    Email: 'exemple',
    Cpf: 'exemple'
}])



function AlterDataAccount(): void {
    const sections = document.querySelectorAll('.sections');
    sections.forEach((section) => {
        section.classList.toggle('NotClick');
    })
}

onMounted((): void => {
    const UserData = localStorage.getItem('UserData');
    if (UserData) {
        // console.log(JSON.parse(UserData));
        const UserDataObj = JSON.parse(UserData) as interfaces.UserData;

        RawDataAccount.value[0].Name = UserDataObj.name;
        RawDataAccount.value[0].Email = UserDataObj.email;
        RawDataAccount.value[0].Cpf = UserDataObj.cpf;
        // RawDataAccount.value[0].Telephone = UserDataObj.telephone;
        
    }
})

async function submit(event: Event): Promise<void> {
    event.preventDefault();

    // alert('submit')
    
}
</script>

<template>
    <form @submit="submit">
        <section class="sections NotClick">
            <aside class="asides">
                <input type="text" id="Name" @keyup="props.styleInputFocus" v-model="RawDataAccount[0].Name">
                <label for="Name" class="classActiveFocus">Nome</label>
                <div class="containerMensageError boxErrorName">
                    <p>teste</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="text" id="Telephone" @keyup="props.styleInputFocus" v-model="RawDataAccount[0].Telephone">
                <label for="Telephone" class="classActiveFocus">Telefone</label>
                <div class="containerMensageError boxErrorTelephone">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>


        <section class="sections NotClick">
            <aside class="asides">
                <input type="text" id="Email" @keyup="props.styleInputFocus" v-model="RawDataAccount[0].Email">
                <label for="Email" class="classActiveFocus">Email</label>
                <div class="containerMensageError boxErrorEmail">
                    <p>teste</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>

            <aside class="asides">
                <input type="text" id="CPF" @keyup="props.styleInputFocus" v-model="RawDataAccount[0].Cpf">
                <label for="CPF" class="classActiveFocus">CPF</label>
                <div class="containerMensageError boxErrorCPF">
                    <p>Preencha o campo!</p>
                    <div class="box_iconAlert">
                        <img :src="getImageUrl('iconAlert.png')" alt="">
                    </div>
                </div>
            </aside>
        </section>

        <section class="sectionsFull">

            <aside class="asidesFull">
                <Buttons :text="'Alterar'" :type="'button'" @click="AlterDataAccount" />
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
.NotClick {
    pointer-events: none;
    opacity: 0.4;
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
    font-size: 1.5rem;
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
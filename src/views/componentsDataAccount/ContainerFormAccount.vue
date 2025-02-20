<script setup lang="ts">
import { ref } from 'vue'
import IconUser from '../../components/SubComponents/IconUser.vue';
import Buttons from '../../components/SubComponents/Buttons.vue';
import FormAccount from './FormAccount.vue';
import FormAlterPassword from './FormAlterPassword.vue';

const showFormDataAccount = ref(true);

const textButton = ref('Alterar sua senha');

function toggleFormDataAccount(event: Event): void {
    showFormDataAccount.value = !showFormDataAccount.value;

    const element = event.currentTarget as HTMLButtonElement;
    element.classList.toggle('active');

    if (element.classList.contains('active')) {
        textButton.value = 'Alterar seus dados';
    } else {
        textButton.value = 'Alterar sua senha';
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

</script>

<template>
    <div id="containerFormAccount">
        <div id="containerTitleDataAccount">

            <div id="container_iconUser">
                <IconUser />
                <h1>Meus dados</h1>
            </div>

            <div id="button_toggleFormDataAccount">
                <Buttons :text="textButton" :type="'button'" @click="toggleFormDataAccount" />
            </div>

        </div>

        <div id="containerFormDataAccount">
            <h2>Dados de conta</h2>
            <FormAccount v-if="showFormDataAccount" :styleInputFocus="styleInputFocus" />

            <FormAlterPassword v-else :styleInputFocus="styleInputFocus" />
        </div>
    </div>
</template>

<style scoped>
#containerFormAccount {
    width: 100%;
    min-height: 80vh;
    /* background-color: aliceblue */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 50px;
}

#containerTitleDataAccount {
    width: 100%;
    height: 13vh;
    /* border: 1px solid green; */
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    
}

#container_iconUser {
    width: 40%;
    display: flex;
    align-items: center;
    gap: 20px;
    /* border: 2px solid blue; */
}
h1 {
    color: var(--color--text);
    font-size: 2.3vw;
    font-weight: 100;
}

#button_toggleFormDataAccount {
    width: 50%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#containerFormDataAccount {
    width: 100%;
    /* border: 1px solid rgb(0, 255, 34); */
    color: var(--color--text);
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>
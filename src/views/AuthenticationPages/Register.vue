<script>
import ButtonToggleForm from './ButtonToggleForm.vue';
import FormCommon from './FormCommon.vue';
import FormSeller from './FormSeller.vue';


export default {
    name: 'Register',
    components: { ButtonToggleForm, FormCommon, FormSeller },
    data() {
        return {
            nameBtnForms: 'Cadastro vendedor',
            titleForm: 'Cadastro usuário comum',
            showForms: true
        }
    },
    methods: {
        ToggleForms(event) {
            const button = event.target

            button.classList.toggle('viewForms');

            if(button.classList.contains('viewForms')) {
                //vendedor
                this.showForms = false
                this.nameBtnForms = 'Cadastro user comum'
                this.titleForm = 'Cadastro usuário vendedor'
            } else {
                //comum
                this.showForms = true
                this.nameBtnForms = 'Cadastro vendedor'
                this.titleForm = 'Cadastro usuário comum'
            }
        },
        BackHome(home, nameRouter) {
            this.$router.push({ name: nameRouter, params: { home } });
        }
    }
}
</script>

<template>
    <div id="container_backgrondRegister">
        <p @click="BackHome('Home', 'home')" id="Btn_back">voltar</p>
        <div id="container_forms">
            <div id="container_topInforRegister">
                <h1>{{ titleForm }}</h1>
                <ButtonToggleForm :TextContentBtn="nameBtnForms" @click="ToggleForms" :showIcon="true"/>
            </div>


            <FormCommon v-if="showForms"/>

            <FormSeller v-else/>
        </div>
    </div>
</template>

<style scoped>
#container_backgrondRegister {
    width: 100vw;
    min-height: 100vh;
    /* border: 2px solid red; */
    background: url('../../assets/image/backgrond_register.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#container_forms {
    width: 80%;
    min-height: 80vh;
    background-color: rgba(255, 255, 255, 0.197);
    border-radius: 10px;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

#container_topInforRegister {
    /* border: 2px solid red; */
    width: 100%;
    height: 15%;
    min-height: 3rem;
    color: var(--color--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
}
</style>
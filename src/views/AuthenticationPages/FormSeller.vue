<script>
import ButtonToggleForm from './ButtonToggleForm.vue'

export default {
    name: 'FormSeller',
    components: { ButtonToggleForm },
    data() {
        return {
            UserDateSeller: {
                name: '',
                surname: '',
                cpf: '',
                cnpj: '',
                legalName: '',
                email: '',
                confEmail: '',
                password: ''
            },

            TratUserDateSeller: {
                email: "",
                password: "",
                name: "",
                cnpj: "",
                legalName: "",
                cpf: ""
            },
            fullName: '',
            dataCreateFormSeller: [
                [
                    { id: 1 , forName: 'Nome', typeInput: 'text', classAside: 'asidesForms', modelKey: 'name' },
                    { id: 2 , forName: 'Sobrenome', typeInput: 'text', classAside: 'asidesForms', modelKey: 'surname' }
                ],
                [
                    { id: 3 , forName: 'Cpf', typeInput: 'text', classAside: 'asidesForms', modelKey: 'cpf' },
                    { id: 4 , forName: 'Cnpj', typeInput: 'text', classAside: 'asidesForms', modelKey: 'cnpj' }
                ],
                [
                    { id: 5 , forName: 'Nome legal', typeInput: 'text', classAside: 'full', modelKey: 'legalName' },
                ],
                [
                    { id: 7 , forName: 'email', typeInput: 'text', classAside: 'asidesForms', modelKey: 'email' },
                    { id: 7 , forName: 'confirme seu email', typeInput: 'text', classAside: 'asidesForms', modelKey: 'confEmail' },
                ],
                [
                    { id: 5 , forName: 'Senha', typeInput: 'text', classAside: 'asidesForms', modelKey: 'password' },
                ],
            ],
            Mensagem_de_erro_personalizada: 'deu merda',
            mensage_BtnRegister: 'Cadastre-se'
        }
    },
    methods: {
        showStyleInputs(event) {
            const input = event.target

            this.fullName = `${this.UserDateSeller.name}`
            this.fullName += ` ${this.UserDateSeller.surname}`

            this.TratUserDateSeller = {
                email: this.UserDateSeller.email,
                password: this.UserDateSeller.password,
                name: this.fullName,
                cnpj: this.UserDateSeller.cnpj,
                legalName: this.UserDateSeller.legalName,
                cpf: this.UserDateSeller.cpf,
            }

            console.log(this.TratUserDateSeller)

            // console.log(this.fullName)

            if(input.value.trim() !== '') {
                input.classList.add('maintain_effect')
            } else {
                input.classList.remove('maintain_effect')
            }
        },
        stopSubmit(event) {
            event.preventDefault()
        },
    },
    
}
</script>

<template>
    <div id="containerFormCommon">
        <form @submit="stopSubmit">
            <section v-for="itemsSections in dataCreateFormSeller" :key="itemsSections" class="sectionsForm">
                <aside v-for="itemsInputs_Form in itemsSections" :key="itemsInputs_Form.id" :class="itemsInputs_Form.classAside">
                    <input v-model="UserDateSeller[itemsInputs_Form.modelKey]" :type="itemsInputs_Form.typeInput" :name="itemsInputs_Form.forName" :id="itemsInputs_Form.forName" @keyup="showStyleInputs">
                    <label :for="itemsInputs_Form.forName">{{ itemsInputs_Form.forName }}</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
            </section>
            <section class="sectionsForm" id="sectionBtn">
                <aside class="asidesForms" id="asideBtn">
                    <!-- <button id="buttonRegister">Cadastre-se</button> -->
                    <ButtonToggleForm :TextContentBtn="mensage_BtnRegister" :showIcon="false" id="buttonRegister"/>
                </aside>
            </section>
        </form>
    </div>
</template>

<style scoped>
#containerFormCommon {
    width: 95%;
    margin: auto;
    color: var(--color--text);
}
.sectionsForm {
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100px;
}

.asidesForms {
    display: flex;
    flex-direction: column;
    width: 45%;
    /* border: 2px solid red; */
    gap: 10px;
    
}

.full {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 2px solid red; */
    gap: 10px;
}
label {
    transform: translateY(-45px);
    transition: all 0.4s;
    padding-left: 5px;
    font-size: 1.5rem;
}

input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgb(171, 171, 171);
    outline: none;
    color: var(--color--text);
    padding: 6px;
    transition: all 0.4s;
    font-size: 1.4rem
}
input:focus {
    border-bottom: 3px solid rgb(255, 255, 255);
}
input:focus + label {
    transform: translateY(-75px);
}

input.maintain_effect + label {
    transform: translateY(-75px);
}
.container_ShowError {
    display: none; /*aa flex*/
    align-items: center;
    gap: 5px;
    color: red;
    font-weight: bold;
}


#sectionBtn {
    display: flex;
    justify-content: flex-end;
    
}
#asideBtn {
    display: flex;
    align-items: flex-end;
}
#buttonRegister {
    padding: 10px;
    border-radius: 7px;
    border: none;
    font-weight: bold;
    width: 50%;
    display: flex;
    justify-content: center;
}
</style>
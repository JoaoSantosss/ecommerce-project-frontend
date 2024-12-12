<script>
import ButtonToggleForm from './ButtonToggleForm.vue';
import Modal from './Modal.vue';

export default {
    name: 'FormCommon',
    components: { ButtonToggleForm, Modal },
    props: {
        isValidCPF: { type: Function, Required: true },
        isEmailValue:{ type: Function, Required: true },
        applyCpfMask: { type: Function, Required: true },
        BackHome: { type: Function, Required: true },
        closeModal: { type: Function, Required: true }
    },
    data() {
        return {
            endpoint: 'http://localhost:8080/',
            UserDataCommon: {
                name: '',
                surname: '',
                cpf: '',
                email: '',
                confEmail: '',
                password: ''
            },
            TratUserDataCommon: {
                email: "",
                password: "",
                name: "",
                cpf: ""
            },
            mensageCustom_error: 'O campo tem que ter no mínimo 3 caracteres!',
            mensageCustom_error_Cpf: 'CPF inválido!',
            mensageCustom_error_email: 'Formato de email inválido!',
            mensageCustom_error_confEmail: 'Este e-mail difere do anterior!',
            mensageCustom_error_password: 'No mínimo 8 caracteres!',
            mensage_BtnRegister: 'Cadastre-se',
            fullname: '',
            showModal: false,
            mensageModal: '',
            show_accessSystem: false,
            textContentBtn: 'Logar'
        }
    },
    methods: {
        
        showStyleInputs(event) {
            const input = event.target;
            let asides = input.parentNode;
            let container = asides.querySelector('.container_ShowError');

            this.fullname = `${this.UserDataCommon.name}`
            this.fullname += ` ${this.UserDataCommon.surname}`

            this.TratUserDataCommon = {
                email: this.UserDataCommon.email,
                password: this.UserDataCommon.password,
                name: this.fullname,
                cpf: this.UserDataCommon.cpf
            }

            console.log(this.TratUserDataCommon)

            if (input.value.trim() !== '') {
                input.classList.add('maintain_effect');
            } else {
                input.classList.remove('maintain_effect');
            }

            if(input.value.length < 3) {
                input.classList.add('inputError');
                container.style.display = 'flex';
                this.mensageCustom_error = 'O campo deve ter no mínimo 3 caractres!';
            } else {
                input.classList.remove('inputError');
                container.style.display = 'none';
            }

            if (input.id === 'cpfCommon') {
                // Adiciona máscara ao CPF
                input.value = this.applyCpfMask(input.value);
            }

        },

        async GetDataRegisterCommon() {
            try {
                const response = await fetch(`${this.endpoint}user`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.TratUserDataCommon)
                })

                if (!response.ok) {
                    this.showModal = true
                    this.mensageModal = 'Erro ao cadastrar usuário'
                    this.show_accessSystem = false
                    throw new Error(`HTTP error! status: ${response.status}`);
                } 

                const data = await response.json()
                console.log('essa é a data:', data)

                this.showModal = true
                this.show_accessSystem = true
                this.mensageModal = 'Usuário cadastrado com sucesso!'

            } catch (error) {
                console.log('Infelizmente deu merda', error)
            }
        },
        genereteError(input) {
            input.classList.add('inputError')
            input.focus()
        },
        stopSubmit(event) {
            event.preventDefault();
            // const form = event.target
            const inputName = this.$refs.nameCommon
            const inputSurname = this.$refs.surnameCommon
            const inputcpf = this.$refs.cpfCommon
            const inputEmail = this.$refs.emailCommon
            const inputConfEmail = this.$refs.Conf_emailCommon
            const inputPassowrd = this.$refs.passwordCommon


            if(inputName.value.length < 3) return this.generateError(inputName);
            if(inputSurname.value.length < 3) return this.generateError(inputSurname);
            if(!this.isValidCPF(inputcpf.value)) return this.generateError(inputcpf);
            if(!this.isEmailValue(inputEmail.value)) return this.generateError(inputEmail);
            if(inputConfEmail.value !== inputEmail.value) return this.generateError(inputConfEmail);
            if(inputPassowrd.value.length < 8) return this.generateError(inputPassowrd);

            // alert('')

            this.GetDataRegisterCommon(); 
        },
        generateError(input) {
            let aside = input.parentNode
            let container = aside.querySelector('.container_ShowError')
            input.classList.add('inputError');
            input.focus();
            container.style.display = 'flex'
        },
        accessSystem() {
            this.showModal = false
            setTimeout(()=> {
                this.BackHome('Login', 'PageLogin')
            }, 1500)  
        },
        closeModal() {
            this.showModal = false
            window.location.reload();
        }
    }
}
</script>

<template>
    <Modal v-if="showModal" 
    @accessSystem="accessSystem"
    @closeModal="closeModal"
    :mensageModal="mensageModal"
    :show_accessSystem="show_accessSystem"
    :textContentBtn="textContentBtn"
    />
    <div id="containerFormCommon">
        <form @submit="stopSubmit">

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input v-model="UserDataCommon.name" type="text" id="nameCommon" name="nameCommon" ref="nameCommon" @keyup="showStyleInputs">
                    <label for="nameCommon">Nome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error }}</p>
                    </div>
                </aside>

                <aside class="asidesForms">
                    <input v-model="UserDataCommon.surname" type="text" id="surnameCommon" name="surnameCommon" ref="surnameCommon" @keyup="showStyleInputs">
                    <label for="surnameCommon">Sobrenome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesFormsfull">
                    <input v-model="UserDataCommon.cpf" type="text" id="cpfCommon" name="cpfCommon" ref="cpfCommon" @keyup="showStyleInputs" maxlength="14">
                    <label for="cpfCommon">CPF</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_Cpf }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input v-model="UserDataCommon.email" type="text" id="emailCommon" name="emailCommon" ref="emailCommon" @keyup="showStyleInputs">
                    <label for="emailCommon">Email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_email }}</p>
                    </div>
                </aside>

                <aside class="asidesForms">
                    <input v-model="UserDataCommon.confEmail" type="text" id="Conf_emailCommon" name="Conf_emailCommon" ref="Conf_emailCommon" @keyup="showStyleInputs">
                    <label for="Conf_emailCommon">Confirme seu email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_confEmail }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm" id="sectionBtn">
                <aside class="asidesForms">
                    <input v-model="UserDataCommon.password" type="password" id="passwordCommon" name="passwordCommon" ref="passwordCommon" @keyup="showStyleInputs">
                    <label for="passwordCommon">Senha</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_password }}</p>
                    </div>
                </aside>
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
    /* border: 1px solid red; */
    width: 95%;
    /* height: 70%; */
    margin: auto;
    color: var(--color--text);
}
form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 30px; */
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

.asidesFormsfull {
    display: flex;
    flex-direction: column;
    width: 100%;
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

.inputError {
    border-bottom: 3px solid rgb(185, 0, 0) !important;
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
    transform: translateY(-300%);
    font-size: 0.7rem;
}


#sectionBtn {
    display: flex;
    /* justify-content: flex-end; */
}
#asideBtn {
    display: flex;
    align-items: flex-end;
    justify-content: center;
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
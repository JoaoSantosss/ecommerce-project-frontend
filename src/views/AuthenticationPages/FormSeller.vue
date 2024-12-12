<script>
import ButtonToggleForm from './ButtonToggleForm.vue'
import Modal from './Modal.vue';

export default {
    name: 'FormSeller',
    components: { ButtonToggleForm, Modal },
    props: {
        isValidCPF: { type: Function, Required: true },
        isValidCNPJ: { type: Function, Required: true },
        isEmailValue: { type:Function, Required: true },
        applyCpfMask: { type: Function, Required: true },
        applyCnpjMask: { type: Function, Required: true },
        BackHome: { type: Function, Required: true },
    },
    data() {
        return {
            endpoint: 'http://localhost:8080/',
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
            mensageCustom_error: 'O campo tem que ter no mínimo 3 caracteres!',
            mensageCustom_error_Cpf: 'CPF inválido!',
            mensageCustom_error_Cnpj: 'CNPJ inválido!',
            mensageCustom_error_email: 'Formato de email inválido!',
            mensageCustom_error_confEmail: 'Este e-mail difere do anterior!',
            mensageCustom_error_password: 'No mínimo 8 caracteres!',
            mensage_BtnRegister: 'Cadastre-se',
            fullName: '',
            showModal: false,
            mensageModal: '',
            show_accessSystem: false,
            textContentBtn: 'Logar',
        }
    },
    methods: {

        showStyleInputs(event) {
            const input = event.target;
            let asides = input.parentNode;
            let container = asides.querySelector('.container_ShowError');

            this.fullName = `${this.UserDateSeller.name}`
            this.fullName += ` ${this.UserDateSeller.surname}`

            this.TratUserDateSeller = {
                email: this.UserDateSeller.email,
                password: this.UserDateSeller.password,
                name: this.UserDateSeller.name,
                cnpj: this.UserDateSeller.cnpj,
                legalName: this.UserDateSeller.legalName,
                cpf: this.UserDateSeller.cpf 
            }

            if (input.value.trim() !== '') {
                input.classList.add('maintain_effect');
            } else {
                input.classList.remove('maintain_effect');
            }
            if(input.value.length < 3) {
                input.classList.add('inputError');
                container.style.display = 'flex';
                this.Mensagem_de_erro_personalizada = 'O campo deve ter no mínimo 3 caractres!'
            } else {
                input.classList.remove('inputError');
                container.style.display = 'none';
            }
            if (input.id === 'cpfSeller') {
                input.value = this.applyCpfMask(input.value);
            }
            if (input.id === 'cnpjSeller') {
                input.value = this.applyCnpjMask(input.value);
            }  
        },

        async GetDataRegisterSeller() {
            try {
                const response = await fetch(`${this.endpoint}user/seller`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.TratUserDateSeller)
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
                console.log("Infelizmente deu merda", error)
            }
        },
        
        stopSubmit(event) {
            this.num++
            event.preventDefault()

            const inputName = this.$refs.nameSeller;
            const inputSurname = this.$refs.surnameSeller;
            const inputcpf = this.$refs.cpfSeller;
            const inputcnpj = this.$refs.cnpjSeller;
            const inputlegalName = this.$refs.legalName;
            const inputEmail = this.$refs.emailSeller;
            const inputConfEmail = this.$refs.Conf_emailSeller;
            const inputPassowrd = this.$refs.passwordSeller;

            if(inputName.value.length < 3) return this.generateError(inputName);
            if(inputSurname.value.length < 3) return this.generateError(inputSurname);
            if(!this.isValidCPF(inputcpf.value)) return this.generateError(inputcpf);
            if(!this.isValidCNPJ(inputcnpj.value)) return this.generateError(inputcnpj);
            if(inputlegalName.value.length < 3) return this.generateError(inputlegalName);
            if(!this.isEmailValue(inputEmail.value)) return this.generateError(inputEmail);
            if(inputConfEmail.value !== inputEmail.value) return this.generateError(inputConfEmail);
            if(inputPassowrd.value.length < 8) return this.generateError(inputPassowrd);


            this.GetDataRegisterSeller()
            
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

    },
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
                    <input v-model="UserDateSeller.name" type="text" id="nameSeller" name="nameSeller" ref="nameSeller" @keyup="showStyleInputs">
                    <label for="nameSeller">Nome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error }}</p>
                    </div>
                </aside>
                <aside class="asidesForms">
                    <input v-model="UserDateSeller.surname" type="text" id="surnameSeller" name="surnameSeller" ref="surnameSeller" @keyup="showStyleInputs">
                    <label for="surnameSeller">Sobrenome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input v-model="UserDateSeller.cpf" type="text" id="cpfSeller" name="cpfSeller" ref="cpfSeller" @keyup="showStyleInputs" maxlength="14">
                    <label for="cpfSeller">CPF</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_Cpf }}</p>
                    </div>
                </aside>
                <aside class="asidesForms">
                    <input v-model="UserDateSeller.cnpj" type="text" id="cnpjSeller" name="cnpjSeller" ref="cnpjSeller" @keyup="showStyleInputs" maxlength="18">
                    <label for="cnpjSeller">CNPJ</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_Cnpj }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesFormsFull">
                    <input v-model="UserDateSeller.legalName" type="text" id="legalName" name="legalName" ref="legalName" @keyup="showStyleInputs">
                    <label for="legalName">Nome Legal</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input v-model="UserDateSeller.email" type="text" id="emailSeller" name="emailSeller" ref="emailSeller" @keyup="showStyleInputs">
                    <label for="emailSeller">Email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_email }}</p>
                    </div>
                </aside>

                <aside class="asidesForms">
                    <input v-model="UserDateSeller.confEmail" type="text" id="Conf_emailSeller" name="Conf_emailSeller" ref="Conf_emailSeller" @keyup="showStyleInputs">
                    <label for="Conf_emailSeller">Confirme seu email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ mensageCustom_error_confEmail }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm" id="sectionBtn">
                <aside class="asidesForms">
                    <input v-model="UserDateSeller.password" type="password" id="passwordSeller" name="passwordSeller" ref="passwordSeller" @keyup="showStyleInputs">
                    <label for="passwordSeller">Senha</label>
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
.asidesFormsFull {
    display: flex;
    flex-direction: column;
    width: 100%;
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
.inputError {
    border-bottom: 3px solid rgb(255, 0, 0) !important;
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
    color: rgb(255, 0, 0);
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
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
        },
        isValidCPF(cpf) {
            // Remove caracteres não numéricos
            cpf = cpf.replace(/[^\d]+/g, '');

            // Verifica se o CPF tem 11 dígitos e não é uma sequência de dígitos iguais
            if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
                return false;
            }

            // Função para calcular o dígito verificador
            const calculateDigit = (digits, weights) => {
                let sum = 0;
                for (let i = 0; i < digits.length; i++) {
                    sum += digits[i] * weights[i];
                }
                const remainder = (sum * 10) % 11;
                return remainder === 10 ? 0 : remainder;
            };

            // Calcula o primeiro dígito verificador
            const firstNineDigits = cpf.substring(0, 9).split('').map(Number);
            const firstDigit = calculateDigit(firstNineDigits, [10, 9, 8, 7, 6, 5, 4, 3, 2]);

            // Verifica o primeiro dígito verificador
            if (firstDigit !== Number(cpf.charAt(9))) return false;

            // Calcula o segundo dígito verificador
            const firstTenDigits = cpf.substring(0, 10).split('').map(Number);
            const secondDigit = calculateDigit(firstTenDigits, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

            // Verifica o segundo dígito verificador
            return secondDigit === Number(cpf.charAt(10));
        },

        isValidCNPJ(cnpj) {
            cnpj = cnpj.replace(/[^\d]+/g, '');

            if (cnpj.length !== 14) {
                return false;
            }

            // Elimina CNPJs inválidos conhecidos
            if (/^(\d)\1*$/.test(cnpj)) {
                return false;
            }

            // Validação do primeiro dígito verificador
            let tamanho = cnpj.length - 2;
            let numeros = cnpj.substring(0, tamanho);
            let digitos = cnpj.substring(tamanho);
            let soma = 0;
            let pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(0)) {
                return false;
            }

            // Validação do segundo dígito verificador
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(1)) {
                return false;
            }

            return true;
        },

        isEmailValue(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

            return emailRegex.test(email);
        },

        applyCpfMask(value) {
            value = value.replace(/[^\d]/g, "");

            return value
                .replace(/^(\d{3})(\d)/, "$1.$2")
                .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
                .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
        },

        applyCnpjMask(value) {
            value = value.replace(/[^\d]/g, "");

            return value
                .replace(/^(\d{2})(\d)/, "$1.$2")
                .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
                .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
                .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
        },
        BackHome(home, nameRouter) {
            this.$router.push({ name: nameRouter, params: { home } });
        },
        
    }
}
</script>

<template>
    <div id="container_backgrondRegister">
        
        <div id="containerTopRegister">
            <div id="containerLogoAplication">
                <img src="../../assets/image/Logo.png" alt="ImageLogoAplication">
            </div>
            <p @click="BackHome('Home', 'home')" id="Btn_back">voltar</p>
        </div>
        <div id="container_forms">
            <div id="container_topInforRegister">
                <h1>{{ titleForm }}</h1>
                <ButtonToggleForm :TextContentBtn="nameBtnForms" @click="ToggleForms" :showIcon="true"/>
            </div>


            <FormCommon v-if="showForms"
            :isValidCPF="isValidCPF"
            :isEmailValue="isEmailValue"
            :applyCpfMask="applyCpfMask"
            :BackHome="BackHome"
            :closeModal="closeModal"
            />

            <FormSeller v-else 
            :isValidCPF="isValidCPF"
            :isValidCNPJ="isValidCNPJ"
            :isEmailValue="isEmailValue"
            :applyCpfMask="applyCpfMask"
            :applyCnpjMask="applyCnpjMask"
            :BackHome="BackHome"
            />

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
#containerTopRegister {
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
}

#containerLogoAplication {
    width: 15rem;
}
#containerLogoAplication > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
#Btn_back {
    /* border: 2px solid red; */
    color: var(--color--text);
    font-size: 1.7rem;
    cursor: pointer;
}
</style>
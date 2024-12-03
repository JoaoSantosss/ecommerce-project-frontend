<script>
import ButtonToggleForm from './ButtonToggleForm.vue'

export default {
    name: 'FormSeller',
    components: { ButtonToggleForm },
    data() {
        return {
            UserDateSeller: {
                email: "",
                password: "",
                name: "",
                cnpj: "",
                legalName: "",
                cpf: ""
            },
            Mensagem_de_erro_personalizada: 'O campo tem que ter no mínimo 3 caracteres!',
            Mensagem_de_erro_personalizada_Cpf: 'O campo deve ter no mínimo 3 caractres!',
            Mensagem_de_erro_personalizada_Cnpj: 'O campo deve ter no mínimo 3 caractres!',
            mensage_BtnRegister: 'Cadastre-se',
            containerInputs: []
        }
    },
    methods: {

        showStyleInputs(event) {
            const input = event.target;
            let asides = input.parentNode;
            let container = asides.querySelector('.container_ShowError');

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
                // Adiciona máscara ao CPF
                input.value = this.applyCpfMask(input.value);

                const cpf = input.value.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

                if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
                    console.error("CPF inválido: estrutura incorreta ou números repetidos.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cpf = 'CPF inválido: estrutura incorreta ou números repetidos.'
                    return;
                }

                let soma = 0;

                // Verificar primeiro dígito
                for (let i = 0; i < 9; i++) {
                    soma += parseInt(cpf.charAt(i)) * (10 - i);
                }

                let resto = (soma * 10) % 11;
                if (resto === 10 || resto === 11) resto = 0;

                if (resto !== parseInt(cpf.charAt(9))) {
                    console.error("CPF inválido: primeiro dígito verificador está incorreto.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cpf = 'CPF inválido: primeiro dígito verificador está incorreto.'
                    return;
                }

                soma = 0;

                // Verificar segundo dígito
                for (let i = 0; i < 10; i++) {
                soma += parseInt(cpf.charAt(i)) * (11 - i);
                }

                resto = (soma * 10) % 11;
                if (resto === 10 || resto === 11) resto = 0;

                if (resto !== parseInt(cpf.charAt(10))) {
                    console.error("CPF inválido: segundo dígito verificador está incorreto.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cpf = 'CPF inválido: segundo dígito verificador está incorreto.'
                    return;
                }

                console.log("CPF válido!");
            }

            if (input.id === 'cnpjSeller') {
                // Adiciona máscara ao CNPJ
                input.value = this.applyCnpjMask(input.value);

                const cnpj = input.value.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

                // Verifica se o CNPJ tem 14 dígitos e não é composto por números repetidos
                if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
                    console.error("CNPJ inválido: estrutura incorreta ou números repetidos.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cnpj = 'CNPJ inválido: estrutura incorreta ou números repetidos.'
                    return;
                }

                let tamanho = cnpj.length - 2;
                let numeros = cnpj.substring(0, tamanho);
                let digitos = cnpj.substring(tamanho);
                let soma = 0;
                let pos = tamanho - 7;

                // Verificar o primeiro dígito
                for (let i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2) pos = 9;
                }

                let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
                    if (resultado !== parseInt(digitos.charAt(0))) {
                    console.error("CNPJ inválido: primeiro dígito verificador está incorreto.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cnpj = 'CNPJ inválido: primeiro dígito verificador está incorreto.'
                    return;
                }

                tamanho += 1;
                numeros = cnpj.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;

                // Verificar o segundo dígito
                for (let i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2) pos = 9;
                }

                resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
                if (resultado !== parseInt(digitos.charAt(1))) {
                    console.error("CNPJ inválido: segundo dígito verificador está incorreto.");
                    input.classList.add('inputError');
                    container.style.display = 'flex';
                    this.Mensagem_de_erro_personalizada_Cnpj = 'CNPJ inválido: segundo dígito verificador está incorreto.'
                    return;
                }

                console.log("CNPJ válido!");
            }

            
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
        stopSubmit(event) {
            event.preventDefault()

             this.containerInputs.forEach(soloInput => {
                if(soloInput.value.length < 3) {
                    soloInput.classList.add('inputError')
                    soloInput.focus()
                    let asides = soloInput.parentNode;
                    let container = asides.querySelector('.container_ShowError');
                    container.style.display = 'flex'

                    return
                }
            });
        },
        addToRefs(el) {
            if(el) {
                this.containerInputs.push(el)
            }
        }
    },
}
</script>

<template>
    <div id="containerFormCommon">
        <form @submit="stopSubmit">
            <!-- <section v-for="itemsSections in dataCreateFormSeller" :key="itemsSections" class="sectionsForm">
                <aside v-for="itemsInputs_Form in itemsSections" :key="itemsInputs_Form.id" :class="itemsInputs_Form.classAside">
                    <input v-model="UserDateSeller[itemsInputs_Form.modelKey]" :type="itemsInputs_Form.typeInput" :name="itemsInputs_Form.forName" :id="itemsInputs_Form.forName" @keyup="showStyleInputs">
                    <label :for="itemsInputs_Form.forName">{{ itemsInputs_Form.forName }}</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
            </section> -->

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input type="text" id="nameSeller" name="nameSeller" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="nameSeller">Nome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
                <aside class="asidesForms">
                    <input type="text" id="surnameSeller" name="surnameSeller" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="surnameSeller">Sobrenome</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input type="text" id="cpfSeller" name="cpfSeller" :ref="addToRefs" @keyup="showStyleInputs" maxlength="14">
                    <label for="cpfSeller">CPF</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada_Cpf }}</p>
                    </div>
                </aside>
                <aside class="asidesForms">
                    <input type="text" id="cnpjSeller" name="cnpjSeller" :ref="addToRefs" @keyup="showStyleInputs" maxlength="18">
                    <label for="cnpjSeller">CNPJ</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada_Cnpj }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesFormsFull">
                    <input type="text" id="legalName" name="legalName" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="legalName">Nome Legal</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm">
                <aside class="asidesForms">
                    <input type="text" id="emailSeller" name="emailSeller" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="emailSeller">Email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>

                <aside class="asidesForms">
                    <input type="text" id="Conf_emailSeller" name="Conf_emailSeller" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="Conf_emailSeller">Confirme seu email</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
                    </div>
                </aside>
            </section>

            <section class="sectionsForm" id="sectionBtn">
                <aside class="asidesForms">
                    <input type="text" id="passwordSeller" name="passwordSeller" :ref="addToRefs" @keyup="showStyleInputs">
                    <label for="passwordSeller">Senha</label>
                    <div class="container_ShowError">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <p>{{ Mensagem_de_erro_personalizada }}</p>
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
    border-bottom: 3px solid rgb(142, 0, 0) !important;
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
    color: rgb(142, 0, 0);
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
<script>
import ButtonToggleForm from './ButtonToggleForm.vue';


export default {
    name: 'FormCommon',
    components: { ButtonToggleForm },
    data() {
        return {
            endpoint: 'http://localhost:8080/',
            UserDataCommon: {
                name: '',
                surname: '',
                cpf: '',
                type: '',
                email: '',
                confirmEmail: '',
                password: ''
            },
            TratUserDataCommon: {
                email: "",
                password: "",
                name: "",
                cpf: ""
            },
            fullName: '',
            dataCreateFormCommon: [
                [
                    { id: 1, forName: 'Nome', typeInput: 'text', modelKey: 'name', className: 'inputs' },
                    { id: 2, forName: 'Sobrenome', typeInput: 'text', modelKey: 'surname', className: 'inputs' }
                ],
                [
                    { id: 3, forName: 'Cpf', typeInput: 'text', modelKey: 'cpf', className: 'inputs' },
                    { id: 4, forName: 'Tipo', typeInput: 'text', modelKey: 'type', className: 'inputs' }
                ],
                [
                    { id: 5, forName: 'Email', typeInput: 'text', modelKey: 'email', className: 'inputs' },
                    { id: 6, forName: 'Confirme seu email', typeInput: 'text', modelKey: 'confirmEmail', className: 'inputs' }
                ],
                [
                    { id: 7, forName: 'Senha', typeInput: 'password', modelKey: 'password', className: 'inputs' }
                ]
            ],
            Mensagem_de_erro_personalizada: 'teste de erro',
            mensage_BtnRegister: 'Cadastre-se',
            inputsRefs: []
        }
    },
    methods: {
        mascaraCpf(event) {
            let input = event.target;
            if(input.id === 'Cpf') {
                let cpfValue = input.value
                input.setAttribute('maxlength', '14')

                // Remove caracteres que não sejam números
                cpfValue = cpfValue.replace(/\D/g, '');

                // Adiciona a máscara (###.###.###-##)
                cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
                cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
                cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

                // Atualiza o campo com o valor formatado
                event.target.value = cpfValue;
            }
            
        },
        
        showStyleInputs(event) {
            const input = event.target;

            this.inputsRefs.forEach(soloInput => {
 
                if(soloInput.value.length < 3) {
                    soloInput.classList.add('inputError')
                } else {
                    soloInput.classList.remove('inputError')
                }
            });

            this.fullName = this.UserDataCommon.name
            this.fullName += this.UserDataCommon.surname

            // Limpa os dados de TratUserDataCommon para garantir que a cópia seja feita de forma limpa
            this.TratUserDataCommon = {
                email: this.UserDataCommon.email,
                password: this.UserDataCommon.password,
                name: this.fullName,
                cpf: this.UserDataCommon.cpf
            };

            console.log(JSON.stringify(this.TratUserDataCommon)); // Para verificar os dados copiados

            // Verifica se o campo foi preenchido e adiciona a classe de estilo
            if (input.value.trim() !== '') {
                input.classList.add('maintain_effect');
            } else {
                input.classList.remove('maintain_effect');
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
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json()
                console.log('essa é a data:', data)

            } catch (error) {
                console.log('Infelizmente deu merda', error)
            }
        },
        stopSubmit(event) {
            event.preventDefault();

            // const form = event.target
            // const teste = form.querySelector('.container_ShowError')

            // console.log(teste)

            this.inputsRefs.forEach(soloInput => {
 
                if(soloInput.value.length < 3) {
                    soloInput.classList.add('inputError')
                } else {
                    soloInput.classList.remove('inputError')
                }
            });
            // return

            // this.GetDataRegisterCommon()
        },
        addToRefs(el) {
            if(el) {
                this.inputsRefs.push(el)
            }
        }
        
    }


}
</script>

<template>
    <div id="containerFormCommon">
        <form @submit="stopSubmit">
            <section v-for="itemsSections in dataCreateFormCommon" :key="itemsSections" class="sectionsForm">
                <aside class="asidesForms" v-for="itemsInputs_Form in itemsSections" :key="itemsInputs_Form.id">

                    <input v-model="UserDataCommon[itemsInputs_Form.modelKey]" 
                    :type="itemsInputs_Form.typeInput" 
                    :name="itemsInputs_Form.forName" 
                    :id="itemsInputs_Form.forName" 
                    @keyup="showStyleInputs" 
                    @input="mascaraCpf"
                    :ref="addToRefs">

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
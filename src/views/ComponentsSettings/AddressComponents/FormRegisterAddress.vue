<script>
import { toRaw } from 'vue';
export default {
    name: 'FormRegisterAddress',
    data() {
        return {
            DataAddress: {
                endereco: '',
                complement: ''
            },
            stateBr: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
            stateSelected: 'Selecione um estado',
            citySeleted: [],
            OncitySeleted: 'Selecione uma cidade',
            IdUser: '',
            string: {
                estado: '',
                cidade: '',
                endereco: '',
                complemento: '',
                idUser: 0
            },
            endpoint: 'http://localhost:8080/',

        }
    },
    mounted() {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        const dataUser = JSON.parse(user);

        if(token) {
            this.IdUser = dataUser.id
        }


    },
    methods: {
        async getCity(stateSelected) {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateSelected}/municipios`);
                const data = await response.json();

                if (!response.ok) {
                    return console.log('Deu merda!!!');
                }

                this.citySeleted = data;
            } catch (error) {
                console.log('Deu ruim!!!', error);
            }
        },
        async registerAddress() {

            
            try {
                const objetoPuro = toRaw(this.string);
                const response = await fetch(`${this.endpoint}address`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(objetoPuro)
                })

                // const data = await response.json()
                // console.log('essa é a data:', data)
                



            } catch (error) {
                console.log('Infelizmente deu merda', error)
            }
        },
        stopSubmit(event) {
            event.preventDefault();


            this.string = {
                estado: this.stateSelected,
                cidade: this.OncitySeleted,
                endereco: this.DataAddress.endereco,
                complemento: this.DataAddress.complement,
                idUser: this.IdUser
            }

            // console.log(objetoPuro)

            this.registerAddress()

        },
    },
    
}
</script>

<template>
   <form id="container_formAddress" @submit="stopSubmit">
        <section class="sectionsForm">
            <aside class="asidesForms">
                <select name="state"
                 id="state"
                  class="selects_address"
                   v-model="stateSelected"
                   @change="getCity(stateSelected)"
                  >
                    <option disabled selected>Selecione um estado</option>
                    <option v-for="state in stateBr" :value="state" :key="state">{{ state }}</option>
                </select>
                <div class="container_ShowError">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                    <p>{{  }}</p>
                </div>
            </aside>

            <!--TEM QUE ARRUMAR TUDO AQUI-->

            <aside class="asidesForms">
                <!-- <input v-model="DataAddress.Cidade" type="text" id="surnameCommon" name="surnameCommon" ref="surnameCommon" @keyup="showStyleInputs"> -->

                <select name="city" id="city" class="selects_address" v-model="OncitySeleted">
                    <option disabled selected>Selecione uma cidade</option>
                    <option v-for="city in citySeleted" :value="city.nome" :key="city.id">{{ city.nome }}</option>
                </select>
                <div class="container_ShowError">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                    <p>{{  }}</p>
                </div>
            </aside>
        </section>

        <section class="sectionsForm">
            <aside class="asidesFormsfull">
                <input v-model="DataAddress.endereco" type="text" id="address" name="address" ref="address" @keyup="showStyleInputs">
                <label for="address">Endereço</label>
                <div class="container_ShowError">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                    <p>{{  }}</p>
                </div>
            </aside>
        </section>

        <section class="sectionsForm">
            <aside class="asidesFormsfull">
                <input v-model="DataAddress.complement" type="text" id="complement" name="complement" ref="complement" @keyup="showStyleInputs">
                <label for="complement">complemento</label>
                <div class="container_ShowError">
                    <ion-icon name="alert-circle-outline"></ion-icon>
                    <p>{{  }}</p>
                </div>
            </aside>
        </section>


        <button @click="teste">AQUI--</button>



   </form>
</template>

<style scoped>
#container_formAddress {
    /* border: 2px solid rgb(255, 255, 255); */
    width: 100%;
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

.selects_address {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgb(171, 171, 171);
    font-size: 1.5rem;
    color: #ffffff;
    background-color: var(--background--strong);
    outline: none;
}
</style>
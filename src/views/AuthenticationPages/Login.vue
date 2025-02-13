<script>
import Modal from './Modal.vue';
export default {
    name: 'Login',
    components: { Modal },
    data() {
        return {
            endpoint: 'http://localhost:8080',
            dataLogin: {
                email: '',
                password: ''
            },
            showModal: false,
            mensageCustom_error: 'Email inválido!',
            mensageCustom_errorPassword: 'A senha deve ter no mínimo 3 caracteres',
            mensageModal: 'Login realizado com sucesso!',
            show_accessSystem: false,
            textContentBtn: 'Entrar no sistema'
        }
    },
    props: {
        pass_route: { type: Function, Required: true },
    },
    methods: {
        async GetDataLogin() {
            try {
                const response = await fetch(`${this.endpoint}/auth`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.dataLogin)
                })

                console.log('esse é o status', response.status)
                if(response.status === 403) {
                    this.showModal = true
                    this.mensageModal = 'Usuário ou senha invalidos!'
                    return
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); 
                }

                const data = await response.json()

                console.log('essa é a data:', data)

                // localStorage.setItem("token", data.token);

                const { token, userDto } = data;
                localStorage.setItem("authToken", token);
                localStorage.setItem("user", JSON.stringify(userDto));


                this.showModal = true
                this.mensageModal = 'Login realizado com sucesso!'
                this.show_accessSystem = true

            } catch (error) {
                console.log('Não foi possivel fazer o login \n',  error)
                alert('o servidor foi pra poha')
            }
        },
        stopForm(Event) {
            Event.preventDefault();


            const nameLogin = this.$refs.nameLogin;
            const passwordLogin = this.$refs.passwordLogin;

            if(!this.isEmailValue(nameLogin.value)) return this.generateError(nameLogin);
            if(passwordLogin.value.length < 8) return this.generateError(passwordLogin)

            this.GetDataLogin()

            //está faltando a configuração do modal 
        },
        // BackHome(home, nameRouter) {
        //     this.$router.push({ name: nameRouter, params: { home } });
        // },
        showStylePassword(event) {
            const Input = event.target

            if (Input.value.trim() !== '') {
                Input.classList.add('active_ShowPassword');
            } else {
                Input.classList.remove('active_ShowPassword');
            }
        },
        toggleViewPassword(event) {
            const ElementShoot_event = event.target;
            const ButtonEvent = ElementShoot_event.parentElement
            const containerEvent = ButtonEvent.parentElement

            const InputEvent = containerEvent.querySelector('#passwordLogin')
            InputEvent.classList.toggle('model_class')

            if(InputEvent.classList.contains('model_class')) {
                InputEvent.setAttribute('type', 'text')
                ElementShoot_event.setAttribute('name', 'eye-outline')
            } else {
                InputEvent.setAttribute('type', 'password')
                ElementShoot_event.setAttribute('name', 'eye-off-outline')
            }
        },
        generateError(input) {
            let aside = input.parentNode
            let container = aside.querySelector('.container_ShowError')
            input.classList.add('inputError');
            input.focus();
            container.style.display = 'flex'
        },
        isEmailValue(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

            return emailRegex.test(email);
        },
        accessSystem() {
            this.showModal = false
            setTimeout(()=> {
                this.pass_route('home', 'PageHome')
            })  
        },
        closeModal() {
            this.showModal = false;
            window.location.reload();
        },
        Btn_back() {
            this.pass_route('home', 'PageHome');
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
    <div id="containerLogin">
        <div id="container_itensTop">
            <div id="containerLogoAplication">
                <img src="../../assets/image/Logo.png" alt="ImageLogoAplication">
            </div>

            <p @click="Btn_back" id="Btn_back">Voltar</p>
        </div>

        <div id="containerCenterFormLogin">
            <form @submit="stopForm">

                <h1>Login</h1>
                <section id="groupInputs">
                    <aside class="asideLogin">
                        <input v-model="dataLogin.email"
                         type="text"
                          name="nameLogin"
                           id="nameLogin"
                            ref="nameLogin"
                             @keyup="showStylePassword"
                             >
                        <label for="nameLogin">Email</label>
                        <div class="container_ShowError">
                            <ion-icon name="alert-circle-outline"></ion-icon>
                            <p>{{ mensageCustom_error }}</p>
                        </div>
                    </aside>
                    
                    <aside class="asideLogin">
                        <input v-model="dataLogin.password"
                         type="password"
                          name="passwordLogin"
                           id="passwordLogin"
                            ref="passwordLogin"
                             class="inputPassword"
                              @keyup="showStylePassword"
                              >
                        <label for="passwordLogin">Senha</label>
                        <div id="viewPassword" @click="toggleViewPassword">
                            <ion-icon name="eye-off-outline"></ion-icon>
                        </div>
                        <div class="container_ShowError">
                            <ion-icon name="alert-circle-outline"></ion-icon>
                            <p>{{ mensageCustom_errorPassword }}</p>
                        </div>
                    </aside>

                    <p id="textForgotPassword">Esqueceu a senha?</p>
                </section>

                <aside class="asideLogin">
                    <button id="btn_submit">Entrar</button>
                </aside>
            </form>
        </div>

        
    </div>


    <!-- <section id="container_imageLogin">
        <p @click="BackHome('Home', 'home')">Voltar</p>
    </section> -->
</template>

<style scoped>
#containerLogin {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: url('../../assets/image/backgrondLogin.png');
    background-position: center;
    background-size: cover;
    z-index: 900;
    justify-content: space-between;
}
#container_itensTop {
    border: 2px solid rgb(255, 0, 0);
    width: 100%;
    height: 10vh;
    min-height: 4rem;
    display: flex;
    justify-content: space-around;
}

#containerLogoAplication {
    width: 50%;
    /* border: 2px solid #fff; */
    display: flex;
    align-items: center;
}
#containerLogoAplication > img {
    object-fit: contain;
    width: 40%;
    height: 50%;
}
#Btn_back {
    width: 30%;
    /* border: 2px solid #fff; */
    color: var(--color--text);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.7rem;
    cursor: pointer;
    font-weight: 100;   
}

#containerCenterFormLogin {
    border: 2px solid rgb(0, 255, 4);
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    width: 35%;
    /* height: 70%; */
    /* min-height: 20rem; */
    background-color: rgba(255, 255, 255, 0.197);

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 30px;
    border-radius: 10px;
    color: var(--color--text);
}
h1 {
    font-size: 3.6rem;
    font-weight: 100;
}
#groupInputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.asideLogin {
    display: flex;
    flex-direction: column;
}
.inputError {
    border-bottom: 3px solid rgb(255, 0, 0) !important;
}
label {
    font-size: 1.5rem;
    transform: translateY(-35px);
    transition: all 0.4s;
}

input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #868686;
    color: var(--color--text);
    font-size: 1.5rem;
    transition: all 0.4s;
    padding: 6px;
}
input:focus {
    border-bottom: 2px solid #ffffff;
}

input:focus + label {
    transform: translateY(-60px);
}

input.active_ShowPassword + label{
    transform: translateY(-60px);
}

.inputPassword {
    position: relative;
}

.container_ShowError {
    display: none; /*aa flex*/
    align-items: center;
    gap: 5px;
    color: rgb(255, 0, 0);
    font-weight: bold;
    transform: translateY(-150%);
    font-size: 0.7rem;
}
#viewPassword {
    position: absolute;
    left: 64%;
    top: 60%;
    background-color: transparent;
    border: none;
    color: var(--color--text);
}
#viewPassword > ion-icon {
    font-size: 1.5rem;
}

#textForgotPassword {
    text-align: end;
    cursor: pointer;
}

#btn_submit {
    width: 50%;
    padding: 5px;
    border-radius: 5px;
    background-color: #868686;
    color: var(--color--text);
    border: none;
    margin: 0 auto;
    transition: all 0.4s;
    cursor: pointer;
}
#btn_submit:hover {
    scale: 1.1;
}

@media(max-width: 1000px) {
    
}
</style>
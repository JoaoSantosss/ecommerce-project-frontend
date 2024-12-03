<script>
export default {
    name: 'Login',
    data() {
        return {
            endpoint: 'http://localhost:8080',
            dataLogin: {
                email: '',
                password: ''
            },
        }
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

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json()

                console.log('essa é a data:', data)

            } catch (error) {
                console.log('Não foi possivel fazer o login \n',  error)
            }
        },
        stopForm(Event) {
            Event.preventDefault();
            this.GetDataLogin()
        },
        BackHome(home, nameRouter) {
            this.$router.push({ name: nameRouter, params: { home } });
        },
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

    }
}
</script>

<template>
    <div id="containerLogin">
        <div id="container_itensTop">
            <div id="containerLogoAplication">
                <img src="../../assets/image/Logo.png" alt="ImageLogoAplication">
            </div>

            <p @click="BackHome('Home', 'home')" id="Btn_back">Voltar</p>
        </div>

        <div id="containerCenterFormLogin">
            <form @submit="stopForm">

                <h1>Login</h1>
                <section id="groupInputs">
                    <aside class="asideLogin">
                        <input v-model="dataLogin.email" type="text" name="nameLogin" id="nameLogin" @keyup="showStylePassword">
                        <label for="nameLogin">Email</label>
                    </aside>
                    
                    <aside class="asideLogin">
                        <input v-model="dataLogin.password" type="password" name="passwordLogin" id="passwordLogin" class="inputPassword" @keyup="showStylePassword">
                        <label for="passwordLogin">Senha</label>
                        <button id="viewPassword" @click="toggleViewPassword">
                            <ion-icon name="eye-off-outline"></ion-icon>
                        </button>
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
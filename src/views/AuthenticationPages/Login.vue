<script>
export default {
    name: 'Login',
    methods: {
        stopForm(Event) {
            Event.preventDefault()
        },
        BackHome(home, nameRouter) {
            this.$router.push({ name: nameRouter, params: { home } });
        }
    }
}
</script>

<template>
    <div id="containerLogin">
        <section id="container_formLogin">
            <div id="container_logo">
                <img src="" alt="">
            </div>

            <form @submit="stopForm">
                <h1>Login</h1>

                <aside>
                    <label for="Name">Nome</label>
                    <input type="text" id="Name">
                    <span></span>
                </aside>

                <aside>
                    <label for="Password">Senha</label>
                    <input type="text" id="Password">
                    <span></span>
                </aside>

                <aside>
                    <button>
                        Entrar
                    </button>
                </aside>
            </form>
        </section>

        <section id="container_imageLogin">
            <p @click="BackHome('Home', 'home')">Voltar</p>
        </section>
    </div>
</template>

<style scoped>
#containerLogin {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}

#container_formLogin {
    width: 55%;
    border: 2px solid red;
}

#container_imageLogin {
    width: 45%;
    /* border: 5px solid rgb(0, 255, 102); */
    background: url('../../assets/image/side-view-gamer-playing-laptop (1).jpg');
    background-position: center;
    background-size: cover;
    
}
#container_imageLogin > p {
    color: #ffffff;
    text-align: end;
    padding-right: 40px;
    font-size: 1.6rem;
}
</style>
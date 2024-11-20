<script>
import BurgerMenu from './BurgerMenu.vue'
import ListFull from './ListFull.vue'
import Logo from './Logo.vue'
import Shadow from './Shadow.vue'

export default {
    name: 'NavBar',
    components: { BurgerMenu, ListFull, Logo, Shadow },
    data() {
        return {
            ShowListFull: false,
            ShowShadow: false,
            valueTextInput: ''
        }
    },
    methods: {
        openListFull(ListFull) {
            ListFull.classList.add('active');
        },
        toggleValueBoolean(ValueBoolean) {
            this.ShowListFull = ValueBoolean;
            this.ShowShadow = ValueBoolean;
        },
        StopSubmit(event) {
            event.preventDefault()
        },
        closeText() {
            this.valueTextInput = ''
        },
        routerLogin(title, nameRouter) {
            this.$router.push({ name: nameRouter, params: { title } });
        }
    }
}
</script>

<template>
    <nav>
        <div class="container_main_center">
            <div id="containerContentNavBar">
            
                <div id="container_inforNavBar">
                    <div id="group_MenuAndLogo">
                        <BurgerMenu @PassValueShowListFull="toggleValueBoolean" @PassValueShowShadow="toggleValueBoolean"/>
                        <Logo />
                    </div>

                    <div id="group_OptionsUserAndCart">
                        <aside id="boxOptionsLoginRegister">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <p>
                                Olá, <span @click="routerLogin('Login', 'PageLogin')">Entre</span> ou <br> <span @click="routerLogin('register', 'PageRegister')">Cadastre-se</span>
                            </p>
                        </aside>

                        <aside id="box_cart">
                            <p>Carrinho</p>
                            <a href="">
                                <ion-icon name="cart-outline"></ion-icon>
                            </a>
                        </aside>
                    </div>
                </div>

                <div id="container_search_field">
                    <form id="form_SearchProduct" @submit="StopSubmit">
                        <input type="text" name="input" id="input" v-model="valueTextInput" placeholder="Pesquise pelo produto desejado...">
                        <button>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                        <button @click="closeText">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <Shadow v-if="ShowShadow"/>
        <ListFull v-if="ShowListFull" @showListFull="openListFull"/>
    </nav>
</template>

<style scoped>
nav {
    background: var(--background--strong);
    width: 100%;
    position: fixed;
}

#containerContentNavBar {
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#container_inforNavBar {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid green;
}
#group_MenuAndLogo {
    /* border: 2px solid #fff; */
    display: flex;
    align-items: center;
    gap: 20px;
}

#group_OptionsUserAndCart {
    /* border: 2px solid red; */
    width: 25%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

#boxOptionsLoginRegister {
    width: 48%;
    color: var(--color--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
#boxOptionsLoginRegister > ion-icon {
    font-size: 2.5rem;
}
#boxOptionsLoginRegister > p > a {
    color: var(--color--text);
    text-decoration: none;
}

#box_cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: var(--color--text);
}
#box_cart > a > ion-icon {
    font-size: 2rem;
    color: var(--color--text);
}
#container_search_field {
    width: 100%;
    height: 50%;
    border: 1px solid rgb(0, 19, 128);
    display: flex;
    align-items: center;
}

#form_SearchProduct {
    width: 100%;
    /* padding: 10px; */
    background: var(--background--input);
    border-radius: 6px;
    display: flex;
    align-items: center;
}
input {
    background: transparent;
    outline: none;
    border: none;
    width: 95%;
    height: 100%;
    color: var(--color--text);
    font-size: 1.5rem;
    padding: 10px;
}

#form_SearchProduct > button {
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--color--text);
    display: flex;
    align-items: center;
}
</style>
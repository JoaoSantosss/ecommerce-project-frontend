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
                        <div id="containerLogo">
                            <Logo />
                        </div>
                    </div>

                    <div id="group_OptionsUserAndCart">
                        <aside id="boxOptionsLoginRegister">
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <p>
                                Olá, <span @click="routerLogin('Login', 'PageLogin')" class="span_links">Entre</span> ou <br> <span @click="routerLogin('register', 'PageRegister')" class="span_links">Cadastre-se</span>
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
                        <input type="text" name="input" id="input" v-model="valueTextInput" placeholder="Pesquise pelo produto desejado..." autocomplete="off">
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
    height: 15vh;
    min-height: 9rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
#containerLogo {
    width: 20vw;
    /* border: 1px solid red; */
}
#container_inforNavBar {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid green; */
}
#group_MenuAndLogo {
    width: 25vw;
    /* border: 2px solid #fff; */
    display: flex;
    align-items: center;
    gap: 20px;
}

#group_OptionsUserAndCart {
    /* border: 2px solid red; */
    width: 25vw;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

#boxOptionsLoginRegister {
    /* width: 48%; */
    color: var(--color--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    /* border: 2px solid #fff; */
    font-size: 1.3vw;
}
#boxOptionsLoginRegister > ion-icon {
    font-size: 2.2vw;
}
#boxOptionsLoginRegister > p > a {
    color: var(--color--text);
    text-decoration: none;
}
.span_links {
    cursor: pointer;
    transition: all 0.3s;
}
.span_links:hover {
    color: #afc2ff;
}
#box_cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: var(--color--text);
    font-size: 1.8vw;
}
#box_cart > a > ion-icon {
    
    color: var(--color--text);
}
#container_search_field {
    width: 100%;
    height: 50%;
    /* border: 1px solid rgb(0, 19, 128); */
    display: flex;
    align-items: center;
}

#form_SearchProduct {
    width: 100%;
    height: 5vh;
    min-height: 3rem;
    padding: 10px;
    background: var(--background--input);
    border-radius: 6px;
    display: flex;
    align-items: center;
    /* border: 2px solid red; */
    gap: 10px;
}
input {
    background: transparent;
    outline: none;
    border: none;
    width: 95%;
    height: 100%;
    color: var(--color--text);
    font-size: 1.3vw;
    padding: 10px;
}

#form_SearchProduct > button {
    font-size: 2vw;
    background: transparent;
    border: none;
    color: var(--color--text);
    display: flex;
    align-items: center;
}

@media(max-width: 1100px) {
    #group_MenuAndLogo {
        width: 35vw;
    }
    #containerLogo {
        width: 30vw;
    }

    #group_OptionsUserAndCart {
        width: 30vw;
    }
    #boxOptionsLoginRegister {
        font-size: 1.8vw;
    }
    #boxOptionsLoginRegister > ion-icon {
        font-size: 2.8vw;
    }
    #box_cart {
        font-size: 2.2vw;
    }

    input {
        font-size: 1.8vw;
    }
}

@media(max-width: 800px) {
    #group_MenuAndLogo {
        width: 38vw;
    }
    #containerLogo {
        width: 33vw;
    }
    #group_OptionsUserAndCart {
        width: 33vw;
    }
    #boxOptionsLoginRegister {
        font-size: 2.8vw;
    }
    #boxOptionsLoginRegister > ion-icon {
        font-size: 3.8vw;
    }
    #box_cart {
        font-size: 3.8vw;
    }
    #box_cart > p {
        display: none;
    }
    input {
        font-size: 2.2vw;
    }
    #form_SearchProduct > button {
        font-size: 3vw;
    }
}
@media(max-width: 600px) {
    #group_MenuAndLogo {
        width: 50vw;
    }
    #containerLogo {
        width: 44vw;
    }
    input {
        font-size: 3vw;
    }
    #form_SearchProduct > button {
        font-size: 3.5vw;
    }
}
@media(max-width: 500px) {
    #group_MenuAndLogo {
        width: 56vw;
    }
    #containerLogo {
        width: 48vw;
    }
    #boxOptionsLoginRegister {
        width: 100%;
        justify-content: flex-end;
    }
    #box_cart {
        display: none;
    }

    #boxOptionsLoginRegister {
        font-size: 3.3vw;
    }
    #boxOptionsLoginRegister > ion-icon {
        font-size: 4.3vw;
    }
    #form_SearchProduct > button {
        font-size: 5.5vw;
    }
}

@media(max-width: 400px) {
    #containerContentNavBar {
        justify-content: space-evenly;
    }
    #container_inforNavBar {
        height: 20%;
    }
}
</style>
<script setup lang="ts">
//imports configurações
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '../../utils/imageHelper'

//imports components
import ListFull from './ListFull.vue';
import BurguerMenu from '../SubComponents/BurguerMenu.vue';



const Controler = ref(false)

const showOptionsLogin = ref(true)
const NameUser = ref('')


function toggle_btn(btn: any): void {
    btn?.classList.toggle('active')

    const container_menu_And_Logo = document.querySelector('#container_menu_And_Logo') as HTMLElement

    if (btn?.classList.contains('active')) {
        Controler.value = true; //controle listFull
        container_menu_And_Logo.classList.add('activeStyleLogo'); //Logo lado esquerdo quando ativo

    } else {
        Controler.value = false; //controle listFull
        container_menu_And_Logo.classList.remove('activeStyleLogo'); //Logo lado esquerdo quando ativo
    }
}

function reloadPage(): void {
    window.location.reload();
}


const router = useRouter()
const RouterLogin = (): void => {
  router.push('/login')
}
const RouterRegister = (): void => {
  router.push('/register')
}


onMounted((): void => {
    const token = localStorage.getItem('token')
    const UserData = JSON.parse(localStorage.getItem('UserData') as string)

    if (token && UserData) {
        showOptionsLogin.value = false
        NameUser.value = UserData.name
    }
})
</script>

<template>
    <nav>
        <div class="container_main_center">
            <div id="contentNavBar">

                <div id="container_menu_And_Logo">

                    <BurguerMenu @OpenListFull="toggle_btn"/>

                    <div id="container_logo" @click="reloadPage">
                        <img :src="getImageUrl('Logo.png')" alt="">
                    </div>
                </div>

                <div id="container_group_buttonsNavBar">
                    <aside id="container_path_login">
                        <div id="box_iconUser"></div>
                            
                        <p v-if="showOptionsLogin" id="text_path_login">
                            Olá, <strong style="cursor: pointer;" @click="RouterLogin">Entre</strong>
                             ou 
                            <br> <strong style="cursor: pointer;" @click="RouterRegister">Cadastre-se</strong>
                        </p>

                        <p v-else>
                            Olá <strong>{{ NameUser }}</strong>
                        </p>
                    </aside>

                    <aside id="container_cartProduct">
                        <h2 id="nameCart">Carrinho</h2>
                        <div id="box_iconCart"></div>
                    </aside>
                </div>
            </div>
        </div>
    </nav>

    <ListFull :ativo="Controler" />
</template>

<style scoped>
nav {
    width: 100vw;
    height: 15vh;
    min-height: 7rem;
    /* border: 2px solid blue; */
    position: fixed;
    background-color: var(--color_navbar);
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.05);

}

#contentNavBar {
    width: 100%;
    height: 15vh;
    min-height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 2px solid rgb(255, 255, 255); */
}

#container_menu_And_Logo {
    width: 30%;
    height: 50%;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}



#container_logo {
    width: 70%;
    /* height: 50px; */
    /* border: 2px solid green; */
}
#container_logo > img {
    width: 100%;
    object-fit: contain;
    
}

.activeStyleLogo {
    transform: translateX(-30%);
}

#container_group_buttonsNavBar {
    /* border: 1px solid rgb(255, 255, 255); */
    display: flex;
    gap: 80px;
    align-items: center;
}

#container_path_login {
    /* border: 3px solid red; */
    color: var(--color--text);
    display: flex;
    align-items: center;
    gap: 20px;
}

#box_iconUser {
    width: 3.5vw;
    height: 3.5vw;
    background: var(--icon--user);
    background-size: contain;
}
#box_iconCart {
    width: 2.5vw;
    height: 2.5vw;
    background: var(--icon--cartProduct);
    background-size: contain;
}

#text_path_login {
    font-size: 1.2vw;
}

#nameCart {
    font-size: 1.3vw;
}
#container_cartProduct {
    display: flex;
    gap: 10px;
    align-items: center;
    color: var(--color--text);
    font-weight: 100;
}

@media(max-width: 1300px) {
    #box_iconUser {
        width: 5vw;
        height: 5vw;
    }
    #text_path_login {
        font-size: 1.8vw;
    }

    #box_iconCart {
        width: 3.5vw;
        height: 3.5vw;
    }
    #nameCart {
        font-size: 2vw;
    }
}

@media(max-width: 900px) {
    #container_menu_And_Logo {
        width: 40%;
    }

    .activeStyleLogo {
        transform: translateX(-20%);
    }
}

@media(max-width: 750px) {
    #container_group_buttonsNavBar {
        display: none;
    }
    #container_menu_And_Logo {
        width: 70%;
    }
    .activeStyleLogo {
        transform: translateX(-10%);
    }
}

@media(max-width: 500px) {
    #container_menu_And_Logo {
        width: 90%;
    }
    .activeStyleLogo {
        transform: translateX(0%);
    }
}
</style>
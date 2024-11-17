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
            ShowShadow: false
        }
    },
    methods: {
        openListFull(ListFull) {
            ListFull.classList.add('active');
        },
        toggleValueBoolean(ValueBoolean) {
            this.ShowListFull = ValueBoolean;
            this.ShowShadow = ValueBoolean;
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

                    </div>
                </div>

                <div id="container_search_field">
                    <input type="text">
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
    height: 8rem;
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
#container_search_field {
    width: 100%;
    height: 50%;
    border: 1px solid rgb(0, 19, 128);
}
</style>
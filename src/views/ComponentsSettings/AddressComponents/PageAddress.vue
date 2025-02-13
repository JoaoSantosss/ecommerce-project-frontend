<script>
import NavBar from '@/components/ContentHeader/NavBar.vue';
import TheFooter from '@/components/ContentMain/TheFooter.vue';
import ContainerCardsAddress from './ContainerCardsAddress.vue';
import FormRegisterAddress from './FormRegisterAddress.vue';

import IconLocation from '@/components/SubComponents/IconLocation.vue';
import PageFalseToken from '@/components/SubComponents/PageFalseToken.vue';

import ButtonToggleForm from '@/views/AuthenticationPages/ButtonToggleForm.vue';
export default {
    name: 'PageAddress',
    components: { NavBar, TheFooter, IconLocation, PageFalseToken, ButtonToggleForm, ContainerCardsAddress, FormRegisterAddress },
    data() {
        return {
            TextContentBtn: 'Cadastrar novo endereço',
            showContentAddress: true,
            showSectionDataAddress: false
        }
    },
    props: {
        pass_route: { type: Function, Required: true },
        valueIconsCategory: { type: HTMLElement, Required: true },
    },
    mounted() {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');

        if(token) {
            this.showSectionDataAddress = true;
        }else {
            this.showSectionDataAddress = false;
        }
    },
    methods: {
        passEvent_toggleTheme() {
            this.$emit('passEvent_toggleTheme');
        },
        toggleContentAddress(event) {
            const button = event.target
            button.classList.toggle('viewSections')

            if(button.classList.contains('viewSections')) {
                this.showContentAddress = false;
                this.TextContentBtn = 'Listar endereço';
            } else {
                this.showContentAddress = true;
                this.TextContentBtn = 'Cadastrar novo endereço';
            }
        }
    }
}
</script>

<template>
    <NavBar 
     :pass_route="pass_route"
     @passEvent_toggleTheme="passEvent_toggleTheme"
     :valueIconsCategory="valueIconsCategory"
    />
    
    <div id="containerPageAddress" v-if="showSectionDataAddress">
        <div class="container_main_center">
            <div id="titleSection">
                <div id="icon_address">
                    <IconLocation />
                </div>
                <h1>Meus endereços</h1>
            </div>

            <div id="box_toggleSection_address">
                <ButtonToggleForm 
                 :TextContentBtn="TextContentBtn"
                 :showIcon="true"
                 @click="toggleContentAddress"
                />
            </div>

            <div id="container_main_address">
                <ContainerCardsAddress
                 v-if="showContentAddress"
                />

                <FormRegisterAddress
                 v-else
                />
            </div>
        </div>
    </div>

    <PageFalseToken v-else/>

     <TheFooter />
</template>

<style scoped>
#containerPageAddress {
    width: 100vw;
    min-height: 70vh;
    padding-top: 9rem;
    background-color: var(--background--strong);
    color: aliceblue;
}
#titleSection {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    width: 30%;
    padding: 50px 0;
}
#icon_address {
    width: 30%;
}
#titleSection > h1 {
    width: 70%;
}

#box_toggleSection_address {
    /* border: 2px solid blue; */
    padding: 40px 0;
}

#container_main_address {
    width: 100%;
    min-height: 50vh;
    padding-bottom: 50px;
    /* border: 3px solid red; */
}
</style>
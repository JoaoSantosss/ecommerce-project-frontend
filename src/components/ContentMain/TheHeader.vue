<script>
import NavBar from '../ContentHeader/NavBar.vue'

export default {
    name: 'TheHeader',
    components: { NavBar },
    data() {
        return {
            name: 'Carlos',
            valueToken: '',
            restrita: false,

        }
    },
    props: {
        pass_route: { type: Function, Required: true },
        valueIconsCategory: { type: HTMLElement, Required: true },
        // showLogoTheme: { type: Boolean, Required: true }
    },
    mounted() {
        const token = localStorage.getItem('token');
        

        if(token) {
            this.valueToken = token // Recuperando o token do localStorage
            console.log(token)
            this.restrita = true
        }
    },
    methods: {
        passEvent_toggleTheme() {
            this.$emit('passEvent_toggleTheme')
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

    <header>

    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100vh;
    padding-top: 9rem;
    background-color: rgba(0, 0, 0, 0.717);
    border: 2px solid red;
}
</style>

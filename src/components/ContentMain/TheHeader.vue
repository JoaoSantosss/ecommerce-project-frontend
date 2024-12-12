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
    mounted() {
        const token = localStorage.getItem('token');
        

        if(token) {
            this.valueToken = token // Recuperando o token do localStorage
            console.log(token)
            this.restrita = true
        }

    },


}
</script>

<template>
    <NavBar :teste="name"/>

    <header>
        {{ valueToken }}


        <h1 v-if="restrita">configuração restrita</h1>


        
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100vh;
    padding-top: 9rem;
    background-color: rgba(0, 0, 0, 0.717);
}
</style>

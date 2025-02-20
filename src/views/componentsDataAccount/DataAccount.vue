<script setup lang="ts">
import { onMounted, ref } from 'vue'

import NavBar from '../../components/ContentHeader/NavBar.vue';
import ContainerFormAccount from './ContainerFormAccount.vue';
import PageNotLogged from '../../layouts/PageNotLogged.vue';


const UserLogged = ref(false)

onMounted((): any => {
    const token = localStorage.getItem('token')
    if (token) return UserLogged.value = true
})

</script>

<template>
    <NavBar />

    <div id="conatinerDataAccount">
        <div class="container_main_center">
            <ContainerFormAccount v-if="UserLogged" />

            <PageNotLogged v-else />
        </div>
    </div>
</template>

<style scoped>
#conatinerDataAccount {
    background-color: var(--background--main);
    width: 100%;
    min-height: 100vh;
    padding-top: 15vh;
}
</style>
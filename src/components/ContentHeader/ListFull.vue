<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

import ContentConfigListFull from './ContentConfigListFull.vue';


const emit = defineEmits(['close-menu']);

const  props = defineProps({
    ativo: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <div v-if="props.ativo" class="menu-container">


        <div class="sidebar">
            <ContentConfigListFull />
        </div>


        <div class="overlay"></div>
    </div>
</template>
  

<style scoped>
.menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 900;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* border: 2px solid red; */
    z-index: 1000;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: 100vh;
    background: rgb(122, 122, 122);
    background-color: var(--color_navbar);
    z-index: 1001;
    padding: 16vh 20px 20px 20px;
    color: var(--color--text);
}

@media(max-width: 1300px) {
    .sidebar {
        width: 40%;
    }
}

@media(max-width: 1000px) {
    .sidebar {
        width: 55%;
    }
}
@media(max-width: 750px) {
    .sidebar {
        width: 65%;
    }
}
@media(max-width: 600px) {
    .sidebar {
        width: 75%;
    }
}

@media(max-width: 500px) {
    .sidebar {
        width: 80%;
    }
}

@media(max-height: 800px) {
    .sidebar {
        padding-top: 7rem;
    }
}
</style>
  
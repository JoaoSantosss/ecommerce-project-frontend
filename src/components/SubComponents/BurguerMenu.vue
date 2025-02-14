<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['OpenListFull']);


function passEvent_toggle_btn(): void {
    const hamburguer = document.querySelector('.hamburguer') as HTMLElement
    emit('OpenListFull', hamburguer)
    console.log(hamburguer);   
}

</script>

<template>
    <div class="hamburguer" @click="passEvent_toggle_btn">
        <span class="line-span"></span>
        <span class="line-span"></span>
        <span class="line-span"></span>
    </div>
</template>

<style scoped>
.hamburguer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 2000;
}

/* .hamburguer.active {
    position: fixed;
    top: 3%;
    left: 10%;
} */

.line-span {
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #ffffff !important;
    transition: 0.5s;
}

.hamburguer.active .line-span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}
.hamburguer.active .line-span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}
.hamburguer.active .line-span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}


.line-span:nth-child(1) {
    background-color: var(--color--text);
}
.line-span:nth-child(2) {
    background-color: var(--color--text);
}
.line-span:nth-child(3) {
    background-color: var(--color--text);
}
</style>
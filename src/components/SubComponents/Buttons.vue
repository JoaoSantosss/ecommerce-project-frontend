<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    text: string
}>()

</script>

<template>
    <button>{{ text }}</button>
</template>

<style scoped>
button {
    width: 30%;
    height: 2.6vw;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(10px);
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.2vw;
    transition: all 0.3s ease;
    cursor: pointer;
}


button:hover {
    scale: 1.1;
    background-color: rgba(255, 255, 255, 0.315);
}
</style>
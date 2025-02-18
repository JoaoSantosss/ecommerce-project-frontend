<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['closeModal']);


defineProps<{
    TextContent: string,
}>();

//MODAL PARA APARECER NO SUCESSO DOS CADASTROS DE USUÁRIOS
</script>

<template>
    <div class="overlay">
        <div class="modal">
            <button class="close-btn" @click="$emit('closeModal')">✖</button>
            <div class="warning-icon">⚠️</div>
            <h2>Atenção</h2>
            <p>{{ TextContent }}</p>
            <div class="buttons">
                <button class="cancel" @click="$emit('closeModal')">Ok</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: white;
    padding: 20px;
    width: 350px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.warning-icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #ff9800;
}

h2 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
}

p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

button {
    flex: 1;
    padding: 10px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.cancel {
    background: #ccc;
    color: #333;
}

.cancel:hover {
    background: #bbb;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #555;
}

.close-btn:hover {
    color: black;
}
</style>
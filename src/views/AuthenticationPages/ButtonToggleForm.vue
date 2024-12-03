<script>
export default {
    name: 'ButtonToggleForm',
    props: {
        TextContentBtn: { type: String, Required: true },
        showIcon: { type: Boolean, Required: true }
    }
}
</script>

<template>
    <button>
        {{ TextContentBtn }}
        <ion-icon v-if="showIcon" name="resize-outline"></ion-icon>
    </button>
</template>

<style scoped>
button {
    padding: 8px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    gap: 10px;
}
ion-icon {
    font-size: 1.3rem;
}
button:hover {
    scale: 1.1;
}
</style>
<script>
export default {
    name: 'Logo'
}
</script>

<template>
    <div id="container_logo">
        <img src="/src/assets/image/Logo.png" alt="System logo image">
    </div>
</template>

<style scoped>
#container_logo {
    /* border: 2px solid red; */
    width: 40%;
    height: 4rem;
}
#container_logo > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
</style>
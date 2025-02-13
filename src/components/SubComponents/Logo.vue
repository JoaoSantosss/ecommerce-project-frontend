<script>
export default {
    name: 'Logo',
    props: {
        pass_route: { type: Function, Required: true }
    },
    methods: {
        Btn_back() {
            this.pass_route('home', 'PageHome');
            setTimeout(() => {
                location.reload();
            })
        }
    }
}
</script>

<template>
     <div id="container_logo" @click="Btn_back"></div>
</template>

<style scoped>

#container_logo {
    /* border: 1px solid red; */
    width: 100%;
    height: 6vh;
    min-height: 4rem;
    background: var(--path--logo);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
</style>
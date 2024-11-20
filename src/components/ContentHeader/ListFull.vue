<script>
export default {
    name: 'ListFull',
    mounted() {
        const list_full = this.$refs.list_full

        this.$emit('showListFull', list_full)
    }

}
</script>

<template>
    <div id="list_full" ref="list_full">
        teste
    </div>
</template>

<style scoped>
#list_full {
    width: 30%;
    height: 100%;
    position: fixed;
    left: -100%;
    top: 0%;
    background-color: var(--background--strong);
    color: var(--color--text);
    z-index: 100;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw; */
    overflow: auto;
    gap: 50px;
    padding: 70px 0;
    /* z-index: 50; */
}

#list_full.active {
    left: 0%;
    z-index: 100;
}


</style>
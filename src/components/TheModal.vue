<script>
export default {
    name: 'Modal',
    data() {
        return {
            showModal: false
        }
    },
    mounted() {
        const Page_background_modal = this.$refs.Page_background_modal;
        this.showModal = true

        if(this.showModal) {
            Page_background_modal.style.display = 'flex'
        }
    },
    methods: {
        to_close() {
            alert("teste")
            this.showModal = false

            if(this.showModal === false) {
                Page_background_modal.style.display = 'none'
            }
        }
    }
    
}
</script>

<template>
    <div class="Modal" v-if="showModal">
        <button @click="to_close">to close</button>
    </div>

    <div ref="Page_background_modal" id="Page_background_modal"></div>

    
</template>

<style>
.Modal {
    /* border: 1px solid red; */
    width: 50%;
    height: 70vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    background-color: #1A1723;
    z-index: 1000;
    box-shadow: 1px 1px 70px #ffffff1c;
}

#Page_background_modal {
    position: fixed;
    display: none;
    background-color: rgba(0, 0, 0, 0.493);
    width: 100vw;
    height: 100vh;
    z-index: 900;
}
</style>
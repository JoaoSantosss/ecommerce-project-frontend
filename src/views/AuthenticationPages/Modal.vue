<script>
import ButtonToggleForm from './ButtonToggleForm.vue';
export default {
    name: 'Modal',
    components: { ButtonToggleForm },
    props: {
        mensageModal: { type: String, Required: true },
        show_accessSystem: { type: Boolean, Required: true },
        textContentBtn: { type: String, Required: true }
    },
    methods: {
        accessSystem(event) {
            const button = event.target
            this.$emit('accessSystem')
        },
        closeModal() {
            this.$emit('closeModal')
        }   
    },
    mounted() {
        const mensage_modal = this.$refs.mensage_modal
        if(this.show_accessSystem) {
            mensage_modal.style.marginBottom = '0'
        } else {
            mensage_modal.style.marginBottom = '15%'
        }
    }
}
</script>

<template>
    <div id="containerModal">
        <div id="modal">

            <div id="containerModal_top">
                <div id="none"><ion-icon name="close-outline"></ion-icon></div>
                <h1 id="attention">Atenção!</h1>
                <button @click="closeModal" id="btn_close"><ion-icon name="close-outline"></ion-icon></button>
            </div>

            <h1 id="mensage_modal" ref="mensage_modal">{{ mensageModal }}</h1>

            <ButtonToggleForm 
            v-if="show_accessSystem"
            :TextContentBtn="textContentBtn"
            :showIcon="false"
            @click="accessSystem"
            id="btn_accessSystem"
            />
        </div>
    </div>
</template>

<style scoped>
#containerModal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    background-color: #0000009f;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal {
    width: 30vw;
    height: 30vh;
    min-width: 25rem;
    min-height: 10rem;
    background-color: #282828;
    box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.381);    
    z-index: 1001;
    transition: all 0.5s;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#containerModal_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
#attention {
    color: rgb(186, 30, 30);
}
#none {
    padding: 5px 15px;
    opacity: 0;
    font-size: 1.5rem;
}
#btn_close {
    padding: 5px 15px;
    background-color: #ffffff11;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.4s;
    cursor: pointer;
    border-top-right-radius: 10px;
}
#btn_close:hover {
    background-color: rgba(255, 0, 0, 0.396);
}

#mensage_modal {
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    /* margin-bottom: 15%; */
}

#btn_accessSystem {
    /* width: 50%;
    border-radius: 5px;
    border: none;
    padding: 7px 0; */
    margin-bottom: 20px;
}
</style>
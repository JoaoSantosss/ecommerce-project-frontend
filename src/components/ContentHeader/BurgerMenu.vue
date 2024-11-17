<script>
import ListFull from './ListFull.vue'

export default {
    name: 'BurgerMenu',
    components: { ListFull },
    data() {
        return {
            ShowListFull: false,
            ShowShadow: false
        }
    },

    methods: {
        toggle_btn() {
            const hamburguerRef = this.$refs.hamburguerRef

            hamburguerRef.classList.toggle('active');

            if(hamburguerRef.classList.contains('active')) {
                this.ShowListFull = true
                this.ShowShadow = true
                this.$emit('PassValueShowListFull', this.ShowListFull)
                this.$emit('PassValueShowShadow', this.ShowShadow)
            } else {
                this.ShowListFull = false
                this.ShowShadow = false
                this.$emit('PassValueShowListFull', this.ShowListFull)
                this.$emit('PassValueShowShadow', this.ShowShadow)
            }
        },
        
    }
}
</script>

<template>
    <div class="hamburguer" @click="toggle_btn" ref="hamburguerRef">
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
    z-index: 1000;
}



.hamburguer.active {
    position: fixed;
    /* top: 3%;
    left: 90%; */

    /* descomentar caso precise mover o botão de lugar apos add de class */
}

.line-span {
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background-color: #ffffff;
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
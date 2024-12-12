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
            const hamburguerRef = this.$refs.hamburguerRef;
            const body = document.body;

            hamburguerRef.classList.toggle('active');

            if(hamburguerRef.classList.contains('active')) {
                body.style.overflowY = 'hidden';
                this.ShowListFull = true;
                this.ShowShadow = true;
                this.$emit('PassValueShowListFull', this.ShowListFull);
                this.$emit('PassValueShowShadow', this.ShowShadow);
            } else {
                body.style.overflowY = 'scroll';
                this.ShowListFull = false;
                this.ShowShadow = false;
                this.$emit('PassValueShowListFull', this.ShowListFull);
                this.$emit('PassValueShowShadow', this.ShowShadow);
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
    gap: 0.3vw;
    z-index: 1000;
}



.hamburguer.active {
    position: fixed;
    top: 4%;
    left: 1%;

    /* descomentar caso precise mover o botão de lugar apos add de class */
}

.line-span {
    width: 2vw;
    height: 0.2vw;
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

@media(max-width: 1100px) {
    .line-span {
        width: 3.5vw;
        height: 0.4vw;
    }
    .hamburguer {
        gap: 0.6vw;
    }
}

@media(max-width: 600px) {
    .line-span {
        width: 5vw;
        height: 0.6vw;
    }
    .hamburguer {
        gap: 1vw;
    }
}

@media(max-width: 500px) {
    .line-span {
        width: 7vw;
        height: 0.8vw;
    }
}
</style>
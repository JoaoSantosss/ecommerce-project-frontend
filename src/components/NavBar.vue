<script>
export default {
    name: 'NavBar',
    data() {
        return {
            Itens_NavBar: [
                {id: 1, icon: "home-outline", text: "Home"},
                {id: 2, icon: "settings-outline", text: "Settings"},
                {id: 3, icon: "hardware-chip-outline", text: "Hardware"}
            ],
            name_icons_show: false
        }
    },
    mounted(){
        const container_hamburguer = this.$refs.container_hamburguer;
        const hamburguer = this.$refs.hamburguer;
        const nav = this.$refs.nav;
        const line_span = this.$refs.line_span;

        const buttonNav = (container_hamburguer, Menu_hamburguer, nav, line_span)=> {

            if(Menu_hamburguer) {
                    Menu_hamburguer.addEventListener("click", ()=> {
                    Menu_hamburguer.classList.toggle("active");
                    container_hamburguer.classList.toggle("active")
                    nav.classList.toggle("active");
                    line_span.classList.toggle("active");

                    if (nav.classList.contains("active")) {
                        this.name_icons_show = true
                    } else {
                        this.name_icons_show = false
                    }
        
                })

            }

        }

        buttonNav(container_hamburguer, hamburguer, nav, line_span)
    }
}
</script>

<template>
    <nav ref="nav">

        <div ref="container_hamburguer" class="container_hamburguer">
            <div ref="hamburguer" class="hamburguer" @click="handleClick">
                <span ref="line_span" class="line_span"></span>
                <span ref="line_span" class="line_span"></span>
                <span ref="line_span" class="line_span"></span>
            </div>
        </div>


        <div id="container_sections_nav">
            <section class="sections_NavBar" v-for="ItenNavBar in Itens_NavBar" :key="ItenNavBar.id">
                <div>
                    <ion-icon :name="ItenNavBar.icon" class="icons_NavBar"></ion-icon>
                </div>
                
                <p class="text_itens_nav_bar" v-show="name_icons_show">
                    {{ ItenNavBar.text }}
                </p>
            </section>
        </div>
    </nav>



</template>

<style>
nav {
    /* width: 25vw;
    height: 100vh; */

    /* background-color: #1A1723; */


    width: 6%;
    height: 100%;
    position: fixed;
    /* left: 0%;
    top: 0%; */
    background-image: linear-gradient(to bottom, #1A1723, #0D1418);
    z-index: 100;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border-top-right-radius: 25px;
    border-end-end-radius: 25px;
}

nav.active {
    /* left: 0%; */
    width: 20%;
} 



.container_hamburguer {
    /* border: 1px solid red; */
    width: 100%;
    height: 10vh;
    padding: 20px;
    /* position: fixed;
    left:2%;
    top: 3%; */
    transition: all 0.5s;
    border-top-right-radius: 25px;
}
.container_hamburguer.active {
    background-color: #0d1418ad;
}

.hamburguer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
    /* position: fixed;
    left:2%;
    top: 3%; */
}
.hamburguer.active {
    /* top: 3%;
    left: 2%; */
}

.line_span {
    width: 30px;
    height: 4px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: 0.5s;
}


/* .list_full {
    width: 40%;
    height: 100%;
    position: fixed;
    left: 100%;
    top: 0%;
    background-image: linear-gradient(to bottom, #0B0D0D, #0D1418);
    z-index: 100;
    transition: 1s;
    display: flex;
    align-items: center;
}

.list_full.active {
    left: 60%;
} */


.hamburguer.active .line_span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}
.hamburguer.active .line_span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
}
.hamburguer.active .line_span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
}

.hamburguer.active .text_itens_nav_bar {
    display: flex;
}

::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}

::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90, 0);
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
}

#container_sections_nav {
    /* border: 1px solid red; */
    width: 90%;
    min-height: 100%;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;
}

.sections_NavBar {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 14px;
    cursor: pointer;
}

.icons_NavBar {
    color: #ffffff;
    font-size: 2vw;
}
.text_itens_nav_bar {
    color: #ffffff;
    transition: all 0.5s;
}

</style>
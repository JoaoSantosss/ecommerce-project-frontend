<script>
import Logo from './Logo.vue';
export default {
    name: 'ListFull',
    components: { Logo },
    data() {
        return {
            dataItens_category: [
                [
                    {
                        name_summary: 'Categorias',
                        dataUl: [
                            { name_summary_category: 'Tecnologia', srcImgIcon_category: 'processor_icon_white.png', listItem: ['Hardware', 'Periféricos', 'Consoles', 'Smartphones'] },
                            { name_summary_category: 'Electrodomésticos', srcImgIcon_category: 'refrigerator_icon_white.png', listItem: ['Ar-condicionado', 'Aspiradores de pó', 'Batedeiras', 'Cafeteiras', 'Ferro de passar', 'Fogões', 'Freezers', 'Geladeiras', 'Liquidificadores', 'Micro-ondas', 'Máquinas de lavar', 'Torradeiras', 'Ventiladores'] },
                            { name_summary_category: 'Livros', srcImgIcon_category: 'books_icon_white.png', listItem: ['Ficção', 'Infantil e Juvenil', 'comedia', 'Acadêmicos', 'Técnicos'] },
                            { name_summary_category: 'Roupas', srcImgIcon_category: 'icon_shirts_white.png', listItem: ['Masculino', 'Feminino', 'Infantil', 'Esporte e Lazer'] }
                        ]
                    }
                ],
                [
                    {
                        name_summary: 'Ajuda e Configurações',
                        dataUl: [
                            { name_summary_category: 'Minha Conta', srcImgIcon_category: 'user_icon_white.png' },
                            { name_summary_category: 'Quem Somos', srcImgIcon_category: 'attention_icon_white.png' },
                            { name_summary_category: 'Meus Endereços', srcImgIcon_category: 'address_icon_white.png' },
                            { name_summary_category: 'Meus pedidos', srcImgIcon_category: 'orders_icon_white.png' },
                            { name_summary_category: 'Theme', srcImgIcon_category: 'icon_moon.png' },
                        ]
                    }
                ]
            ],
            summarys: [],
            imgs: [],
            path_ThemeWhite: ['processor_icon_dark.png', 'refrigerator_icon_dark.png', 'books_icon_dark.png', 'icon_shirts_dark.png', 'user_icon_dark.png', 'attention_icon_dark.png', 'address_icon_dark.png', 'orders_icon_dark.png', 'icon_moon.png'],
            path_ThemeDark: ['processor_icon_white.png', 'refrigerator_icon_white.png', 'books_icon_white.png', 'icon_shirts_white.png', 'user_icon_white.png', 'attention_icon_white.png', 'address_icon_white.png', 'orders_icon_white.png', 'icon_moon.png']
        }
    },
    mounted() {
        const list_full = this.$refs.list_full;
        this.$emit('showListFull', list_full);

        
    },
    methods: {
        effect_arrow(event) {
            const summary = event.target
            const icon = summary.querySelector('.icon_arrow')

            this.summarys.forEach(summary => {
                summary.classList.toggle('effect_arrow');
                if(summary.classList.contains('effect_arrow')) {
                    icon.style.transform = 'rotate(90deg)'
                }else {
                    icon.style.transform = 'rotate(0deg)'
                }
            });
        },
        pushSummary(el) {
            this.summarys.push(el)
        },
        logout() {
            localStorage.removeItem('token');
            setTimeout(()=> {
                window.location.reload();
            }, 1200)
            
        },
        eventClick_category(event) {
            const summary = event.target
            const paragraph = summary.querySelector('p')

            console.log(paragraph.innerText)

            if(paragraph.innerText === 'Theme') {
                console.log("theme")

                paragraph.classList.toggle('teste')

                //nesse if para verificar se tem a class tem que ser uma logica pra saber se tem uma class no localstorage

                if(paragraph.classList.contains("teste")) {
                    this.imgs.forEach((img, index) => {
                        img.setAttribute('src', `/src/assets/image/iconesCategoris/${this.path_ThemeWhite[index]}`)
                    });
                } else {
                    this.imgs.forEach((img, index) => {
                        img.setAttribute('src', `/src/assets/image/iconesCategoris/${this.path_ThemeDark[index]}`)
                    });
                }
            }
        },
        teste(el) {
            this.imgs.push(el)
        }
    }
}
</script>

<template>
    <div id="list_full" ref="list_full">
        <div id="containerTop_listFull">
            
            <div id="containerLogo">
                <Logo />
            </div>
        </div>
        
        <div id="teste">
            <div v-for="Itens_category in dataItens_category" :key="Itens_category" id="container_listsConf">
                <details v-for="objDataListMain in Itens_category" :key="objDataListMain" class="details_master">
                    <summary class="summary_master" :ref="pushSummary" @click="effect_arrow">
                        {{ objDataListMain.name_summary }}
                        <ion-icon name="chevron-forward-outline" class="icon_arrow"></ion-icon>
                    </summary>
                    <ul class="containerCategory">
                        <li v-for="arrayDatacategory in objDataListMain.dataUl" :key="arrayDatacategory">
                            <details>
                                <summary class="summaryName_category" @click="eventClick_category">
                                    <div class="box_imgIconCategory">
                                        <img :src="`/src/assets/image/iconesCategoris/${arrayDatacategory.srcImgIcon_category}`" alt="icons" :ref="teste">
                                    </div>
                                    <p class="summary_category">{{ arrayDatacategory.name_summary_category }}</p>
                                </summary>
                                <ul>
                                    <li v-for="ListItem_arrayDatacategory in arrayDatacategory.listItem" :key="ListItem_arrayDatacategory" class="item_category">
                                        > {{ ListItem_arrayDatacategory }}
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </div>
        </div>

        <div id="button_logout">
            <button @click="logout">sair</button>
        </div>
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
    justify-content: flex-start;
    align-items: center;
    /* border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw; */
    overflow: auto;
    gap: 50px;
    /* padding: 4px 0; */
    /* z-index: 50; */
}

#list_full.active {
    left: 0%;
    z-index: 100;
}
#containerTop_listFull {
    width: 30%;
    height: 10vh;
    min-height: 5rem;
    /* border: 2px solid red; */
    padding-left: 7%;
    
    position: fixed;
    display: flex;
    justify-content: flex-end;
    background-color: black;
    /* justify-content: flex-start; */
    padding-right: 10px;
    z-index: 1000;
}

#containerLogo {
    width: 100%;
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
}
#teste {
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 15vh;
}

#container_listsConf {
    /* padding-top: 7rem; */
    /* border: 2px solid rgb(255, 255, 255); */
    width: 100%;
}


/* Remove a seta padrão do <details> */
details summary {
    list-style: none; /* Remove a marca padrão */
}

details summary::-webkit-details-marker {
    display: none; /* Remove no Chrome, Edge e Safari */
}

details summary::marker {
    display: none; /* Remove no Firefox */
}


.details_master {
    width: 100%;
    /* border: 2px solid red; */
    
    /* border-top-right-radius: 30px;
    border-bottom-right-radius: 30px; */
    transition: all 0.4s;
}
/* .details_master:hover {
    
} */
.summary_master {
    font-size: 1.7vw;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.4s;
    border-right: 3px solid transparent;
    user-select: none;
}
.summary_master:hover {
    /* background-color: var(--background--strong--hover); */
    background-color: #324b9d3f;
    border-right: 3px solid #324b9d;
}

.icon_arrow{
    transition: all 0.4s;
    pointer-events: none; /*Isso deixa o elemento sem efeito de click*/
}
.containerCategory {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.summaryName_category {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    user-select: none; /*BLOQUEIA O USUÁRIO DE COPIAR O TEXTO DA TAG */
    transition: all 0.4s;
    padding: 10px 10px 10px 30px;
    border-right: 3px solid transparent;
}
.summaryName_category:hover {
    background-color: #324b9d1c;
    border-right: 3px solid #324b9dba;
}
.box_imgIconCategory {
    height: 2rem;
}
.box_imgIconCategory > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.summary_category {
    font-size: 1.2vw;
    pointer-events: none;
}
.item_category {
    font-size: 1vw;
    padding: 5px 5px 5px 70px;
    user-select: none;
    transition: all 0.4s;
    border-right: 3px solid transparent;
    cursor: pointer;
}
.item_category:hover {
    background-color: #617ede1c;
    border-right: 3px solid #324b9dba;
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

@media(max-width: 1200px) {
    #list_full {
        width: 45%;
    }
    #containerTop_listFull {
        width: 45%;
    }
    .summary_master {
        font-size: 2.2vw;
    }
    .summary_category {
        font-size: 1.8vw;
    }
    .item_category {
        font-size: 1.5vw;
    }
}
@media(max-width: 800px) {
    #list_full {
        width: 65%;
    }
    #containerTop_listFull {
        width: 65%;
    }
    .summary_master {
        font-size: 3.5vw;
    }
    .summary_category {
        font-size: 2.2vw;
    }
    .item_category {
        font-size: 2vw;
    }
}
@media(max-width: 500px) {
    #list_full {
        width: 100%;
    }
    #containerTop_listFull {
        width: 100%;
    }
    .summary_master {
        font-size: 5vw;
    }
    .summary_category {
        font-size: 4vw;
    }
    .item_category {
        font-size: 3.5vw;
    }
}
</style>
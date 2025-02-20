<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl } from '../../utils/imageHelper'
import type * as interfaces from '../../interfaces/interfaces';
import { useRouter } from 'vue-router'


const router = useRouter()

const DataCreateListFull = ref<interfaces.TypeDataCreateListFull[][]>([
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
                { name_summary_category: 'Modo Escuro', srcImgIcon_category: 'icon_moon.png' },
            ]
        }
    ]
])


function RouterLogin(routerPage: string): void {
    router.push(routerPage)
}


function FunOptionsCategory(event: Event): void {
    const summary = event.currentTarget as HTMLInputElement;
    const textOptionsCategory = summary.querySelector('p') as HTMLParagraphElement;
    
    switch (textOptionsCategory.id) {
        case 'Minha Conta':
            console.log('Minha Conta');
            RouterLogin('/data-account')
            break;
    

        case 'Quem Somos':
            console.log('Quem Somos');
            
            break;


        case 'Meus Endereços':
            console.log('Meus Endereços');
            RouterLogin('/data-Address')
            break;


        case 'Meus pedidos':
            console.log('Meus pedidos');
            
            break; 


        case 'Modo Escuro':
            console.log('Modo Escuro');
            
            break;
        default:
            break;
    }
    
}

</script>

<template>
    <div id="containerMain_ListFull">
        <div id="container_category">
            <div id="conatiner_category_list">
                <details v-for="details_category in DataCreateListFull" :key="details_category[0].name_summary">
                    <summary class="summary_category">{{ details_category[0].name_summary }}</summary>

                    <ul>
                        <li v-for="options_category in details_category[0].dataUl" :key="options_category.name_summary_category">
                            <details>
                                <summary class="options_category" @click="FunOptionsCategory">
                                    <div class="img_iconOptionsCategory">
                                        <img :src="getImageUrl(options_category.srcImgIcon_category)" alt="">
                                    </div>
                                    <p :id="options_category.name_summary_category">{{ options_category.name_summary_category }}</p>
                                </summary>

                                <ul>
                                    <li v-for="itens_category in options_category.listItem" :key="itens_category" class="itens_category">
                                        {{ itens_category }}
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
#containerMain_ListFull {
    /* border: 2px solid blue; */
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

details summary {
    list-style: none; /* Remove o estilo padrão da seta */
    cursor: pointer;
    user-select: none;
}
details summary::-webkit-details-marker {
    display: none; /* Remove a seta no Chrome, Edge e Safari */
}
details summary::marker {
    display: none; /* Remove a seta em navegadores modernos */
}

#container_category {
    width: 100%;
    min-height: 80%;
}
#conatiner_category_list {
    /* border: 1px solid #f0f0f0; */
    width: 97%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* justify-content: space-between; */
}

ul {
    list-style: none;
}

.summary_category {
    font-size: 1.7vw;
    font-weight: bolder;
    transition: all 0.3s ease;
    padding: 10px;
    border-right: 3px solid transparent;
}
.summary_category:hover {
    border-right: 3px solid #626ae6;
    font-size: 1.8vw;
}

.options_category {
    font-size: 1.3vw;
    font-weight: bolder;
    transition: all 0.3s ease;
    padding: 10px;
    border-right: 3px solid transparent;
    margin-left: 15px;
    display: flex;
    gap: 7px;
    align-items: center;
}
.options_category:hover {
    border-right: 3px solid #8f95eb;
}


.img_iconOptionsCategory {
    width: 30px;
    height: 30px;
}
.img_iconOptionsCategory > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}


.itens_category {
    font-size: 1.1vw;
    font-weight: bolder;
    transition: all 0.3s ease;
    padding: 10px;
    border-right: 3px solid transparent;
    margin-left: 40px;
    cursor: pointer;
}
.itens_category:hover {
    border-right: 3px solid #ffffff;
}

























/* Estiliza a barra de rolagem para navegadores WebKit (Chrome, Edge, Safari) */
::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
    height: 10px; /* Altura da barra de rolagem para rolagem horizontal */
}
/* Fundo da barra de rolagem */
::-webkit-scrollbar-track {
    background: #f0f0f0; /* Cor de fundo */
    border-radius: 10px; /* Cantos arredondados */
}
/* Alça (parte que se move) */
::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #494949, #494949); /* Gradiente moderno */
    border-radius: 10px;
    border: 2px solid #f0f0f0; /* Borda para dar efeito separado do fundo */
}

</style>
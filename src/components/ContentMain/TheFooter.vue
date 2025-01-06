<script>
import Logo from '../SubComponents/Logo.vue';

export default {
  name: 'TheFooter',
  components: { Logo },
  data() {
    return {
      data_lists_footer: [
        [
          {
            title: 'Dúvidas',
            itensList: [
              { name: 'Quem somos', path: '' },
              { name: 'Contato', path: '' },
              { name: 'Trabalhe conosco', path: '' },
              { name: 'Política de privacidade', path: '' },
            ],
          },
        ],
        [
          {
            title: 'Ajuda',
            itensList: [
              { name: 'Fale conosco', path: '' },
              { name: 'Política de privacidade', path: '' },
              { name: 'FAQ', path: '' },
            ],
          },
        ],
        [
          {
            title: 'Pagamentos',
            itensList: [
              { name: 'Boleto', path: '' },
              { name: 'Pix', path: '' },
              { name: 'Cartão de crédito', path: '' },
              { name: 'Cartão de débito', path: '' },
              { name: 'Transferência bancária', path: '' },
            ],
          },
        ],
      ]
    }
  }
}
</script>

<template>
  <footer>
    <section class="sectionFooterTop">
      <div class="container_main_center">
        <div id="contentFooter">
          <div id="box_logoAndText">
            <Logo />
            <p class="text_footerLogo">Estilo e inovação em cada clique – descubra uma nova experiência de compras.</p>
          </div>

          <div id="conteinerLists">
            <ul 
            v-for="data_footer in data_lists_footer" 
            :key="data_footer"
             class="ulList"
             >
              <h2 id="titleList">
                {{ data_footer[0].title }}
              </h2>

              <li 
              v-for="item in data_footer[0].itensList"
               :key="item"
                class="itemList"
               >
                {{ item.name }}
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sectionFooterBottom">
      <h2>Desenvolvimento...</h2>
    </section>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  /* height: 35vh; */
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid red;
}
.sectionFooterTop {
  width: 100%;
  min-height: 35vh;
  border: 2px solid rgb(64, 255, 0);
  background: var(--path--img--footer);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

#contentFooter {
  width: 100%;
  /* height: 100%; */
  border: 3px solid blue;
  display: flex;
  justify-content: space-between;
}

#box_logoAndText {
  width: 25%;
  border: 3px solid red;
}

#conteinerLists {
  width: 75%;
  color: #ffffff;
  border: 3px solid green;
  display: flex;
  justify-content: space-around;
}
.ulList {
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* border: 1px solid red; */
}
.text_footerLogo {
  color: #ffffff;
  font-weight: 100;
  color: #d4d4d4;
  width: 90%;
}

.sectionFooterBottom {
  width: 100%;
  height: 20%;
  background-color: black;
  color: white;
  padding: 30px;
  text-align: center;

}

#titleList {
  font-size: 2vw;
}

.itemList {
  list-style: none;
  transition: all 0.3s;
}
.itemList:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>

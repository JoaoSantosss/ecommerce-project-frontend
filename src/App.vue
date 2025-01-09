<script>
import TheHeader from './components/ContentMain/TheHeader.vue';
import TheMain from './components/ContentMain/TheMain.vue';
import TheFooter from './components/ContentMain/TheFooter.vue';

export default {
  name: 'App',
  components: { TheHeader, TheMain, TheFooter },
  data() {
     return {
      BodyElement: document.body,
      // showLogoTheme: false,
      theme: localStorage.getItem('theme'),
     }
     //POR ALGUM MOTIVO DESCONHECIDO ESSA BUCETA "showLogoTheme" INTERFERE NO FLUXO DO "BodyElement"
     //E ISSO CAUSA UM ERRO SEM EXPLICAÇÃO ALGUMA
  },
  mounted() {
    if (this.theme === 'light') {
      this.BodyElement.classList.add('theme_Light');
      // this.showLogoTheme = true

    }
  },
  methods: {
    toggle_theme() {
      // alert("teste")
      // const isLight = this.BodyElement.classList.toggle("theme_Light");
      this.BodyElement.classList.toggle("theme_Light");

      if (this.BodyElement.classList.contains('theme_Light')) {
        console.log("light");
        // this.showLogoTheme = true
        localStorage.setItem('theme', 'light');
      } else {
        console.log("dark");
        // this.showLogoTheme = false
        localStorage.setItem('theme', 'dark');
      }
    },
    routerConfig(title, nameRouter) {
        this.$router.push({ name: nameRouter, params: { title } });
    }
  },
  computed: {
    showHeaderAndMain() {
      const hideOnRoutes = ['Home', 'PageLogin', 'PageRegister', 'AccountInformation', 'AddressInformation'];
      return !hideOnRoutes.includes(this.$route.name);
    }
  }
}
</script>

<template>
  <TheHeader 
  v-if="showHeaderAndMain"
  :pass_route="routerConfig"
  @passEvent_toggleTheme="toggle_theme"
  :valueIconsCategory="BodyElement"
  />

  <!-- <TheMain /> -->

  <TheFooter v-if="showHeaderAndMain"/>


  <router-view 
  :pass_route="routerConfig"
  @passEvent_toggleTheme="toggle_theme"
  :valueIconsCategory="BodyElement"
  
  ></router-view>
  
</template>

<style scoped>

</style>

<script>
import TheHeader from './components/ContentMain/TheHeader.vue'
import TheMain from './components/ContentMain/TheHeader.vue'
import TheFooter from './components/ContentMain/TheHeader.vue'


export default {
  name: 'App',
  components: { TheHeader, TheMain, TheFooter },
  computed: {
    showHeaderAndMain() {
      const hideOnRoutes = ['Home', 'PageLogin', 'PageRegister'];
      return !hideOnRoutes.includes(this.$route.name);
    }
  }
}
</script>

<template>
  <TheHeader v-if="showHeaderAndMain"/>

  <!-- <TheMain /> -->

  <!-- <TheFooter /> -->


  <router-view>

  </router-view>
</template>

<style scoped>

</style>

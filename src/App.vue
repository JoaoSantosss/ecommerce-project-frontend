<script setup lang="ts">
import { RouterView, useRoute  } from 'vue-router'

import Home from './layouts/Home.vue'

const route = useRoute()


</script>

<template>

  <Home v-if="!['/login', '/register'].includes(route.path)"/>
  

  <router-view v-else></router-view>
</template>

<style scoped>

</style>

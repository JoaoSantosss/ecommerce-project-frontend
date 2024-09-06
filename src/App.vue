<script>
import TheHeader from "./components/TheHeader.vue";
import TheModal from "./components/TheModal.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheModal
  }
}

</script>

<template>

    <TheModal/>

    <TheHeader/>


</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

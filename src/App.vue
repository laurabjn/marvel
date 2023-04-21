<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router';
import TheNavbarVue from './components/TheNavbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheNavbarVue
  }
})
</script>

<template>
  <div class="header">
    <TheNavbarVue />
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>

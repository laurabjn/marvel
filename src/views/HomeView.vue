<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent ({
    name: "Home",
})
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Marvel Projet</h1>
      </div>
      <div class="description">
        <p>The application allows you to search for a hero or a comic from 
          the Marvel license in order to access their information.</p>
      </div>
    </div>
  </main>
</template>
<style scoped>

</style>
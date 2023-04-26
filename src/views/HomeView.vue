<script lang="ts">
import { defineComponent } from 'vue';

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
      <img class="image" src="../assets/marvelcomics.jpg" />
    </div>
  </main>
</template>
<style scoped>
  .container {
    text-align: center;
    margin-top: 100px;
  }
  .title {
    margin-bottom: 30px;
    font-size: 25px;
  }
  .description {
    margin: 30px;
    font-size: 17px;
  }
</style>
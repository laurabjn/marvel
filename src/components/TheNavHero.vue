<script lang="ts">
import { defineComponent } from 'vue';
import TheComicCard from './TheComicCard.vue';

export default defineComponent ({
    name: "NavHero",
    props: [
        "comics"
    ],
    components: {
        TheComicCard
    }
})
</script>
<template>
    <div class="header">Appears in the following comics : </div>
    <div class="container" v-bind:key="comic.id" v-for="comic in comics">
        <li>{{ comic.title }}</li>
    </div>
</template>
<style scoped>
.container {
    margin: 20px;
}
.header {
    font-size: 15px;
}
</style>
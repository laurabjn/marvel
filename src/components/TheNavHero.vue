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
    <div class="container" v-bind:key="comic.id" v-for="comic in comics">
        <li class="title">{{ comic.title }}</li>
    </div>
</template>
<style scoped>
.container {
    margin: 30px;
}
</style>
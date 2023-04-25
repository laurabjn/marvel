<script lang="ts">
import { defineComponent } from 'vue';
import TheComicCard from './TheComicCard.vue';

export default defineComponent ({
    name: "NavHero",
    props: [
        "comics",
        "meta"
    ],
    components: {
        TheComicCard
    }
})
</script>
<template>
    <div class="container" v-bind:key="comic.id" v-for="comic in comics">
        {{ comic.title }}
    </div>
</template>
<style scoped>

</style>
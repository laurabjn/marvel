<script lang="ts">
import { defineComponent } from 'vue';
import TheComicCard from './TheComicCard.vue';

export default defineComponent ({
    name: "NavHero",
    props: [
        "hero"
    ],
    components: {
        TheComicCard
    }
})
</script>
<template>
    <div class="container" v-bind:key="comic.id" v-for="comic in hero.comics">
        <TheHeroCard v-bind:comic="comic" v-bind:more-info="true" />
    </div>
</template>
<style scoped>

</style>
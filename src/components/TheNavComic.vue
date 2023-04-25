<script lang="ts">
import { defineComponent } from 'vue';
import TheHeroCard from './TheHeroCard.vue';

export default defineComponent ({
    name: "NavComic",
    props: [
        "heroes",
        "meta"
    ],
    components: {
        TheHeroCard
    }
})
</script>
<template>
    <div class="container" v-bind:key="hero.id" v-for="hero in heroes">
        <TheHeroCard v-bind:hero="hero" v-bind:more-info="true" />
    </div>
</template>
<style scoped>

</style>
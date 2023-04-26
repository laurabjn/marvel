<script lang="ts">
import { defineComponent } from 'vue';
import TheHeroCard from './TheHeroCard.vue';

export default defineComponent ({
    name: "NavComic",
    props: [
        "heroes"
    ],
    components: {
        TheHeroCard
    }
})
</script>
<template>
    <div class="container" v-bind:key="hero.id" v-for="hero in heroes">
        <li class="name">{{ hero.name }}</li>
    </div>
</template>
<style scoped>
.container {
    margin: 50px;
}
</style>
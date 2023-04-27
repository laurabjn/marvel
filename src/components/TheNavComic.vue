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
    <div class="header">The following heroes are in this comic : </div>
    <div class="container" v-bind:key="hero.id" v-for="hero in heroes">
        <li>{{ hero.name }}</li>
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
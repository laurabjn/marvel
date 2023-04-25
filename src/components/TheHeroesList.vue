<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useHeroesStore } from '@/stores';
import TheHeroCard from './TheHeroCard.vue';

export default defineComponent ({
    name: "HeroesList",
    components: {
        TheHeroCard
    },
    props: [
        "heroes"
    ]
})
</script>
<template>
    <div class="container">
        <div class="heroes-list" v-bind:key="hero" v-for="hero in heroes">
            <TheHeroCard v-bind:hero="hero" v-bind:more-info="true" />
        </div>
    </div>
</template>
<style scoped>

</style>
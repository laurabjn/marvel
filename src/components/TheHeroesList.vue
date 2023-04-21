<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useHeroesStore } from '@/stores';
import TheHeroCard from './TheHeroCard.vue';

export default defineComponent ({
    setup() {
        const store = useHeroesStore()
        const getAllHeroes = computed(() => {
            return store.getAllHeroes
        })
        const heroes = computed(() => {
            return store.heroesList
        })
        return {
            store,
            getAllHeroes,
            heroes
        }
    },
    name: "HeroesList",
    components: {
        TheHeroCard
    },
    mounted() {
        this.store.fetchHeroes()
    },
})
</script>
<template>
    <div class="container">
        <div class="heroes-list" v-bind:key="hero.character.id" v-for="hero in heroes">
            <TheHeroCard v-bind:hero="hero" v-bind:more-info="true" />
        </div>
    </div>
</template>
<style scoped>

</style>
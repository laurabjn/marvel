<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useHeroesStore } from '@/stores';
import TheHeroCard from './TheHeroCard.vue';

export default defineComponent ({
    setup() {
        const store = useHeroesStore()
        const heroes = computed(() => {
            return store.heroesList
        })
        const meta = computed(() => {
            return store.meta
        })
        return {
            store,
            heroes,
            meta
        }
    },
    name: "HeroesList",
    components: {
        TheHeroCard
    },
    mounted() {
        this.store.fetchHeroes()
    }
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
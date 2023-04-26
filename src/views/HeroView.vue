<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useHeroStore, useHeroComicsStore } from '@/stores';
import TheNavHero from '@/components/TheNavHero.vue';
import TheInfoHero from '@/components/TheInfoHero.vue';

export default defineComponent ({
    name: "Hero",
    components: {
        TheInfoHero, 
        TheNavHero
    },    
    setup() {
        const store = useHeroStore()
        const lhero = computed(() => {
            console.log('store.hero', store.hero)
            return store.hero
        })
        console.log('lhero', lhero.value)
        const storeComics = useHeroComicsStore()
        const comics = computed(() => {
            return storeComics.comicsList
        })
        const meta = computed(() => {
            return storeComics.meta
        })
        return {
            store,
            lhero,
            storeComics,
            comics,
            meta
        }
    },
    mounted() {
        this.store.fetchHeroById(this.$route.params.id)
        this.storeComics.fetchHeroComicsById(this.$route.params.id)
    },
})
</script>
<template>
    <div class="container">
        <div class="info-hero">
            <TheInfoHero v-bind:hero="lhero"/>
        </div>
        <div class="nav-hero">
            <TheNavHero v-bind:comics="comics" v-bind:meta="meta" />
        </div>
    </div>
</template>
<style scoped>

</style>
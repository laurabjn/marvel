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
        return {
            store,
            lhero,
            storeComics,
            comics
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
       <hr/> 
        <div class="nav-hero" v-if="comics.length != 0">
            <TheNavHero v-bind:comics="comics" />
        </div>
        <div v-else>
            <div class="no-data">There is no hero that matches your search</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 50px;
}
.nav-hero {
    margin: 30px;
}
.no-data {
    margin: 50px; 
    font-size: 15px;
    text-align: center;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
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
        const storeComics = useHeroComicsStore()
        return {
            store,
            storeComics,
        }
    },
    async mounted() {
        await this.store.fetchHeroById(this.$route.params.id)
        await this.storeComics.fetchHeroComicsById(this.$route.params.id)
        console.log('getHero', this.store.getHero)
        console.log('getComics', this.storeComics.getHeroComics)
    },
})
</script>
<template>
    <div class="container">
        <div class="info-hero">
            <TheInfoHero v-bind:heroes="store.getHero"/>
        </div>
       <hr/> 
        <div class="nav-hero" v-if="storeComics.getHeroComics.length != 0">
            <TheNavHero v-bind:comics="storeComics.getHeroComics" />
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
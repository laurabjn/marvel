<script lang="ts">
import { defineComponent } from 'vue';
import { useApiKey } from '@/stores';
import TheNavHero from '@/components/TheNavHero.vue';
import TheInfoHero from '@/components/TheInfoHero.vue';
import { getHash } from '@/utils/generate-hash';
import axios from 'axios';

export default defineComponent ({
    name: "Hero",
    data() {
        return {
            hero: [],
            comics: [],
            isLoading: false
        }
    },
    components: {
        TheInfoHero, 
        TheNavHero
    },
    methods: {
        fetchHero(id: string | string[]) {
            this.isLoading = true
            let ts = Date.now().toString();
            let hash = getHash(ts, this.store.SECRET_KEY, this.store.PUBLIC_KEY);
            axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${this.store.getPublicKey}&hash=${hash}`)
            .then((response) => {
                this.hero = response.data.data.results
                this.isLoading = false
                console.log('this.hero', this.hero)
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
            })
        },
        fetchHeroComics(id: string | string[]) {
            this.isLoading = true
            let ts = Date.now().toString();
            let hash = getHash(ts, this.store.SECRET_KEY, this.store.PUBLIC_KEY);
            axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=${this.store.getPublicKey}&hash=${hash}`)
            .then((response) => {
                this.comics = response.data.data.results
                this.isLoading = false
                console.log('this.comics', this.comics)
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
            })
        }
    },
    setup() {
        const store = useApiKey()
        return {
            store
        }
    },
    mounted() {
        this.fetchHero(this.$route.params.id)
        this.fetchHeroComics(this.$route.params.id)
    },
})
</script>
<template>
    <div class="container" v-if="!isLoading">
        <div class="info-hero">
            <TheInfoHero v-bind:heroes="hero"/>
        </div>
       <hr/> 
        <div class="nav-hero" v-if="comics.length != 0">
            <TheNavHero v-bind:comics="comics" />
        </div>
        <div v-else>
            <div class="no-data">There is no hero that matches your search</div>
        </div>
    </div>
    <div class="loading" v-else>Loading...</div>
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
.loading {
    text-align: center;
    font-size: 15px;
}
</style>
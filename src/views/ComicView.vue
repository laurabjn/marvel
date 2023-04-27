<script lang="ts">
import { defineComponent } from 'vue';
import { useComicStore, useComicHeroesStore, useApiKey } from '@/stores';
import TheNavComic from '@/components/TheNavComic.vue';
import TheInfoComic from '@/components/TheInfoComic.vue';
import { getHash } from '@/utils/generate-hash';
import axios from 'axios';

export default defineComponent ({
    name: "Comic",
    data() {
        return {
            comic: [],
            heroes: [],
            isLoading: false
        }
    },
    components: {
        TheInfoComic,
        TheNavComic
    },
    methods: {
        fetchComic(id: string | string[]) {
            this.isLoading = true
            let ts = Date.now().toString();
            let hash = getHash(ts, this.store.SECRET_KEY, this.store.PUBLIC_KEY);
            axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${ts}&apikey=${this.store.getPublicKey}&hash=${hash}`)
            .then((response) => {
                this.comic = response.data.data.results
                this.isLoading = false
                console.log('this.comic', this.comic)
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
            })
        },
        fetchComicHeroes(id: string | string[]) {
            this.isLoading = true
            let ts = Date.now().toString();
            let hash = getHash(ts, this.store.SECRET_KEY, this.store.PUBLIC_KEY);
            axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=${ts}&apikey=${this.store.getPublicKey}&hash=${hash}`)
            .then((response) => {
                this.heroes = response.data.data.results
                this.isLoading = false
                console.log('this.heroes', this.heroes)
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
            })
        }
    },
    setup() {
        const store = useApiKey()
        const storeHeroes = useComicHeroesStore()
        return {
            store,
            storeHeroes
        }
    },
    async mounted() {
        /*await this.store.fetchComicById(this.$route.params.id)
        await this.storeHeroes.fetchComicHeroesById(this.$route.params.id)
        console.log('getcomic', this.store.getComic)
        console.log('getHeroes', this.storeHeroes.getComicHeroes)*/
        this.fetchComic(this.$route.params.id)
        this.fetchComicHeroes(this.$route.params.id)
    },
})
</script>
<template>
    <div class="container">
        <div class="info-comic">
            <TheInfoComic v-bind:comics="comic" />
        </div>
        <hr/> 
        <div class="nav-comic" v-if="heroes.length != 0">
            <TheNavComic v-bind:heroes="heroes" />
        </div>
        <div v-else>
            <div class="no-data">There is no hero in that comic</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 50px;
}
.info-comic {
    margin: 30px
}
.nav-comic {
    margin: 30px;
}
.no-data {
    margin: 50px; 
    font-size: 15px;
    text-align: center;
}
</style>
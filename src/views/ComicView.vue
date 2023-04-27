<script lang="ts">
import { defineComponent } from 'vue';
import { useComicStore, useComicHeroesStore } from '@/stores';
import TheNavComic from '@/components/TheNavComic.vue';
import TheInfoComic from '@/components/TheInfoComic.vue';

export default defineComponent ({
    name: "Comic",
    components: {
        TheInfoComic,
        TheNavComic
    },
    setup() {
        const store = useComicStore()
        const storeHeroes = useComicHeroesStore()
        return {
            store,
            storeHeroes
        }
    },
    async mounted() {
        await this.store.fetchComicById(this.$route.params.id)
        await this.storeHeroes.fetchComicHeroesById(this.$route.params.id)
        console.log('getcomic', this.store.getComic)
        console.log('getHeroes', this.storeHeroes.getComicHeroes)
    },
})
</script>
<template>
    <div class="container">
        <div class="info-comic">
            <TheInfoComic v-bind:comics="store.getComic" />
        </div>
        <hr/> 
        <div class="nav-comic" v-if="storeHeroes.getComicHeroes.length != 0">
            <TheNavComic v-bind:heroes="storeHeroes.getComicHeroes" />
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
<script lang="ts">
import { defineComponent, computed } from 'vue';
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
        const lcomic = computed(() => {
            return store.comic
        })
        console.log('lcomic', lcomic.value)
        const heroes = computed(() => {
            return storeHeroes.heroesList
        })
        return {
            store,
            storeHeroes,
            lcomic,
            heroes
        }
    },
    mounted() {
        this.store.fetchComicById(this.$route.params.id)
        this.storeHeroes.fetchComicHeroesById(this.$route.params.id)
    },
})
</script>
<template>
    <div class="container">
        <div class="info-comic">
            <TheInfoComic v-bind:comic="lcomic" />
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
.nav-comic {
    margin: 30px;
}
.no-data {
    margin: 50px; 
    font-size: 15px;
    text-align: center;
}
</style>
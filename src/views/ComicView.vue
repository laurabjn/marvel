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
        const heroes = computed(() => {
            return storeHeroes.heroesList
        })
        const meta = computed(() => {
            return storeHeroes.meta
        })
        return {
            store,
            storeHeroes,
            lcomic,
            heroes,
            meta
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
        <TheInfoComic v-bind:comic="lcomic" />
        <div class="nav-comic">
            <TheNavComic v-bind:heroes="heroes" v-bind:meta="meta" />
        </div>
    </div>
</template>
<style scoped>

</style>
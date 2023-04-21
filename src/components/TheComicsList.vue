<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useComicsStore } from '@/stores';
import TheComicCard from './TheComicCard.vue';

export default defineComponent ({
    setup() {
        const store = useComicsStore()
        const getAllComics = computed(() => {
            return store.getAllComics
        })
        const comics = computed(() => {
            return store.comicsList
        })
        return {
            store,
            getAllComics,
            comics
        }
    },
    name: "ComicsList",
    components: {
        TheComicCard
    },
    mounted() {
        this.store.fetchComics()
    },
})
</script>
<template>
    <div class="container">
        <div class="comics-list" v-bind:key="comic.comic.id" v-for="comic in comics">
            <TheComicCard v-bind:comic="comic" v-bind:more-info="true" />
        </div>
    </div>
</template>
<style scoped>

</style>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useComicsStore } from '@/stores';
import TheComicCard from './TheComicCard.vue';

export default defineComponent ({
    setup() {
        const store = useComicsStore()
        const comics = computed(() => {
            return store.comicsList
        })
        const meta = computed(() => {
            return store.meta
        })
        return {
            store,
            comics,
            meta
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
        <div class="comics-list" v-bind:key="comic" v-for="comic in comics">
            <TheComicCard v-bind:comic="comic" v-bind:more-info="true" />
        </div>
    </div>
</template>
<style scoped>

</style>
<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import TheComicsList from '@/components/TheComicsList.vue';

export default defineComponent ({
    name: "Comics",
    components: {
        SearchBar, 
        TheComicsList
    },
    methods: {
        searchComic(search: string) {

        }
    }
})
</script>
<template>
    <div class="container">
        <div class="search-bar">
            <SearchBar @search-event="searchComic" />
        </div>
        <div class="list">
            <TheComicsList />
        </div>
    </div>
</template>
<style scoped>

</style>
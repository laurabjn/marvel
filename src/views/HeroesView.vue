<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import TheHeroesList from '@/components/TheHeroesList.vue';

export default defineComponent ({
    name: "Heroes",
    components: {
        SearchBar,
        TheHeroesList
    }
})
</script>
<template>
    <div class="container">
        <div class="search-bar">
            <SearchBar />
        </div>
        <div class="list">
            <TheHeroesList />
        </div>
    </div>
</template>
<style scoped>

</style>
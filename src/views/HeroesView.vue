<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent ({
    name: "Heroes",
    components: {
        SearchBar
    }
})
</script>
<template>
    <div class="container">
        <div class="search-bar">
            <SearchBar />
        </div>
    </div>
</template>
<style scoped>

</style>
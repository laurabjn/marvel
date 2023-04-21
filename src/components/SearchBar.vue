<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "SearchBar",
    data() {
        return {
            search: ""
        }
    }
})
</script>
<template>
    <div class="container">
        <input  type="text"
                class="search"
                v-model="search"
                placeholder="Search..."
        />
        <button class="btn-search" @click="$emit('search-event', search)">Search</button>
    </div>
</template>
<style scoped>
</style>
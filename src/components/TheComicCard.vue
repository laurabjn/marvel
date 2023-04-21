<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent ({
    name: "ComicCard",
    props: [
        "comic",
        "moreInfo"
    ]
})
</script>
<template>
    <div class="container">
        <div class="image">
            <img :src="comic.comic.thumbnail"/>
        </div>
        <div class="content">
            <div class="header">{{ comic.comic.title }}</div>
            <div class="description">{{ comic.comic.description }}</div>
        </div>
        <div v-if="moreInfo">
            <RouterLink class="btn-more" to="/comics/:comic.id">More Info</RouterLink>
        </div>
    </div>
</template>
<style scoped>

</style>
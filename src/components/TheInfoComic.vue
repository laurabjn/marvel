<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "InfoComic",
    props: [
        "comic",
    ]
})
</script>
<template>
    <div class="container">
        <div class="image">
            <img :src="comic.thumbnail"/>
        </div>
        <div class="content">
            <div class="header">{{ comic.title }}</div>
            <div class="description">{{ comic.description }}</div>
        </div>
    </div>
</template>
<style scoped>

</style>
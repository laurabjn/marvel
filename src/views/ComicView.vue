<script lang="ts">
import { defineComponent } from 'vue';
import TheComicCard from '@/components/TheComicCard.vue';
import TheNavComic from '@/components/TheNavComic.vue';

export default defineComponent ({
    name: "Comic",
    props: [
        "comic"
    ],
    components: {
        TheComicCard,
        TheNavComic
    }
})
</script>
<template>
    <div class="container">
        <TheComicCard v-bind:more-info="false" />
        <div class="nav-comic">
            <TheComicCard v-bind:comic="comic" />
        </div>
    </div>
</template>
<style scoped>

</style>
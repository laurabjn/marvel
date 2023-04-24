<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent ({
    name: "HeroCard",
    props: [
        "hero",
        "moreInfo"
    ]
})
</script>
<template>
    <div class="container">
        <div class="image">
            <img :src="hero.thumbnail"/>
        </div>
        <div class="content">
            <div class="header">{{ hero.name }}</div>
            <div class="description">{{ hero.description }}</div>
        </div>
        <div v-if="moreInfo">
            <RouterLink class="btn-more" to="/heroes/:heroId">More Info</RouterLink>
        </div>
    </div>
</template>
<style scoped>
    .container {
        width: 500px;
    }
</style>
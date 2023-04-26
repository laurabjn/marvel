<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "TheInfoHero",
    props: [
        "hero"
    ]
})
</script>
<template>
    <div class="container">
        <div class="image">
            <img :src="hero.thumbnail"/>
        </div>
        <div class="content">
            <div class="name">{{ hero.name }}</div>
            <div class="description">{{ hero.description }}</div>
        </div>
    </div>
</template>
<style scoped>
</style>
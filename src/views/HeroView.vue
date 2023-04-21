<script lang="ts">
import { defineComponent } from 'vue';
import TheHeroCard from '@/components/TheHeroCard.vue';
import TheNavHero from '@/components/TheNavHero.vue';

export default defineComponent ({
    name: "Hero",
    props: [
        "hero"
    ],
    components: {
        TheHeroCard, 
        TheNavHero
    }
})
</script>
<template>
    <div class="container">
        <TheHeroCard v-bind:more-info="false" />
        <div class="nav-hero">
            <TheNavHero v-bind:hero="hero"/>
        </div>
    </div>
</template>
<style scoped>

</style>
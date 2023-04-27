<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "TheInfoHero",
    props: [
        "heroes"
    ],
    methods: {
        getImage(url: any) {
            return `${url}/portrait_incredible.jpg`
        }
    }
})
</script>
<template>
    <div class="container" v-bind:key="hero.id" v-for="hero in heroes">
        <div class="image">
            <img :src="getImage(hero.thumbnail.path)"/>
        </div>
        <div class="content">
            <div class="name">{{ hero.name }}</div>
            <div class="description">{{ hero.description }}</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    text-align: center;
}
.content {
    margin-bottom: 30px;
}
.name {
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
}
.description {
    margin: 20px;
    font-size: 15px;
    justify-content: center;
}
</style>
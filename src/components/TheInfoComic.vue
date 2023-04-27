<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: "TheInfoComic",
    props: [
        "comics"
    ],
    methods: {
        getImage(url: any) {
            return `${url}/portrait_incredible.jpg`
        }
    }
})
</script>
<template>
    <div class="container"  v-bind:key="comic.id" v-for="comic in comics">
        <div class="image">
            <img :src="getImage(comic.thumbnail.path)"/>
        </div>
        <div class="content">
            <div class="title">{{ comic.title }}</div>
            <div class="description">{{ comic.description }}</div>
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
.title {
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
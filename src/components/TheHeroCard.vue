<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent ({
    name: "HeroCard",
    props: [
        "hero"
    ],
    methods: {
        getImage(url: any) {
            return `${url}/portrait_incredible.jpg`
        }
    }
})
</script>
<template>
    <div class="container">
        <div class="image">
            <img :src="getImage(hero.thumbnail.path)"/>
        </div>
        <div class="content">
            <div class="header">{{ hero.name }}</div>
        </div>
        <div class="button">
            <RouterLink class="btn-more" :to="`/heroes/${hero.id}`">More Info</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 400px;
    height: 500px;
    background-color: lightgrey;
    overflow: hidden;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    border-radius: 10%;
    text-decoration: none;
}
.image {
    text-align: center;
    margin: 10%;
}
.header {
    text-align: center;
}
.button {
    position: relative;
    margin-top: 30px;
}
.btn-more {
    margin: 0;
    position: absolute;
    width: 100px;
    top: 50%;
    left: 50%;
    text-align: center;
    color: white;
    background-color: #be1c0d;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
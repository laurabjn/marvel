<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent ({
    name: "TheNavbarVue"
})
</script>
<template>
    <div class="container">
        <nav class="nav">
            <ul class="nav-ul">
                <li class="nav-li">
                    <RouterLink class="link" to="/">Home</RouterLink>
                </li>
                <li class="nav-li">
                    <RouterLink class="link" to="/heroes">Heroes</RouterLink>
                </li>
                <li class="nav-li">
                    <RouterLink class="link" to="/comics">Comics</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
.nav {
    height: 50px;
    width: auto;
    background-color: #252424;
}
.nav-ul {
    list-style-type: none;
    text-align: center;
}
.nav-li {
    display: inline;
    color: white;
    margin: 50px;
    font-size: 17px;
}
.nav-li a:hover {
    background-color: #252424;
    font-weight: bold;
    color: #be1c0d;
}
</style>
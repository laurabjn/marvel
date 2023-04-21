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
                    <RouterLink class="nav--link" to="/">Marvel Projet</RouterLink>
                </li>
                <li class="nav-li">
                    <RouterLink class="nav--link" to="/heroes">Heroes</RouterLink>
                </li>
                <li class="nav-li">
                    <RouterLink class="nav--link" to="/comics">Comics</RouterLink>
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
    margin: 0;
    padding: 0;
}
.nav-li {
    display: inline;
    margin: 30px;
}
.nav--link {
    align-items: center;
    color: white;
}
.nav--link a:hover {
    font-weight: bold;
    color: #931C10;
}
</style>
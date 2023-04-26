<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useHeroesStore } from '@/stores';
import TheHeroCard from '@/components/TheHeroCard.vue';

export default defineComponent ({
    name: "Heroes",
    data() {
        return {
            exampleItems: [],
            pageOfItems: [],
            search: ""
        };
    },
    components: {
        TheHeroCard
    },
    methods: {
        onChangePage(pageOfItems: []) {
            this.pageOfItems = pageOfItems;
        }
    },
    setup() {
        const store = useHeroesStore()
        const heroes = computed(() => {
            return store.heroesList
        })
        console.log('heroes', heroes)
        const meta = computed(() => {
            return store.meta
        })
        return {
            store,
            heroes,
            meta
        }
    },
    mounted() {
        this.store.fetchHeroes()
    },
    computed: {
        filteredHeroes() {
            return this.heroes.filter((hero: any) => {
                return hero.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1
            })
        }
    }
})
</script>
<template>
    <div class="container">
        <div class="search-bar">
            <input  type="text"
                class="search"
                v-model="search"
                placeholder="Search a hero..."
            />
        </div>
        <div v-if="filteredHeroes.length != 0">
            <div class="heroes-list" v-bind:key="hero" v-for="hero in filteredHeroes">
                <TheHeroCard v-bind:hero="hero" />
            </div>
        </div>
        <div v-else>
            <div class="no-data">There is no hero that matches your search</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 60px;
}
.search-bar {
    text-align: center;
}
.heroes-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.search {
    height: 30px;
    width: 550px;
}
.no-data {
    margin: 50px; 
    font-size: 15px;
    text-align: center;
}
</style>
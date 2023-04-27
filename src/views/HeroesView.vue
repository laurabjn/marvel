<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useHeroesStore } from '@/stores';
import TheHeroCard from '@/components/TheHeroCard.vue';

export default defineComponent ({
    name: "Heroes",
    data() {
        return {
            currentPage: 1,
            search: ""
        };
    },
    components: {
        TheHeroCard
    },
    methods: {
        onClickHandler(page: number) {
            console.log(page)
        }
    },
    setup() {
        const store = useHeroesStore()
        const heroes = computed(() => {
            return store.heroesList
        })
        console.log('heroes', heroes)
        return {
            store,
            heroes
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
            <div class="pagination">
                <vue-awesome-paginate
                    :total-items="filteredHeroes.length"
                    :items-per-page="6"
                    :max-pages-shown="6"
                    v-model="currentPage"
                    :on-click="onClickHandler"
                />
            </div>
        </div>
        <div v-else>
            <div class="no-data">There is no hero that matches your search</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    margin: 30px;
}
.search-bar {
    text-align: center;
}
.heroes-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
.pagination {
    text-align: center;
}
.pagination-container {
    display: flex;
    column-gap: 10px;
}
.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}
.paginate-buttons:hover {
    background-color: #d8d8d8;
}
.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}
.active-page:hover {
    background-color: #2988c8;
}
</style>
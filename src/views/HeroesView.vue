<script lang="ts">
import { defineComponent } from 'vue';
import { useApiKey } from '@/stores';
import TheHeroCard from '@/components/TheHeroCard.vue';
import Pagination from '../components/Pagination.vue';
import { getHash } from '@/utils/generate-hash';
import axios from 'axios';

export default defineComponent ({
    name: "Heroes",
    data() {
        return {
            currentPage: 0,
            pageSize: 6,
            search: "",
            historyList: [],
            isLoading: false,
            heroes: []
        };
    },
    components: {
        TheHeroCard,
        Pagination
    },
    methods: {
        onClickHandler(page: number) {
			let start = (page - 1) * this.pageSize
			let end = page * this.pageSize
			this.historyList = this.filteredHeroes.slice(start, end)
			this.currentPage = page
            console.log(this.currentPage)
            console.log(this.historyList)
        },
        fetchHeroes() {
            this.isLoading = true
            let ts = Date.now().toString();
            let hash = getHash(ts, this.store.getSecretKey, this.store.getPublicKey);
            axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=${ts}&apikey=${this.store.getPublicKey}&hash=${hash}`)
            .then((response) => {
                this.heroes = response.data.data.results
                this.isLoading = false
                console.log('this.heroes', this.heroes)
            })
            .catch((error) => {
                console.log(error)
                this.isLoading = false
            })
        }
    },
    setup() {
        const store = useApiKey()
        return {
            store
        }
    },
    mounted() {
        this.fetchHeroes()
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
    <div class="container" v-if="!isLoading">
        <div class="search-bar">
            <input  type="text"
                class="search"
                v-model="search"
                placeholder="Search a hero..."
            />
        </div>
        <div class="heroes-list" v-if="filteredHeroes.length != 0">
            <div v-bind:key="hero" v-for="hero in filteredHeroes">
                <TheHeroCard v-bind:hero="hero" />
            </div>
        </div>
        <div class="pagination" v-if="filteredHeroes.length != 0">
            <Pagination
                v-bind:items="filteredHeroes"
                v-bind:current-page="currentPage"
                v-bind:pageSize="pageSize"
                @page-update-event="onClickHandler"
            ></Pagination>
        </div>
        <div v-else>
            <div class="no-data">There is no hero that matches your search</div>
        </div>
    </div>
    <div class="loading" v-else>Loading...</div>
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
.loading {
    text-align: center;
    font-size: 15px;
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
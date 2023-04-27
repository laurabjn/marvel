<script lang="ts">
import { defineComponent } from 'vue';
import { useComicsStore } from '@/stores';
import TheComicCard from '@/components/TheComicCard.vue';

export default defineComponent ({
    name: "Comics",
    data() {
        return {
            currentPage: 1,
            search: ""
        };
    },
    components: {
        TheComicCard
    },
    methods: {
        onClickHandler(page: number) {
            console.log(page)
        }
    },
    setup() {
        const store = useComicsStore()
        return {
            store
        }
    },
    mounted() {
        this.store.fetchComics()
    },
    computed: {
        filteredComics() {
            return this.store.getComics.filter((comic: any) => {
                return comic.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
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
                placeholder="Search a comic..."
            />
        </div>
        <div v-if="filteredComics.length != 0">
            <div class="comics-list" v-bind:key="comic" v-for="comic in filteredComics">
                <TheComicCard v-bind:comic="comic" />
            </div>
            <div class="pagination">
                <vue-awesome-paginate
                    :total-items="filteredComics.length"
                    :items-per-page="6"
                    :max-pages-shown="6"
                    v-model="currentPage"
                    :on-click="onClickHandler"
                />
            </div>
        </div>
        <div v-else>
            <div class="no-data">There is no comic that matches your search</div>
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
.search {
    height: 30px;
    width: 550px;
}
.comics-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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
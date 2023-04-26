<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useComicsStore } from '@/stores';
import TheComicCard from '@/components/TheComicCard.vue';

export default defineComponent ({
    name: "Comics",
    data() {
        return {
            exampleItems: [],
            pageOfItems: [],
            search: ""
        };
    },
    components: {
        TheComicCard
    },
    methods: {
        onChangePage(pageOfItems: []) {
            this.pageOfItems = pageOfItems;
        }
    },
    setup() {
        const store = useComicsStore()
        const comics = computed(() => {
            return store.comicsList
        })
        const meta = computed(() => {
            return store.meta
        })
        return {
            store,
            comics,
            meta
        }
    },
    mounted() {
        this.store.fetchComics()
    },
    computed: {
        filteredComics() {
            return this.comics.filter((comic: any) => {
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
</style>
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
                <TheComicCard v-bind:comic="comic" v-bind:more-info="true" />
            </div>
        </div>
        <div v-else>
            <div class="no-data">There is no comic that matches your search</div>
        </div>
    </div>
</template>
<style scoped>

</style>
import { defineStore } from 'pinia'
import { secret_key, public_key } from '@/utils/marvel'
import { getHash } from '@/utils/generate-hash'
import axios from 'axios'

export const useComicsStore = defineStore('comics', {
    state: () => ({
        comicsList: [],
        meta: []
    }),
    actions: {
        async fetchComics() {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?limit=20&ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.comicsList = data.data.data.results
                this.meta = data.data.data
                console.log(this.meta)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})

export const useHeroesStore = defineStore('heroes', {
    state: () => ({
        heroesList: [],
        meta: []
    }),
    getters: {
        getAllHeroes(state) {
            return state.heroesList
        }
    },
    actions: {
        async fetchHeroes() {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.heroesList = data.data.data.results
                this.meta = data.data.data
                console.log(this.heroesList)
                console.log(this.meta)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})
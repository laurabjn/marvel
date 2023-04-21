import { defineStore } from 'pinia'
import { secret_key, public_key } from '@/marvel'
import axios from 'axios'

export const useComicsStore = defineStore('comics', {
    state: () => ({
        comicsList: [],
    }),
    getters: {
        getAllComics(state) {
            return state.comicsList
        }
    },
    actions: {
        async fetchComics() {
            try {
                const data = await axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
                this.comicsList = data.data
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
    }),
    getters: {
        getAllHeroes(state) {
            return state.heroesList
        }
    },
    actions: {
        async fetchHeroes() {
            try {
                const data = await axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
                this.heroesList = data.data
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})
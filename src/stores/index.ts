import { defineStore } from 'pinia'
import { secret_key, public_key } from '@/utils/marvel'
import { getHash } from '@/utils/generate-hash'
import axios from 'axios'

export const useApiKey = defineStore('key', {
    state: () => ({
        PUBLIC_KEY: '',
        SECRET_KEY: ''
    }),
    getters: {
        getPublicKey: (state) => state.PUBLIC_KEY = public_key,
        getSecretKey: (state) => state.SECRET_KEY = secret_key
    }
})

export const useComicsStore = defineStore('comics', {
    state: () => ({
        comicsList: []
    }),
    getters: {
        getComics: (state) => state.comicsList
    },
    actions: {
        async fetchComics() {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?limit=30&ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.comicsList = data.data.data.results
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})

export const useComicStore = defineStore('comic', {
    state: () => ({
        comic: {}
    }),
    getters: {
        getComic: (state) => state.comic
    },
    actions: {
        async fetchComicById(id: string | string[]) {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                console.log('fetch')
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.comic = data.data.data.results
                console.log('fetchcomic', this.comic)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})

export const useComicHeroesStore = defineStore('comicHeroes', {
    state: () => ({
        heroesList: []
    }),
    getters: {
        getComicHeroes: (state) => state.heroesList
    },
    actions: {
        async fetchComicHeroesById(id: string | string[]) {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.heroesList = data.data.data.results
                console.log(this.heroesList)
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
        meta: {}
    }),
    getters: {
        getHeroes: (state) => state.heroesList,
        getMeta: (state) => state.meta
    },
    actions: {
        async fetchHeroes() {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.heroesList = data.data.data.results
                console.log('list', this.heroesList)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})

export const useHeroStore = defineStore('hero', {
    state: () => ({
        hero: {}
    }),
    getters: {
        getHero: (state) => state.hero
    },
    actions: {
        async fetchHeroById(id: string | string[]) {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.hero = data.data.data.results
                console.log('fetchhero', this.hero)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})

export const useHeroComicsStore = defineStore('heroComics', {
    state: () => ({
        comicsList: []
    }),
    getters: {
        getHeroComics: (state) => state.comicsList
    },
    actions: {
        async fetchHeroComicsById(id: string | string[]) {
            try {
                let ts = Date.now().toString();
                let hash = getHash(ts, secret_key, public_key);
                const data = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${ts}&apikey=${public_key}&hash=${hash}`)
                this.comicsList = data.data.data.results
                console.log(this.comicsList)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})
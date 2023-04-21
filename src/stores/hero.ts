import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { secret_key, public_key } from '@/marvel'
import axios from 'axios'

export const useHeroStore = defineStore('hero', () => {
  const response = axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

  return response
})
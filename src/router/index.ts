import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroesViewVue from '@/views/HeroesView.vue'
import HeroViewVue from '@/views/HeroView.vue'
import ComicsViewVue from '@/views/ComicsView.vue'
import ComicViewVue from '@/views/ComicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroesViewVue
    },
    {
      path: '/heroes/:id',
      name: 'hero',
      component: HeroViewVue
    },
    {
      path: '/comics',
      name: 'comics',
      component: ComicsViewVue
    }
    ,
    {
      path: '/comics/:id',
      name: 'comic',
      component: ComicViewVue
    }
  ]
})

export default router

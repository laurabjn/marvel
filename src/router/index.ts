import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeroesViewVue from '@/views/HeroesView.vue'
import ComicsViewVue from '@/views/ComicsView.vue'

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
      path: '/comics',
      name: 'comics',
      component: ComicsViewVue
    }
  ]
})

export default router

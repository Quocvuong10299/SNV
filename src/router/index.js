import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Company_structure from '@/views/Company_structure.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/gioi-thieu',
      name: 'about',
      component: AboutView
    },
    {
      path: '/don-vi-thuoc-truc-thuoc',
      name: 'structure',
      component: Company_structure
    },
  ],
})

export default router

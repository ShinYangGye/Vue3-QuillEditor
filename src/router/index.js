import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modules',
      name: 'modules',
      component: () => import('../views/QuillAddModulesView.vue')
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/QuillBasicView.vue')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../views/QuillContentTypeView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/QuillWithFormView.vue')
    },
  ]
})

export default router

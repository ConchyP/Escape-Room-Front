import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'welcomeView',
      component: WelcomeView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Game',
      name: 'Game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/CountDownTimer',
      name: 'CountDownTimer',
      component: () => import('../views/CountDownTimerView.vue')
    },
    {
      path: '/Card',
      name: 'Card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    }

  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    ,
    {
      path: '/escape_room/:1',
      name: 'GameHackerEr',
      component: () => import('../escape_rooms/1.GameHackerERView.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    }

  ]
})

export default router

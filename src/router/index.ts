import { createRouter, createWebHashHistory } from 'vue-router'
import createRouterGuard from './guard'
import { appRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/sys/login/index.vue'),
    },
    ...appRoutes,
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

// set router guard
createRouterGuard(router)

export default router

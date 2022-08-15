import { createRouter, createWebHashHistory } from 'vue-router'

// 创建一个路由实例
const router = createRouter({
  // 创建一个hash历史记录
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
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router

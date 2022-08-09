import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue')
  }
]

// 创建一个路由实例
const router = createRouter({
  // 创建一个hash历史记录
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes
})

export default router

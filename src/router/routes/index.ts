import { BASE_HOME_PATH } from '../constants'
import type { AppRouteRecordRaw } from '@/router/types'

// 一次性导入modules下所有模块
const modules = import.meta.globEager('./modules/*.ts')
const routeModuleList: AppRouteRecordRaw[] = []

// 加入路由到集合中
Object.keys(modules).forEach((key) => {
  // @ts-expect-error Object is of type 'unknown'
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

// 静态路由
export const asyncRoutes = [...routeModuleList]

// 基础路由
export const appRoutes = [
  {
    path: '/',
    redirect: BASE_HOME_PATH,
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/sys/login/index.vue'),
    meta: {
      title: 'Login',
    },
  },
  ...asyncRoutes,
]

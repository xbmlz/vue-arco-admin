import { BASE_HOME_PATH, LAYOUT, NOT_FOUND_NAME } from '../constants'
import type { AppRouteRecordRaw } from '@/router/types'

// 根路由
export const ROOT_ROUTE: AppRouteRecordRaw = {
  path: '/',
  redirect: BASE_HOME_PATH,
}

// 登录
export const LOGIN_ROUTE: AppRouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    requiresAuth: false,
  },
}

// 404
export const NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'NotFound',
    requiresAuth: true,
  },
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/not-found/index.vue'),
      meta: {
        title: 'NotFound',
        requiresAuth: false,
      },
    },
  ],
}

// redirect
export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect/:path',
  name: 'Redirect',
  component: LAYOUT,
  meta: {
    requiresAuth: true,
  },
  children: [
    {
      path: '/redirect/:path',
      name: 'Redirect',
      component: () => import('@/views/redirect/index.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
}

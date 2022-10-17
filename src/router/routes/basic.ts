import type { RouteRecordRaw } from 'vue-router'
import { BASE_HOME_PATH, LAYOUT, NOT_FOUND_NAME } from '../constants'

// 根路由
export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  redirect: BASE_HOME_PATH,
}

// 登录
export const LOGIN_ROUTE: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    ignoreAuth: true,
  },
}

// 404
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'NotFound',
  },
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/not-found/index.vue'),
      meta: {
        title: 'NotFound',
        ignoreAuth: true,
      },
    },
  ],
}

// redirect
export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: '/redirect/:path',
  name: 'Redirect',
  component: LAYOUT,
  children: [
    {
      path: '/redirect/:path',
      name: 'Redirect',
      component: () => import('@/views/redirect/index.vue'),
    },
  ],
}

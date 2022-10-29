import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '@/router/constants'

const system: AppRouteRecordRaw = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  meta: {
    title: '系统管理',
    icon: 'icon-settings',
    order: 2,
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
        order: 1,
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('@/views/system/role/index.vue'),
      meta: {
        title: '角色管理',
        order: 2,
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理',
        order: 3,
      },
    },
  ],
}

export default system

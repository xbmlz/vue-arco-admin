import { LAYOUT } from '@/router/constants'
import type { AppRouteRecordRaw } from '@/router/types'

const dashboard: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: LAYOUT,
  meta: {
    title: '仪表盘',
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        title: '工作台',
        requiresAuth: true,
      },
    },
    /** simple */
    {
      path: 'monitor',
      name: '实时监控',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        title: 'Monitor',
        requiresAuth: true,
      },
    },
    /** simple end */
  ],
}
export default dashboard

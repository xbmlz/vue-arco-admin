import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '@/router/constants'

const dashboard: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: LAYOUT,
  meta: {
    title: '仪表盘',
    icon: 'icon-computer',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        title: '工作台',
      },
    },
    /** simple */
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
      meta: {
        title: '实时监控',
      },
    },
    /** simple end */
  ],
}
export default dashboard

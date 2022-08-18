import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../../types'

const dashboard: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/dashboard/monitor/index.vue'),
    },
  ],
}

export default dashboard

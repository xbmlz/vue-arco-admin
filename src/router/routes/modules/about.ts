import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '@/router/constants'

const about: AppRouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    icon: 'icon-info-circle',
    title: '关于',
    hideChildrenInMenu: true,
    order: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/about/index.md'),
      meta: {
        title: '关于',
        icon: 'info-info-circle',
        hideInMenu: true,
      },
    },
  ],
}
export default about

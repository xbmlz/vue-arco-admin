import { getRequestToken, resultError, resultOk } from '../_util'
import { userList } from './user'
import type { requestParams } from '../_util'
import type { MockMethod } from 'vite-plugin-mock'

const menuList = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: '仪表盘',
      icon: 'icon-dashboard',
      requiresAuth: true,
      order: 1,
    },
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        meta: {
          title: '工作台',
          requiresAuth: true,
          order: 1,
        },
      },
      {
        path: 'https://arco.design',
        name: 'arcoWebsite',
        meta: {
          title: 'ArcoWebsite',
          requiresAuth: true,
          order: 1,
        },
      },
    ],
  },
]

export default [
  {
    url: '/api/getMenuList',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token!')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('Invalid user token!')
      return resultOk(menuList)
    },
  },
] as MockMethod[]

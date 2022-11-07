import type { MockMethod } from 'vite-plugin-mock'
import { getRequestToken, resultError, resultOk } from '../_util'
import type { requestParams } from '../_util'

export const userList = [
  {
    userId: '1',
    username: 'admin',
    realName: 'Super Admin',
    homePath: '/dashboard/workplace',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=admin',
    password: '123456',
    token: 'mockToken1',
    role: 'admin',
  },
  {
    userId: '2',
    username: 'test',
    password: '123456',
    homePath: '/dashboard/workplace',
    realName: 'test',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=test',
    token: 'mockToken2',
    role: 'user',
  },
]

const userMenus = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: '仪表盘',
      icon: 'icon-dashboard',
      order: 1,
    },
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        meta: {
          title: '工作台',
          order: 1,
        },
      },
      {
        path: 'https://arco.design',
        name: 'ArcoWebsite',
        meta: {
          title: 'ArcoWebsite',
          order: 1,
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'icon-settings',
      order: 2,
    },
    children: [
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户管理',
          order: 1,
        },
      },
      {
        path: 'role',
        name: 'Role',
        meta: {
          title: '角色管理',
          order: 2,
        },
      },
      {
        path: 'menu',
        name: 'Menu',
        meta: {
          title: '菜单管理',
          order: 3,
        },
      },
    ],
  },
]

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({
      // @ts-expect-error https://github.com/vbenjs/vite-plugin-mock/issues/54
      body,
    }) => {
      const { username, password } = body
      const loginUser = userList.find((item) => item.username === username && password === item.password)
      if (!loginUser) return resultError('Incorrect account or password!')
      const { userId, username: _username, token, realName, role } = loginUser
      return resultOk({
        role,
        userId,
        username: _username,
        token,
        realName,
      })
    },
  },
  {
    url: '/api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('Invalid token!')

      return resultOk(undefined, { msg: 'Token has been destroyed' })
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('The corresponding user information was not obtained!')

      return resultOk(checkUser)
    },
  },
  {
    url: '/api/user/menu',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token!')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('Invalid user token!')
      return resultOk(userMenus)
    },
  },
  {
    url: '/api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('Invalid token!')

      return resultOk(undefined, { msg: 'Token has been destroyed' })
    },
  },
] as MockMethod[]

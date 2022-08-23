import type { MockMethod } from 'vite-plugin-mock'
import { getRequestToken, resultError, resultOk } from '../_util'
import { userList } from './user'

const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  meta: {
    icon: 'icon-dashboard',
    order: 1,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
    },
  ],
}

export default [
  {
    url: '/api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token)
        return resultError('Invalid token!')
      const checkUser = userList.find(item => item.token === token)
      if (!checkUser)
        return resultError('Invalid user token!')
      const id = checkUser.userId
      let menu: Object[]
      switch (id) {
        case '1':
          menu = dashboardRoute
          break
        case '2':
          menu = dashboardRoute
          break
        default:
          menu = []
      }
      return resultOk(menu)
    },
  },
] as MockMethod[]

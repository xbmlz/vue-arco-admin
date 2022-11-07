import type { MockMethod } from 'vite-plugin-mock'
import { getRequestToken, resultError, resultOk } from '../_util'
import type { requestParams } from '../_util'
import { userList } from './user'

function getMenuList() {
  const result: any[] = []
  for (let i = 0; i < 3; i++) {
    result.push({
      id: `${i}`,
      key: '@increment(1)',
      type: '0',
      icon: ['icon-skin', 'icon-safe', 'icon-tool'][i],
      name: ['Menu1', 'Menu2', 'Menu3'][i],
      title: ['菜单1', '菜单2', '菜单3'][i],
      path: ['/system/menu1', '/system/menu2', '/system/menu3'][i],
      permission: 'system',
      order: i + 1,
      'status|1': [0, 1],
      createTime: '@datetime',
      children: (() => {
        const children: any[] = []
        for (let j = 0; j < 3; j++) {
          children.push({
            id: `${i}-${j}`,
            key: '@increment(1)',
            type: '1',
            icon: 'icon-skin',
            name: ['MenuChild1', 'MenuChild2', 'MenuChild3'][j],
            title: ['子菜单1', '子菜单2', '子菜单3'][j],
            path: ['/system/menu1/child1', '/system/menu2/child2', '/system/menu3/child3'][j],
            permission: ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][j],
            order: j + 1,
            'status|1': [0, 1],
            createTime: '@datetime',
            children: (() => {
              const children: any[] = []
              for (let k = 0; k < 3; k++) {
                children.push({
                  id: `${i}-${j}-${k}`,
                  key: '@increment(1)',
                  type: '2',
                  title: `按钮${j + 1}-${k + 1}`,
                  icon: '',
                  permission: `${['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][i]}:btn${k + 1}`,
                  order: j + 1,
                  createTime: '@datetime',
                  'status|1': [0, 1],
                  children: undefined,
                })
              }
              return children
            })(),
          })
        }
        return children
      })(),
    })
  }
  return result
}

export default [
  {
    url: '/api/menu/list',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token!')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) return resultError('Invalid user token!')
      return resultOk(getMenuList())
    },
  },
] as MockMethod[]

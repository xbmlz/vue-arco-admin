import type { MockMethod } from 'vite-plugin-mock'
import { resultError, resultOk } from '../_util'
const users = [
  {
    userId: '1',
    username: 'admin',
    realName: 'Super Admin',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=admin',
    desc: 'mock user 1',
    password: '123456',
    token: 'mockToken1',
    roles: [
      {
        roleName: 'Super Admin',
        value: 'super',
      },
    ],
  },
  {
    userId: '2',
    username: 'test',
    password: '123456',
    realName: 'test',
    avatar: 'https://dummyimage.com/640x640/1c66c7/fff.png&text=test',
    desc: 'mock user 1',
    token: 'mockToken2',
    roles: [
      {
        roleName: 'Tester',
        value: 'test',
      },
    ],
  },
]

export default [
  {
    url: '/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const loginUser = users.find(item => item.username === username && password === item.password)
      if (!loginUser)
        return resultError('Incorrect account or password!')
      const { userId, username: _username, token, realName, desc, roles } = loginUser
      return resultOk({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      })
    },
  },
] as MockMethod

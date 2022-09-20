import { getRequestToken, resultError, resultOk } from '../_util'
import type { requestParams } from '../_util'
import type { MockMethod } from 'vite-plugin-mock'
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

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({
      // @ts-ignore https://github.com/vbenjs/vite-plugin-mock/issues/54
      body,
    }) => {
      const { username, password } = body
      const loginUser = userList.find(
        (item) => item.username === username && password === item.password
      )
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
    url: '/api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser)
        return resultError(
          'The corresponding user information was not obtained!'
        )

      return resultOk(checkUser)
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

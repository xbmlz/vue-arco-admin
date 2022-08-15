import type { LoginParams, LoginResult } from './model/userModel'
import request from '@/utils/request'

enum Api {
  Login = '/login',
}

export function loginApi(params: LoginParams) {
  return request.post<LoginResult>(Api.Login, params)
}

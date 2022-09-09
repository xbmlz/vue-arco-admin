import request from '@/utils/request'
import type { GetUserInfo, LoginParams, LoginResult } from './model/userModel'

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
}

export function loginApi(params: LoginParams) {
  return request.post<LoginResult>(Api.Login, params)
}

export function logoutApi() {
  return request.get(Api.Logout)
}

export function userInfoApi() {
  return request.get<GetUserInfo>(Api.GetUserInfo)
}

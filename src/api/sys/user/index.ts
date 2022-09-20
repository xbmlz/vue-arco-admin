import request from '@/utils/request'
import type { LoginParams, LoginResult, UserInfoResult } from './types'

enum Path {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
}

export default class UserApi {
  // 登录
  static login(params: LoginParams) {
    return request.post<LoginResult>(Path.Login, params)
  }
  // 登出
  static logout() {
    return request.get(Path.Logout)
  }
  // 获取用户信息
  static getUserInfo() {
    return request.get<UserInfoResult>(Path.GetUserInfo)
  }
}
import type { RouteRecordNormalized } from 'vue-router'
import type { LoginParams, LoginResult, UserInfoResult } from './model'
import request from '@/utils/request'

enum Path {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/user/info',
  GetUserMenu = '/user/menu',
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

  // 获取用户菜单
  static getUserMenu() {
    return request.get<RouteRecordNormalized[]>(Path.GetUserMenu)
  }
}

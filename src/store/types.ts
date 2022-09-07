import type { RouteRecordNormalized } from 'vue-router'
export interface AppState {
  theme: string
  isMobile: boolean
  serverMenu: boolean
  siderWidth: number
  siderCollapsed: boolean
  siderHidden: boolean
}

export interface PermissionState {
  menuList: RouteRecordNormalized[]
}

export interface UserState {
  name: string
  avatar: string
  token: string
  role: string
}

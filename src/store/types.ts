import type { RoleInfo } from '@/api/sys/model/userModel'

declare type Nullable<T> = T | null

export interface UserState {
  userInfo: Nullable<UserInfo>
  token?: string
}

export interface UserInfo {
  userId: string | number
  username: string
  realName: string
  avatar: string
  desc?: string
  roles: RoleInfo[]
}

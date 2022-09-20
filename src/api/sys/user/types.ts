export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  userId: number
  token: string
  role: string
}

export type RoleType = '' | '*' | 'admin' | 'user'

export interface UserInfoResult {
  userId: number
  username: string
  realName: string
  homePath: string
  avatar: string
  role: RoleType
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  userId: string | number
  token: string
  role: RoleInfo
}

export interface RoleInfo {
  roleName: string
  value: string
}

export interface GetUserInfo {
  userId: string | number
  username: string
  homePath: string
  realName: string
  avatar: string
  desc?: string
  roles: RoleInfo[]
}

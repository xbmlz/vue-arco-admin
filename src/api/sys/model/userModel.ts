export interface LoginParams {
  username: string
  password: string
}

export interface RoleInfo {
  roleName: string
  value: string
}

export interface LoginResult {
  userId: string | number
  token: string
  role: RoleInfo
}

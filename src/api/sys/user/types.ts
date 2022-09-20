export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  userId: number
  token: string
  role: string
}

export interface UserInfoResult {
  userId: number
  username: string
  homePath: string
  realName: string
  avatar: string
  desc?: string
  role: string
}

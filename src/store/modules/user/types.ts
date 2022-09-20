export type RoleType = '' | '*' | 'admin' | 'user'

export interface UserState {
  userId?: string | number
  username?: string
  realName?: string
  homePath?: string
  avatar?: string
  token?: string
  role?: RoleType
}

export type RoleType = '' | '*' | 'admin' | 'user'

export interface UserState {
  userId: number
  username: string
  name?: string
  homePath?: string
  avatar?: string
  token?: string
  role?: RoleType
}

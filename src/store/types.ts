import type { RoleInfo } from '@/api/sys/model/userModel'

export interface UserInfo {
  userId: string | number
  username: string
  realName: string
  homePath: string
  avatar: string
  desc?: string
  roles: RoleInfo[]
}

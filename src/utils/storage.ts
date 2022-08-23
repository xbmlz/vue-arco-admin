import type { UserInfo } from '@/store/types'

export const tokenStorage = useStorage<string>('token', '')

export const userStorage = useStorage<UserInfo>('userInfo', {
  userId: '',
  username: '',
  homePath: '',
  realName: '',
  avatar: '',
  desc: '',
  roles: [],
})

export const appStorage = useStorage<AppSettings>('app', {
  backMenu: false,
})

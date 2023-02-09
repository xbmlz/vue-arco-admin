import { defineStore } from 'pinia'
import { usePermissionStore } from '../modules/permission'
import UserApi from '@/api/system/user/index'
import { userToken } from '@/utils/storage'
import router from '@/router'
import { LOGIN_PATH } from '@/router/constants'
import { removeRouteListener } from '@/utils/route-listener'
import type { LoginParams } from '@/api/system/user/model'

type RoleType = '' | '*' | 'admin' | 'user'

interface UserState {
  userId?: string | number
  username?: string
  realName?: string
  homePath?: string
  avatar?: string
  token?: string
  role?: RoleType
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userId: '',
    username: '',
    realName: '',
    homePath: '',
    avatar: '',
    token: '',
    role: '',
  }),
  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    },
    isLogin(): boolean {
      return !!userToken.value
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token || ''
      userToken.value = token
    },
    setUserInfo(partial: Partial<UserState>) {
      this.$patch(partial)
    },
    resetInfo() {
      this.setToken('')
      this.$reset()
    },
    // user info
    async info() {
      const userInfo = await UserApi.getUserInfo()
      this.setUserInfo(userInfo)
    },
    // login
    async login(params: LoginParams) {
      const data = await UserApi.login(params)
      const { token } = data
      // save token
      this.setToken(token)
      if (!this.token) return null
      const userInfo = await UserApi.getUserInfo()
      this.setUserInfo(userInfo)
      // router
      const permissionStore = usePermissionStore()
      permissionStore.buildRoutes()
      return userInfo
    },
    // logout
    async logout() {
      if (this.token) await UserApi.logout()
      const permissionStore = usePermissionStore()
      router.push(LOGIN_PATH)
      this.resetInfo()
      removeRouteListener()
      permissionStore.clearMenuList()
    },
  },
})

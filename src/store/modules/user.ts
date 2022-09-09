import { defineStore } from 'pinia'
import type { UserState } from '../types'
import { loginApi, logoutApi, userInfoApi } from '@/api/sys/user'
import type { LoginParams } from '@/api/sys/model/userModel'
import { usePermissionStore } from '@/store/modules/permission'
import { userToken } from '@/utils/storage'
import router from '@/router'
import { LOGIN_PATH } from '@/router/constants'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    name: '',
    avatar: '',
    token: '',
    role: '',
  }),
  getters: {
    userInfo(state: UserState): UserState {
      return { ...state }
    },
    userToken(): string {
      return this.token || userToken.value
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
    async userInfoAction() {
      const userInfo = await userInfoApi()
      this.setUserInfo(userInfo)
      return userInfo
    },
    // login
    async login(params: LoginParams) {
      const data = await loginApi(params)
      const { token } = data
      // save token
      this.setToken(token)
      if (!this.token)
        return null
      const userInfo = await userInfoApi()
      this.setUserInfo(userInfo)
      // router
      const permissionStore = usePermissionStore()
      permissionStore.buildRoutesAction()
      return userInfo
    },
    // logout
    async logout() {
      if (this.token)
        await logoutApi()
      router.push(LOGIN_PATH)
      this.resetInfo()
    },
  },
})

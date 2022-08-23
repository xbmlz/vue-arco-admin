import { defineStore } from 'pinia'
import type { UserInfo } from '../types'
import { loginApi, userInfoApi } from '@/api/sys/user'
import type { LoginParams } from '@/api/sys/model/userModel'
import { tokenStorage, userStorage } from '@/utils/storage'
import store from '@/store'

interface UserState {
  userInfo: UserInfo | null
  token?: string
}

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || userStorage.value || {}
    },
    getToken(): string {
      return this.token || tokenStorage.value
    },
  },
  actions: {
    setToken(token: string | undefined) {
      this.token = token || ''
      tokenStorage.value = token
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
      userStorage.value = info
    },
    // login
    async login(params: LoginParams) {
      const data = await loginApi(params)
      const { token } = data
      // save token
      this.setToken(token)
      if (!this.getToken)
        return null
      const userInfo = await userInfoApi()
      this.setUserInfo(userInfo)
      return userInfo
    },
    // logout
    async logout() {
      this.setToken(undefined)
      this.setUserInfo(null)
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}

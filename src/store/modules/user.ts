import { defineStore } from 'pinia'
import type { UserInfo, UserState } from '../types'
import { loginApi, userInfoApi } from '@/api/sys/user'
import type { LoginParams } from '@/api/sys/model/userModel'
import { tokenStorage, userStorage } from '@/utils/storage'

const useUserStore = defineStore('user', {
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
    resetState() {
      this.userInfo = null
      this.token = ''
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
      // TODO
      return userInfo
    },
    // logout
    async logout() {
      this.setToken(undefined)
      this.setUserInfo(null)
    },
  },
})

export default useUserStore

import { defineStore } from 'pinia'
import type { UserState } from '../types'
import { loginApi, userInfoApi } from '@/api/sys/user'
import type { LoginParams } from '@/api/sys/model/userModel'
import store from '@/store'
import { usePermissionStore } from '@/store/modules/permission'
import { userToken } from '@/utils/storage'

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    token: undefined,
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
      this.setToken(undefined)
      this.setUserInfo(null)
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}

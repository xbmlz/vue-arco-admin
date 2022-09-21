import { createPinia } from 'pinia'
import { useAppStore } from './modules/app/index'
import { useUserStore } from './modules/user/index'
import { usePermissionStore } from './modules/permission/index'
import { useTabsStore } from './modules/tabs/index'

const pinia = createPinia()

export { useAppStore, useUserStore, usePermissionStore, useTabsStore }
export default pinia

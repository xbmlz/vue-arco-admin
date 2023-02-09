import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useUserStore } from './modules/user'
import { usePermissionStore } from './modules/permission'
import { useTabsStore } from './modules/tabs'

const pinia = createPinia()

export { useAppStore, useUserStore, usePermissionStore, useTabsStore }
export default pinia

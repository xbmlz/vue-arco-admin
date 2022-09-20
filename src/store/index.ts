import { createPinia } from 'pinia'
import { useAppStore } from './modules/app/index'
import { useUserStore } from './modules/user/index'
import { usePermissionStore } from './modules/permission/index'

const pinia = createPinia()

export { useAppStore, useUserStore, usePermissionStore }
export default pinia

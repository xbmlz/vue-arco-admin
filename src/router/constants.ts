export const ROOT_PATH = '/'

export const LAYOUT = () => import('@/layout/index.vue')

export const LOGIN_PATH = '/login'

export const BASE_HOME_PATH = '/dashboard/workplace'

export const LOGIN_NAME = 'Login'

export const NOT_FOUND_NAME = 'NotFound'

export const WHITE_LIST = [
  { name: NOT_FOUND_NAME, children: [] },
  { name: LOGIN_NAME, children: [] },
]

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // title
    title?: string
    // icon
    icon?: string
    // ignore auth
    ignoreAuth?: boolean
    // roles:  '' | '*' | 'admin' | 'user'
    roles?: string[]
    // order numner
    order?: number
    // default active menu
    activeMenu?: string
    // is keep alive
    cache?: boolean
    // fixed on tab bar
    affix?: boolean
    // hide
    hideInMenu?: boolean
    // hide submenu
    hideChildrenInMenu?: boolean
  }
}

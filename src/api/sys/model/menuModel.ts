import type { RouteMeta } from 'vue-router'

export interface RouteItem {
  path: string
  component: any
  meta: RouteMeta
  name?: string
  redirect?: string
  children?: RouteItem[]
}

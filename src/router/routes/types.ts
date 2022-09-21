import type { defineComponent } from 'vue'
import type { RouteMeta } from 'vue-router'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface AppRouteRecordRaw {
  path: string
  name?: string | symbol
  meta?: RouteMeta
  redirect?: string
  component: Component | string
  children?: AppRouteRecordRaw[]
}

export interface Menu {
  path: string
  name?: string | symbol
  icon?: string
  children?: Menu[]
  meta?: Partial<RouteMeta>
}

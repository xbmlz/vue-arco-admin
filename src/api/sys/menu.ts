import type { RouteItem } from './model/menuModel'
import request from '@/utils/request'

enum Api {
  GetMenuList = '/getMenuList',
}

export function menuListApi() {
  return request.get<RouteItem[]>(Api.GetMenuList)
}


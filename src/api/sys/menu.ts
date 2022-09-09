import request from '@/utils/request'
import type { RouteRecordNormalized } from 'vue-router'

enum Api {
  GetMenuList = '/getMenuList',
}

export function menuListApi() {
  return request.get<RouteRecordNormalized[]>(Api.GetMenuList)
}

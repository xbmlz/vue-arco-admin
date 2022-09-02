import type { RouteRecordNormalized } from 'vue-router'
import request from '@/utils/request'

enum Api {
  GetMenuList = '/getMenuList',
}

export function menuListApi() {
  return request.get<RouteRecordNormalized[]>(Api.GetMenuList)
}


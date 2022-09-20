import request from '@/utils/request'
import type { RouteRecordNormalized } from 'vue-router'

enum Path {
  MenuList = '/menu/list',
}

export default class MenuApi {
  static getMenuList() {
    return request.get<RouteRecordNormalized[]>(Path.GetMenuList)
  }
}

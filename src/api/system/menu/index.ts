import type { RouteRecordNormalized } from 'vue-router'
import request from '@/utils/request'

enum Path {
  MenuList = '/menu/list',
}

export default class MenuApi {
  static getMenuList() {
    return request.get<RouteRecordNormalized[]>(Path.MenuList)
  }
}

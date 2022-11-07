import type { NotifyReadParams, NotifyResult } from './model'
import request from '@/utils/request'

enum Path {
  List = '/notify/list',
  Read = '/notify/read',
}

export default class NotifyApi {
  // 获取通知列表
  static list() {
    return request.get<NotifyResult[]>(Path.List)
  }

  // 更新状态
  static read(params: NotifyReadParams) {
    return request.post<NotifyResult[]>(Path.Read, params)
  }
}

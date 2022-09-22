export interface NotifyResult {
  id: number
  type: string
  title: string
  subTitle: string
  avatar?: string
  content: string
  time: string
  status: 0 | 1
  messageType?: number
}

export interface NotifyReadParams {
  ids: number[]
}

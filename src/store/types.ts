export interface UserState {
  userInfo: Nullable<UserInfo>
  token?: string
  lastUpdateTime: 0
}

export interface UserInfo {
  name?: string
  avatar?: string
}

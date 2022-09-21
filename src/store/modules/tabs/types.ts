export interface TabProps {
  title: string
  name: string
  fullPath: string
  query?: any
  cache?: boolean
}

export interface TabsState {
  tabList: TabProps[]
  tabCacheList: Set<string>
}

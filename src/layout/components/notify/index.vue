<script lang="ts" setup>
import NotifyList from './notify-list.vue'
import useLoading from '@/hooks/useLoading'
import NotifyApi from '@/api/system/notify/index'
import type { NotifyResult } from '@/api/system/notify/model'

const { loading, setLoading } = useLoading(true)

interface TabItem {
  key: string
  title: string
  avatar?: string
}

const notifyData = reactive<{
  notifyList: NotifyResult[]
}>({
  notifyList: [],
})

toRefs(notifyData)

const notifyType = ref('message')

const tabList: TabItem[] = [
  {
    key: 'message',
    title: '消息',
  },
  {
    key: 'notice',
    title: '通知',
  },
  {
    key: 'todo',
    title: '待办',
  },
]

const renderList = computed(() => {
  return notifyData.notifyList.filter((item) => notifyType.value === item.type)
})

const unreadCount = computed(() => {
  return renderList.value.filter((item) => !item.status).length
})

const getUnreadList = (type: string) => {
  const list = notifyData.notifyList.filter((item) => item.type === type && !item.status)
  return list
}

const formatUnreadLength = (type: string) => {
  const list = getUnreadList(type)
  return list.length > 0 ? `(${list.length})` : ``
}

const getNotifyList = async () => {
  setLoading(true)
  try {
    const data = await NotifyApi.list()
    notifyData.notifyList = data
  } catch {
    // you can report use errorHandler or other
  } finally {
    setLoading(false)
  }
}

async function readNotify(data: NotifyResult[]) {
  const ids = data.map((item) => item.id)
  await NotifyApi.read({ ids })
  getNotifyList()
}

const handleItemClick = (items: NotifyResult[]) => {
  if (renderList.value.length > 0) readNotify([...items])
}

const emptyList = () => {
  notifyData.notifyList = []
}

getNotifyList()
</script>

<template>
  <a-spin style="display: block" :loading="loading">
    <a-tabs v-model:activeKey="notifyType" type="rounded" destroy-on-hide>
      <a-tab-pane v-for="item in tabList" :key="item.key">
        <template #title>
          <span>{{ item.title }}{{ formatUnreadLength(item.key) }}</span>
        </template>
        <a-result v-if="renderList.length === 0" status="404">
          <template #subtitle>暂无内容</template>
        </a-result>
        <NotifyList :render-list="renderList" :unread-count="unreadCount" @item-click="handleItemClick" />
      </a-tab-pane>
      <template #extra>
        <a-button type="text" @click="emptyList">清空</a-button>
      </template>
    </a-tabs>
  </a-spin>
</template>

<style scoped lang="less">
:deep(.arco-popover-popup-content) {
  padding: 0;
}

:deep(.arco-list-item-meta) {
  align-items: flex-start;
}
:deep(.arco-tabs-nav) {
  padding: 14px 0 12px 16px;
  border-bottom: 1px solid var(--color-neutral-3);
}
:deep(.arco-tabs-content) {
  padding-top: 0;
  .arco-result-subtitle {
    color: rgb(var(--gray-6));
  }
}
</style>

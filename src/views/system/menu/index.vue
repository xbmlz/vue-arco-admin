<script setup lang="ts">
import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface'
import type { TableColumnData } from '@arco-design/web-vue'
import type { RouteRecordNormalized } from 'vue-router'
import { compile } from 'vue'
import MenuApi from '@/api/system/menu'

defineOptions({
  name: 'MenuManagement',
})

const formModel = ref<{
  name: string
  status: number
}>({
  name: '',
  status: 1,
})

const expandAll = ref(true)

const menuStatusOptions = computed<SelectOptionData[]>(() => [
  {
    label: '启用',
    value: 1,
  },
  {
    label: '禁用',
    value: 0,
  },
])

const menuList = ref<RouteRecordNormalized[]>([])

const search = async () => {
  menuList.value = await MenuApi.getMenuList()
}

const columns: TableColumnData[] = [
  {
    title: '菜单名称',
    dataIndex: 'title',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    render: ({ record }) => {
      return h(compile(`<${record.icon}/>`))
    },
  },
  {
    title: '权限标识',
    dataIndex: 'permission',
  },
  {
    title: '组件地址',
    dataIndex: 'path',
  },
  {
    title: '排序',
    dataIndex: 'order',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: ({ record }) => {
      return h(
        ATag,
        {
          color: record.status === 1 ? 'green' : 'red',
        },
        record.status === 1 ? '启用' : '禁用'
      )
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
]

onMounted(() => {
  search()
})
</script>

<template>
  <div>
    <a-card title="菜单管理" class="general-card">
      <!-- search form -->
      <a-form :model="formModel">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item field="number" label="名称">
              <a-input v-model="formModel.name" placeholder="请输入菜单名称" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="number" label="状态">
              <a-select
                v-model="formModel.status"
                :options="menuStatusOptions"
                placeholder="请选择菜单状态"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-space>
              <a-button type="primary" @click="search">
                <template #icon>
                  <icon-search />
                </template>
                查询
              </a-button>
              <a-button @click="search">
                <template #icon>
                  <icon-refresh />
                </template>
                重置
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
              新建
            </a-button>
            <a-button @click="expandAll = !expandAll">
              <template #icon>
                <icon-shrink />
              </template>
              展开/收起
            </a-button>
          </a-space>
        </a-col>
        <a-col :span="12" style="display: flex; align-items: center; justify-content: end">
          <a-tooltip content="刷新">
            <a-button shape="circle">
              <template #icon>
                <icon-refresh />
              </template>
            </a-button>
          </a-tooltip>
        </a-col>
      </a-row>
      <!-- table -->
      <a-table :columns="columns" :data="menuList" :default-expand-all-rows="true" />
    </a-card>
  </div>
</template>

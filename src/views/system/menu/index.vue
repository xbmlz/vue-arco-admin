<script setup lang="ts">
import type { RouteRecordNormalized } from 'vue-router'
import { columns, menuStatusOptions } from './data'
import MenuApi from '@/api/system/menu'

defineOptions({
  name: 'MenuManagement',
})

const tableRef = ref()

const formModel = ref<{
  name: string
  status: number
}>({
  name: '',
  status: 1,
})

const expandAll = ref(true)

const menuList = ref<RouteRecordNormalized[]>([])

const search = async () => {
  menuList.value = await MenuApi.getMenuList()
}

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
      <a-table ref="tableRef" :columns="columns" :data="menuList" :default-expand-all-rows="true" />
    </a-card>
  </div>
</template>

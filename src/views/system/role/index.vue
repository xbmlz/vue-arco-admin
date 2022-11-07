<script setup lang="ts">
import { TableColumnData } from '@arco-design/web-vue'
import type { SelectOptionData } from '@arco-design/web-vue'
import cloneDeep from 'lodash-es/cloneDeep'
import Sortable from 'sortablejs'

defineOptions({
  name: 'RoleManagement',
})

type SizeProps = 'mini' | 'small' | 'medium' | 'large'
type Column = TableColumnData & { checked?: true }

const size = ref<SizeProps>('medium')
const cloneColumns = ref<Column[]>([])
const showColumns = ref<Column[]>([])

const formModel = ref<{
  name: string
  status: number
}>({
  name: '',
  status: 1,
})

const roleStatusOptions = computed<SelectOptionData[]>(() => [
  {
    label: '启用',
    value: 1,
  },
  {
    label: '禁用',
    value: 0,
  },
])

const search = () => {}

const handleSelectDensity = (val: string | number | Record<string, any> | undefined, _e: Event) => {
  size.value = val as SizeProps
}

const densityList = computed(() => [
  {
    name: '迷你',
    value: 'mini',
  },
  {
    name: '偏小',
    value: 'small',
  },
  {
    name: '中等',
    value: 'medium',
  },
  {
    name: '偏大',
    value: 'large',
  },
])

const exchangeArray = <T extends Array<any>>(
  array: T,
  beforeIdx: number,
  newIdx: number,
  isDeep = false
): T => {
  const newArray = isDeep ? cloneDeep(array) : array
  if (beforeIdx > -1 && newIdx > -1) {
    // 先替换后面的，然后拿到替换的结果替换前面的
    newArray.splice(beforeIdx, 1, newArray.splice(newIdx, 1, newArray[beforeIdx]).pop())
  }
  return newArray
}

const popupVisibleChange = (val: boolean) => {
  if (val) {
    nextTick(() => {
      const el = document.querySelector('#tableSetting') as HTMLElement
      const sortable = new Sortable(el, {
        onEnd(e: any) {
          const { oldIndex, newIndex } = e
          exchangeArray(cloneColumns.value, oldIndex, newIndex)
          exchangeArray(showColumns.value, oldIndex, newIndex)
        },
      })
      sortable.option('disabled', false)
    })
  }
}

const handleChange = (checked: boolean | (string | boolean | number)[], column: Column, index: number) => {
  if (!checked) {
    cloneColumns.value = showColumns.value.filter((item) => item.dataIndex !== column.dataIndex)
  } else {
    cloneColumns.value.splice(index, 0, column)
  }
}
</script>

<template>
  <div>
    <!-- search -->
    <a-card title="角色管理" class="general-card">
      <a-form :model="formModel">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item field="number" label="名称">
              <a-input v-model="formModel.name" placeholder="请输入角色名称" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="number" label="状态">
              <a-select
                v-model="formModel.status"
                :options="roleStatusOptions"
                placeholder="请选择角色状态"
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
          </a-space>
        </a-col>
        <a-col :span="12" style="display: flex; align-items: center; justify-content: end">
          <a-button>
            <template #icon>
              <icon-download />
            </template>
            下载
          </a-button>
          <a-tooltip content="刷新">
            <div class="ml-2" @click="search"><icon-refresh size="18" /></div>
          </a-tooltip>
          <a-dropdown @select="handleSelectDensity">
            <a-tooltip content="密度">
              <div class="ml-2"><icon-line-height size="18" /></div>
            </a-tooltip>
            <template #content>
              <a-doption
                v-for="item in densityList"
                :key="item.value"
                :value="item.value"
                :class="{ active: item.value === size }"
              >
                <span>{{ item.name }}</span>
              </a-doption>
            </template>
          </a-dropdown>
          <a-tooltip content="列设置">
            <a-popover trigger="click" position="bl" @popup-visible-change="popupVisibleChange">
              <div class="ml-2"><icon-settings size="18" /></div>
              <template #content>
                <div id="tableSetting">
                  <div v-for="(item, index) in showColumns" :key="item.dataIndex" class="setting">
                    <div style="margin-right: 4px; cursor: move">
                      <icon-drag-arrow />
                    </div>
                    <div>
                      <a-checkbox
                        v-model="item.checked"
                        @change="handleChange($event, item as TableColumnData, index)"
                      />
                    </div>
                    <div class="title">
                      {{ item.title === '#' ? '序列号' : item.title }}
                    </div>
                  </div>
                </div>
              </template>
            </a-popover>
          </a-tooltip>
        </a-col>
      </a-row>
    </a-card>
    <!-- table -->
  </div>
</template>

import type { SelectOptionData, TableColumnData } from '@arco-design/web-vue'
import { compile } from 'vue'

export const columns: TableColumnData[] = [
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
        'a-tag',
        {
          color: record.status === 1 ? 'green' : 'red',
        },
        {
          default: () => (record.status === 1 ? '启用' : '禁用'),
        }
      )
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
]

export const menuStatusOptions = computed<SelectOptionData[]>(() => [
  {
    label: '启用',
    value: 1,
  },
  {
    label: '禁用',
    value: 0,
  },
])

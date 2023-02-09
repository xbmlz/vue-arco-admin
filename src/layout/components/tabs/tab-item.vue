<script lang="ts" setup>
import type { PropType } from 'vue'
import { useTabsStore } from '@/store'
import { DEFAULT_ROUTE_NAME, REDIRECT_ROUTE_NAME } from '@/router/constants'
import type { TabProps } from '@/store/modules/tabs'

const props = defineProps({
  tabData: {
    type: Object as PropType<TabProps>,
    default() {
      return []
    },
  },
  index: {
    type: Number,
    default: 0,
  },
})
const router = useRouter()
const route = useRoute()
const tabsStore = useTabsStore()

enum TabAction {
  reload = 'reload',
  current = 'current',
  left = 'left',
  right = 'right',
  others = 'others',
  all = 'all',
}

const goto = (tab: TabProps) => {
  router.push({ ...tab })
}

const tabList = computed(() => {
  return tabsStore.getTabList
})

const disabledReload = computed(() => {
  return props.tabData.fullPath !== route.fullPath
})

const disabledCurrent = computed(() => {
  return props.index === 0
})

const disabledLeft = computed(() => {
  return [0, 1].includes(props.index)
})

const disabledRight = computed(() => {
  return props.index === tabList.value.length - 1
})

const tabClose = (index: number, tab: TabProps) => {
  tabsStore.deleteTab(index, tab)
  if (props.tabData.fullPath === route.fullPath) {
    const latestTab = tabList.value[index - 1]
    router.push({ name: latestTab.name })
  }
}

const handleSelect = async (val: any) => {
  const { tabData, index } = props
  const copyTabList = [...tabList.value]
  const currentIndex = tabList.value.findIndex((el) => el.fullPath === route.fullPath)
  switch (val) {
    case TabAction.current:
      tabClose(index, tabData)
      break
    case TabAction.left:
      copyTabList.splice(1, props.index - 1)
      tabsStore.refreshTabList(copyTabList)
      if (currentIndex < index) {
        router.push({ name: tabData.name })
      }
      break
    case TabAction.right:
      copyTabList.splice(props.index + 1)
      tabsStore.refreshTabList(copyTabList)
      if (currentIndex > index) {
        router.push({ name: tabData.name })
      }
      break
    case TabAction.others:
      // eslint-disable-next-line no-case-declarations
      const filterList = tabList.value.filter((el, idx) => {
        return idx === 0 || idx === props.index
      })
      tabsStore.refreshTabList(filterList)
      router.push({ name: tabData.name })
      break
    case TabAction.reload:
      tabsStore.deleteTabCache(tabData)
      await router.push({
        name: REDIRECT_ROUTE_NAME,
        params: {
          path: route.fullPath,
        },
      })
      tabsStore.addTabCache(tabData.name)
      break
    default:
      tabsStore.resetTabList()
      router.push({ name: DEFAULT_ROUTE_NAME })
  }
}
</script>

<template>
  <a-dropdown trigger="contextMenu" :popup-max-height="false" @select="handleSelect">
    <span
      class="arco-tag arco-tag-size-medium arco-tag-checked"
      :class="{ 'link-activated': tabData.fullPath === $route.fullPath }"
      @click="goto(tabData)"
    >
      <span class="tag-link">
        {{ tabData.title }}
      </span>
      <span
        class="arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn"
        @click.stop="tabClose(index, tabData)"
      >
        <icon-close />
      </span>
    </span>
    <template #content>
      <a-doption :disabled="disabledReload" :value="TabAction.reload">
        <icon-refresh />
        <span>重新加载</span>
      </a-doption>
      <a-doption class="sperate-line" :disabled="disabledCurrent" :value="TabAction.current">
        <icon-close />
        <span>关闭当前标签页</span>
      </a-doption>
      <a-doption :disabled="disabledLeft" :value="TabAction.left">
        <icon-to-left />
        <span>关闭左侧标签页</span>
      </a-doption>
      <a-doption class="sperate-line" :disabled="disabledRight" :value="TabAction.right">
        <icon-to-right />
        <span>关闭右侧标签页</span>
      </a-doption>
      <a-doption :value="TabAction.others">
        <icon-swap />
        <span>关闭其它标签页</span>
      </a-doption>
      <a-doption :value="TabAction.all">
        <icon-folder-delete />
        <span>关闭全部标签页</span>
      </a-doption>
    </template>
  </a-dropdown>
</template>

<style scoped lang="less">
.tag-link {
  color: var(--color-text-2);
  text-decoration: none;
}
.link-activated {
  color: rgb(var(--link-6));
  .tag-link {
    color: rgb(var(--link-6));
  }
  & + .arco-tag-close-btn {
    color: rgb(var(--link-6));
  }
}
:deep(.arco-dropdown-option-content) {
  span {
    margin-left: 10px;
  }
}
.arco-dropdown-open {
  .tag-link {
    color: rgb(var(--danger-6));
  }
  .arco-tag-close-btn {
    color: rgb(var(--danger-6));
  }
}
.sperate-line {
  border-bottom: 1px solid var(--color-neutral-3);
}
</style>

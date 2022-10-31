<script lang="ts" setup>
import type { RouteLocationNormalized } from 'vue-router'
import TabItem from './tab-item.vue'
import { useAppStore, useTabsStore } from '@/store'
import { listenerRouteChange, removeRouteListener } from '@/utils/route-listener'

const tabsStore = useTabsStore()
const appStore = useAppStore()
const affixRef = ref()

// TODO navbar height
const offsetTop = computed(() => appStore.navbarHeight)

const tabList = computed(() => {
  return tabsStore.getTabList
})

listenerRouteChange((route: RouteLocationNormalized) => {
  if (!tabList.value.some((tab) => tab.fullPath === route.fullPath)) {
    tabsStore.addTab(route)
  }
}, true)

onUnmounted(() => {
  removeRouteListener()
})
</script>

<template>
  <div class="tab-bar-container">
    <a-affix ref="affixRef" :offset-top="offsetTop">
      <div class="tab-bar-box">
        <div class="tab-bar-scroll">
          <div class="tags-wrap">
            <TabItem v-for="(tag, index) in tabList" :key="tag.fullPath" :index="index" :tab-data="tag" />
          </div>
        </div>
        <div class="tag-bar-operation" />
      </div>
    </a-affix>
  </div>
</template>

<style scoped lang="less">
.tab-bar-container {
  position: relative;
  background-color: var(--color-bg-2);
  .tab-bar-box {
    display: flex;
    padding: 0 0 0 20px;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
    .tab-bar-scroll {
      height: 32px;
      flex: 1;
      overflow: hidden;
      .tags-wrap {
        padding: 4px 0;
        height: 48px;
        white-space: nowrap;
        overflow-x: auto;

        :deep(.arco-tag) {
          display: inline-flex;
          align-items: center;
          margin-right: 6px;
          cursor: pointer;
          &:first-child {
            .arco-tag-close-btn {
              display: none;
            }
          }
        }
      }
    }
  }

  .tag-bar-operation {
    width: 100px;
    height: 32px;
  }
}
</style>

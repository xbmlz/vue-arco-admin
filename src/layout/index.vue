<script lang="ts" setup>
import Header from './components/header/index.vue'
import Menu from './components/menu/index.vue'
import Tabs from './components/tabs/index.vue'
import Footer from './components/footer/index.vue'
import { isMobile } from '@/utils/device'
import { useAppStore, usePermissionStore, useTabsStore } from '@/store'

const appStore = useAppStore()
const permissionStore = usePermissionStore()
const tabsStore = useTabsStore()

const renderMenu = computed(() => permissionStore.menuList && !appStore.topMenu)
const debounceFn = useDebounceFn(() => {
  if (!document.hidden) appStore.updateSettings({ isMobile: isMobile() })
}, 100)

useEventListener(window, 'resize', debounceFn)

const sidebarWidth = computed(() => {
  return appStore.sidebarCollapsed ? 48 : appStore.sidebarWidth
})

const collapsed = computed(() => {
  return appStore.sidebarCollapsed
})

const sidebarHidden = computed(() => {
  return appStore.isMobile
})

const setCollapsed = (val: boolean) => {
  appStore.updateSettings({ sidebarCollapsed: val })
}

// TODO is show navbar
const navbar = ref(true)
const navbarHeight = computed(() => appStore.navbarHeight)

// layout content style
const contentStyle = computed(() => {
  const paddingLeft =
    renderMenu.value && !sidebarHidden.value ? { paddingLeft: `${sidebarWidth.value}px` } : {}
  const paddingTop = navbar.value ? { paddingTop: `${navbarHeight.value}px` } : {}
  return { ...paddingLeft, ...paddingTop }
})

const navbarStyle = computed(() => {
  return { height: `${navbarHeight.value}px` }
})

const sidebarStyle = computed(() => {
  const paddingTop = navbar.value ? { paddingTop: `${navbarHeight.value}px` } : {}
  return { ...paddingTop }
})

// draw
const drawerVisible = ref(false)
const drawerCancel = () => {
  drawerVisible.value = false
}

// cache
const cacheList = computed(() => tabsStore.getTabCacheList)

const multiTabs = computed(() => appStore.multiTabs)
const footer = computed(() => appStore.footer)

onMounted(() => {
  debounceFn()
})

provide('toggleDrawerMenu', () => {
  drawerVisible.value = !drawerVisible.value
})
</script>

<template>
  <a-layout class="layout">
    <!-- header -->
    <a-layout-header class="layout-header" :style="navbarStyle">
      <Header />
    </a-layout-header>
    <!-- main -->
    <a-layout>
      <!-- sider -->
      <a-layout-sider
        v-if="renderMenu"
        v-show="!sidebarHidden"
        class="layout-sider"
        :width="sidebarWidth"
        :hide-trigger="true"
        :collapsed="collapsed"
        :collapsible="true"
        :style="sidebarStyle"
        breakpoint="xl"
        @collapse="setCollapsed"
      >
        <div class="layout-menu">
          <Menu />
        </div>
      </a-layout-sider>
      <!-- mobile menu -->
      <a-drawer
        v-if="sidebarHidden"
        :visible="drawerVisible"
        placement="left"
        :footer="false"
        :header="false"
        mask-closable
        :closable="false"
        @cancel="drawerCancel"
      >
        <Menu />
      </a-drawer>
      <!-- content -->
      <a-layout class="layout-content" :style="contentStyle">
        <Tabs v-if="appStore.multiTabs" />
        <a-layout-content style="padding: 1rem">
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in" appear>
              <keep-alive v-if="route.meta.cache || multiTabs" :include="cacheList">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
              <component :is="Component" v-else :key="route.fullPath" />
            </transition>
          </router-view>
        </a-layout-content>
        <Footer v-if="footer" />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }
  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
  }
}

.layout-menu {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  :deep(.arco-menu) {
    ::-webkit-scrollbar {
      width: 12px;
      height: 4px;
    }
    ::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-text-4);
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-text-3);
    }
  }
}
.layout-content {
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>

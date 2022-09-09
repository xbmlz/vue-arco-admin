<script lang="ts" setup>
import { useAppStore, usePermissionStore } from '@/store'
import { isMobile } from '@/utils/device'
import Navbar from './components/navbar/index.vue'
import Menu from './components/menu/index.vue'

const appStore = useAppStore()
const permissionStore = usePermissionStore()

const renderMenu = computed(() => permissionStore.menuList)
const debounceFn = useDebounceFn(() => {
  if (!document.hidden) appStore.updateSettings({ isMobile: isMobile() })
}, 100)

useEventListener(window, 'resize', debounceFn)

const siderWidth = computed(() => {
  return appStore.siderCollapsed ? 48 : appStore.siderWidth
})

const collapsed = computed(() => {
  return appStore.siderCollapsed
})

const siderHidden = computed(() => {
  return appStore.isMobile
})

const setCollapsed = (val: boolean) => {
  appStore.updateSettings({ siderCollapsed: val })
}
const navbarHeight = '52px'
// TODO is show navbar
const navbar = ref(true)
const paddingStyle = computed(() => {
  const paddingLeft =
    renderMenu.value && !siderHidden.value
      ? { paddingLeft: `${siderWidth.value}px` }
      : {}
  const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {}
  return { ...paddingLeft, ...paddingTop }
})

// draw
const drawerVisible = ref(false)
const drawerCancel = () => {
  drawerVisible.value = false
}

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
    <a-layout-header class="layout-navbar">
      <Navbar />
    </a-layout-header>
    <!-- main -->
    <a-layout>
      <!-- sider -->
      <a-layout-sider
        v-if="renderMenu"
        v-show="!siderHidden"
        class="layout-sider"
        :width="siderWidth"
        :hide-trigger="true"
        :collapsed="collapsed"
        :collapsible="true"
        :style="{ paddingTop: navbar ? navbarHeight : '' }"
        breakpoint="xl"
        @collapse="setCollapsed"
      >
        <div class="layout-menu">
          <Menu />
        </div>
      </a-layout-sider>
      <!-- mobile menu -->
      <a-drawer
        v-if="siderHidden"
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
      <a-layout class="layout-content" :style="paddingStyle">
        <a-layout-content>
          <router-view />
          <!-- <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in" appear>
            <component
              :is="Component"
              v-if="route.meta.ignoreCache"
              :key="route.fullPath"
            />
            <keep-alive v-else :include="cacheList">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </transition>
        </router-view> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
@nav-size-height: 52px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
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

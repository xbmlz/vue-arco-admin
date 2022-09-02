<script lang="ts" setup>
import Navbar from './components/navbar/index.vue'
import Menu from './components/menu/index.vue'
import { useAppStore } from '@/store'
import { isMobile } from '@/utils/device'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const debounceFn = useDebounceFn(() => {
  if (!document.hidden)
    appStore.updateSettings({ isMobile: isMobile() })
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
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout>
      <!-- sider -->
      <a-layout-sider
        v-show="!siderHidden"
        class="layout-sider"
        :width="siderWidth"
        :hide-trigger="true"
        :collapsed="collapsed"
        :collapsible="true"
        breakpoint="xl"
        @collapse="setCollapsed"
      >
        <div class="menu-wrapper">
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
      <a-layout-content>
        <RouterView />
      </a-layout-content>
      <!-- footer -->
      <!-- <a-layout-footer>
        <Footer />
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    width: 100%;
    height: 100%;
  }

  .layout-sider {
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

  .menu-wrapper {
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
</style>

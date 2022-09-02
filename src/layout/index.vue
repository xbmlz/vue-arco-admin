<script lang="ts" setup>
import Navbar from './components/navbar/index.vue'
import Menu from './components/menu/index.vue'

const menuWidth = ref<number>(220)
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
        :width="220"
        class="layout-siderbar"
      >
        <div class="menu-wrapper">
          <Menu />
        </div>
      </a-layout-sider>
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

  .layout-siderbar {
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

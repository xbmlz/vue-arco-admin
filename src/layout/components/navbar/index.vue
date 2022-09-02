<script setup lang='ts'>
import { useAppStore } from '@/store'

const appStore = useAppStore()

const toggleDrawerMenu = inject('toggleDrawerMenu')
</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        >
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          VEnable
        </a-typography-title>
        <icon-menu-fold
          v-if="appStore.isMobile"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  height: 60px;
}

.navbar-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
}
</style>

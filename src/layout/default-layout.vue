<script lang="ts" setup>
import PageLayout from './page-layout.vue'
</script>

<template>
  <a-layout class="layout">
    <!-- navbar -->
    <div fixed>
      Navbar
    </div>
    <a-layout>
      <a-layout>
        <a-layout-sider>
          <div class="menu-wrapper">
            <Menu />
          </div>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </a-layout>
  <!-- <div>default layout</div>
  <div>
    <PageLayout />
  </div> -->
</template>

<style scoped lang="less">
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    width: 100%;
    height: 100%;
  }
</style>

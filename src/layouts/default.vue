<script lang="ts" setup>
</script>

<template>
  <a-layout class="layout">
    <Menu />
    <RouterView />
    <Footer />
  </a-layout>
</template>

<style scoped lang="less">
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    width: 100%;
    height: 100%;
  }
</style>

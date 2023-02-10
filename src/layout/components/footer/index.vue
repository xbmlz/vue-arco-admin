<script lang="ts" setup>
const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <a-layout-footer class="footer">Copyright ©2022 {{ appTitle }}</a-layout-footer>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-text-2);
  text-align: center;
}
</style>

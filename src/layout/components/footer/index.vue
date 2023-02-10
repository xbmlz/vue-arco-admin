<script lang="ts" setup>
const appStore = useAppStore()
const appTitle = computed(() => {
  return appStore.appTitle
})
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

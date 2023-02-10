<script lang="ts" setup>
// https://github.com/vueuse/head
useHead({
  title: import.meta.env.VITE_APP_TITLE,
})
</script>

<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>

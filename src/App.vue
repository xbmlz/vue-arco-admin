<script lang="ts" setup>
import { usePageTitle } from '@/hooks/usePageTitle'

usePageTitle()
</script>

<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>

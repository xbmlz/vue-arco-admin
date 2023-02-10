<script lang="ts" setup>
import type { PropType } from 'vue'
import FormWrapper from './form-wrapper.vue'
import { useAppStore, usePermissionStore } from '@/store'

interface OptionsProps {
  name: string
  key: string
  type?: string
  defaultVal?: boolean | string | number
}
defineProps({
  title: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<OptionsProps[]>,
    default() {
      return []
    },
  },
})
const appStore = useAppStore()
const permissionStore = usePermissionStore()
const handleChange = async ({ key, value }: { key: string; value: unknown }) => {
  if (key === 'colorWeakness') document.body.style.filter = value ? 'invert(80%)' : 'none'

  if (key === 'serverMenu' && value) await permissionStore.buildRoutes()

  if (key === 'topMenu') {
    appStore.updateSettings({
      sidebarCollapsed: false,
    })
  }

  appStore.updateSettings({ [key]: value })
}
</script>

<template>
  <div class="block">
    <h5 class="title">
      {{ title }}
    </h5>
    <div v-for="option in options" :key="option.name" class="switch-wrapper">
      <span>{{ option.name }}</span>
      <FormWrapper
        :type="option.type || 'switch'"
        :name="option.key"
        :default-value="option.defaultVal"
        @input-change="handleChange"
      />
    </div>
    <slot />
    <ADivider />
  </div>
</template>

<style scoped lang="less">
.block {
  margin-bottom: 24px;
}

.title {
  margin: 10px 0;
  padding: 0;
  font-size: 14px;
}

.switch-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
}
</style>

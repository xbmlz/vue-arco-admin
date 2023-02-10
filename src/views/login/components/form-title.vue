<script setup lang="ts">
import { LoginStateEnum, useLoginState } from '../useLogin'
const appTitle = import.meta.env.VITE_APP_TITLE
const { getLoginState } = useLoginState()
const getFormTitle = computed(() => {
  const titleObj: Record<LoginStateEnum, string> = {
    [LoginStateEnum.LOGIN]: '登录',
    [LoginStateEnum.REGISTER]: '注册',
  }
  return titleObj[unref(getLoginState)]
})
</script>

<template>
  <div>
    <div font-500 text-3xl mb-4>{{ getFormTitle }} {{ appTitle }}</div>
    <div text-xl c-gray mb-4>{{ getFormTitle }} {{ appTitle }}</div>
  </div>
</template>

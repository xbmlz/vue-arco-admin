<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineOptions({
  name: 'NoteFound',
})

const router = useRouter()
const back = () => {
  // warning： Go to the node that has the permission
  router.back()
}
</script>

<template>
  <div container p-4>
    <div bg-white relative flex flex-col items-center p10>
      <a-result
        class="result"
        status="404"
        subtitle="抱歉，页面不见了～
"
      />
      <div class="operation-row">
        <a-button key="again" style="margin-right: 16px">重试</a-button>
        <a-button key="back" type="primary" @click="back()">返回</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less"></style>

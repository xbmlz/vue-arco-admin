<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { useClipboard } from '@vueuse/core'
import { useAppStore } from '@/store'
import Block from './block.vue'

const visible = ref(false)
const appStore = useAppStore()
const { copy } = useClipboard()
const contentOpts = computed(() => [
  {
    name: '使用服务端菜单',
    key: 'serverMenu',
    defaultVal: appStore.serverMenu,
  },
  {
    name: '侧边栏宽度',
    key: 'siderWidth',
    defaultVal: appStore.siderWidth,
    type: 'number',
  },
])
const othersOpts = computed(() => [
  {
    name: '色弱模式',
    key: 'colorWeakness',
    defaultVal: appStore.colorWeakness,
  },
])

const copySettings = async () => {
  const text = JSON.stringify(appStore.$state, null, 2)
  await copy(text)
  Message.success('复制成功')
}

const cancel = () => {
  visible.value = false
}

defineExpose({
  visible,
})
</script>

<template>
  <!-- <div class="fixed-settings" @click="setVisible">
    <a-button type="primary">
      <template #icon>
        <icon-settings />
      </template>
    </a-button>
  </div> -->
  <a-drawer
    :width="350"
    unmount-on-close
    :visible="visible"
    cancel-text="关闭"
    ok-text="复制配置"
    @cancel="cancel"
    @ok="copySettings"
  >
    <template #title> 页面配置 </template>
    <Block :options="contentOpts" title="内容区域" />
    <Block :options="othersOpts" title="其他设置" />
    <a-alert>
      配置之后仅是临时生效，要想真正作用于项目，点击下方的 "复制配置"
      按钮，将配置替换到 settings.json 中即可。
    </a-alert>
  </a-drawer>
</template>

<style scoped lang="less">
.fixed-settings {
  position: fixed;
  top: 280px;
  right: 0;

  svg {
    font-size: 18px;
    vertical-align: -4px;
  }
}
</style>

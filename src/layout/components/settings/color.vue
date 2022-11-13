<script setup lang="ts">
import { Sketch } from '@ckpack/vue-color'
// @ts-expect-error - No type definition
import { generate, getRgbStr } from '@arco-design/color'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const theme = computed(() => appStore.theme)
const themeColor = computed(() => appStore.themeColor)
const pickerColor = ref(themeColor.value)
const list = computed(() => generate(themeColor.value, { list: true }))

// on change update color
const handleChange = (color: any) => {
  const newColor = color.hex
  appStore.updateSettings({ themeColor: newColor })
  const newList = generate(newColor, {
    list: true,
    dark: theme.value === 'dark',
  })
  newList.forEach((l: string, index: number) => {
    const rgbStr = getRgbStr(l)
    document.body.style.setProperty(`--arcoblue-${index + 1}`, rgbStr)
  })
}
</script>

<template>
  <div>
    <a-trigger trigger="hover" position="bl" auto-fit-position>
      <div class="input">
        <div class="color" :style="{ backgroundColor: themeColor }" />
        <span>{{ themeColor }}</span>
      </div>
      <template #content>
        <Sketch v-model="pickerColor" @update:model-value="handleChange" />
      </template>
    </a-trigger>
    <ul class="ul">
      <li v-for="(item, index) in list" :key="index" class="li" :style="{ backgroundColor: item }" />
    </ul>
    <a-typography>
      <a-typography-paragraph>
        根据主题颜色生成的 10 个梯度色（将配置复制到项目中，主题色才能对亮色 / 暗黑模式同时生效）
      </a-typography-paragraph>
    </a-typography>
  </div>
</template>

<style scoped lang="less">
.input {
  display: flex;
  width: 100%;
  height: 32px;
  border: 1px solid var(--color-border);
  padding: 3px;
  box-sizing: border-box;
}

.color {
  width: 100px;
  height: 24px;
  margin-right: 10px;
}

.ul {
  list-style: none;
  display: flex;
  padding: 0;
}

.li {
  width: 10%;
  height: 26px;
}
</style>

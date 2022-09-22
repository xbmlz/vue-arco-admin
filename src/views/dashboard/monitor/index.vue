<script lang="ts" setup>
defineOptions({
  name: 'Monitor',
})

const val = ref(['a'])
const res = ref([])
</script>

<template>
  <div container>
    <a-card>
      <a-input-tag
        v-model="res"
        :default-value="val"
        :style="{ width: '320px' }"
        placeholder="Please Enter"
        allow-clear
      />
    </a-card>
  </div>
</template>

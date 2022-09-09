<script lang="ts" setup>
defineOptions({
  name: 'Workplace',
})
</script>

<template>
  <div class="container p-4">
    <a-row :gutter="20">
      <a-col :span="6">
        <a-card title="SALES">
          <template #extra>
            <a-dropdown :popup-max-height="false">
              <a-button type="text"> No Max Height <icon-down /> </a-button>
              <template #content>
                <a-doption>Option 1</a-doption>
                <a-doption disabled> Option 2 </a-doption>
                <a-doption>Option 3</a-doption>
                <a-doption>Option 4</a-doption>
                <a-doption>Option 5</a-doption>
                <a-doption>Option 6</a-doption>
                <a-doption>Option 7</a-doption>
                <a-doption>Option 8</a-doption>
                <a-doption>Option 9</a-doption>
              </template>
            </a-dropdown>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

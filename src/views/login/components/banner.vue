<script lang="ts" setup>
import bannerImage from '@/assets/svg/login-banner.svg'
</script>

<template>
  <div class="banner" flex w-520px flex-col justify-center items-center>
    <div w-350px text-3xl font-500 color-white text-left relative mb-10>开箱即用的高质量模板</div>
    <img :src="bannerImage" w-350px />
  </div>
</template>

<style lang="less" scoped>
.banner {
  background: #235bda;
  background-position-x: 100%;
  background-image: url(../../../assets/images/login-bg.jpg);
  background-size: auto 250px;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>

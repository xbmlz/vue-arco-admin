<script lang='ts' setup>
import bannerImage from '@/assets/side-img.svg'

const carouselItem = computed(() => [
  {
    slogan: '开箱即用的高质量模板',
    image: bannerImage,
  }, {
    slogan: '内置了常见问题的解决方案',
    image: bannerImage,
  },
])
</script>

<template>
  <div class="banner">
    <div class="banner-inner">
      <a-carousel class="carousel" animation-name="fade">
        <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">
              {{ item.slogan }}
            </div>
            <img class="carousel-image" :src="item.image">
          </div>
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    &-inner {
      flex: 1;
      height: 100%;
    }
  }
  .carousel {
    height: 100%;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    &-title {
      margin: 0 auto;
      width: 349px;
      font-size: 24px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #8286a7;
      position: relative;
      text-align: left;
    }
    &-image {
      width: 350px;
      height: 350px;
      margin-top: 30px;
      background: 0/100% auto no-repeat;
    }
  }
</style>

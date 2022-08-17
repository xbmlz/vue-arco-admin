<script lang="ts" setup>
import LoginBanner from './components/banner.vue'
import LoginForm from './components/login-form.vue'

defineOptions({
  name: 'Login',
})
</script>

<template>
  <div flex h-100vh>
    <div fixed top-4 left-4 z-1 inline-flex items-center>
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      >
      <div ml-2 mr-2 text-2xl font-500 color-white>
        VEnable Admin
      </div>
    </div>
    <LoginBanner />
    <div relative flex flex-1 items-center justify-center pb-40px>
      <div>
        <LoginForm />
      </div>
      <div absolute w="100%" right-0 bottom-0>
        <Footer />
      </div>
    </div>
  </div>
</template>

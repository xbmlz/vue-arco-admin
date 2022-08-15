<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { loginApi } from '@/api/sys/user'
defineOptions({
  name: 'Login',
})
const loginHandle = () => {
  loginApi({
    username: 'admin',
    password: '123456',
  }).then((res) => {
    Message.success('login.form.login.success')
  })
}
</script>

<template>
  <div>
    <AButton type="primary" @click="loginHandle">
      Login
    </AButton>
  </div>
</template>

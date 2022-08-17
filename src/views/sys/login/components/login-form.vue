<script lang="ts" setup>
const errorMessage = ref('')
const userInfo = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <div w-320px>
    <div font-500 text-3xl mb-4>
      登录 VEnable Admin
    </div>
    <div text-2xl color-gray-5 mb-4>
      登录 VEnable Admin
    </div>
    <div h-32px color-red-5 text-xl>
      {{ errorMessage }}
    </div>
    <AForm ref="loginForm" :model="userInfo" layout="vertical">
      <AFormItem hide-label>
        <AInput placeholder="用户名: admin">
          <template #prefix>
            <icon-user />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem hide-label>
        <AInputPassword allow-clear placeholder="密码: admin">
          <template #prefix>
            <icon-lock />
          </template>
        </AInputPassword>
      </AFormItem>
      <ASpace :size="16" direction="vertical">
        <div flex justify-between>
          <ACheckbox>记住密码</ACheckbox>
          <ALink>忘记密码</ALink>
        </div>
        <AButton type="primary" html-type="submit" long>
          登录
        </AButton>
        <AButton type="text" long>
          注册账号
        </AButton>
      </ASpace>
    </AForm>
  </div>
</template>

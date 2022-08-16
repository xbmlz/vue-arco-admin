<script lang="ts" setup>
const errorMessage = ref('')
const userInfo = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">
      登录 VEnable Admin
    </div>
    <div class="login-form-sub-title">
      登录 VEnable Admin
    </div>
    <div class="login-form-error-msg">
      {{ errorMessage }}
    </div>
    <AForm ref="loginForm" :model="userInfo" class="login-form" layout="vertical">
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
        <div class="login-form-password-actions">
          <ACheckbox>记住密码</ACheckbox>
          <ALink>忘记密码</ALink>
        </div>
        <AButton type="primary" html-type="submit" long>
          登录
        </AButton>
        <AButton type="text" long class="login-form-register-btn">
          注册账号
        </AButton>
      </ASpace>
    </AForm>
  </div>
</template>

<style lang="less" scoped>
  .login-form {
    &-wrapper {
      width: 320px;
    }
    &-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
    &-sub-title {
      color: var(--color-text-3);
      font-size: 16px;
      line-height: 24px;
    }
    &-error-msg {
      height: 32px;
      color: rgb(var(--red-6));
      line-height: 32px;
    }
    &-password-actions {
      display: flex;
      justify-content: space-between;
    }
    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>

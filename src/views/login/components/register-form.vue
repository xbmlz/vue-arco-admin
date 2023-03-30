<script lang="ts" setup>
import type { FieldRule } from '@arco-design/web-vue'
import { Message } from '@arco-design/web-vue'
import type { ValidatedError } from '@arco-design/web-vue/es/form/interface'
import { LoginStateEnum, useLoginState } from '../useLogin'
import FormTitle from './form-title.vue'
import useLoading from '@/hooks/useLoading'

const errorMessage = ref('')
const { setLoginState, getLoginState } = useLoginState()

const { loading, setLoading } = useLoading()

const isShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)

const registerInfo = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
})

const confirmPasswordRules: FieldRule[] = [
  { required: true, message: '确认密码不能为空' },
  {
    validator: (value: string, callback: (error?: string) => void) => {
      if (value !== registerInfo.password) {
        callback(new Error('两次密码不一致').message)
      } else {
        callback()
      }
    },
  },
]

const emailRules: FieldRule[] = [
  { required: true, message: '邮箱不能为空' },
  {
    validator: (value: string, callback: (error?: string) => void) => {
      if (!value.includes('@')) {
        callback(new Error('邮箱格式不正确').message)
      } else {
        callback()
      }
    },
  },
]

const handleSubmit = ({
  errors,
  values,
}: {
  errors: Record<string, ValidatedError> | undefined
  values: Record<string, any>
}) => {
  if (loading.value) return
  if (!errors) {
    setLoading(true)
    try {
      Message.success(`注册成功${values.username}`)
    } catch (error) {
      errorMessage.value = (error as Error).message
    } finally {
      setLoading(false)
    }
  }
}
</script>

<template>
  <div v-show="isShow" w-320px>
    <FormTitle />
    <div h-32px color-red-5 text-xl>
      {{ errorMessage }}
    </div>
    <AForm ref="loginForm" :model="registerInfo" layout="vertical" @submit="handleSubmit">
      <AFormItem
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <AInput v-model="registerInfo.username" placeholder="用户名">
          <template #prefix>
            <icon-user />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem field="email" :rules="emailRules" :validate-trigger="['change', 'blur']" hide-label>
        <AInput v-model="registerInfo.email" placeholder="邮箱">
          <template #prefix>
            <icon-email />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <AInputPassword v-model="registerInfo.password" placeholder="密码" allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </AInputPassword>
      </AFormItem>
      <AFormItem
        field="confirmPassword"
        :rules="confirmPasswordRules"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <AInputPassword v-model="registerInfo.confirmPassword" placeholder="确认密码" allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </AInputPassword>
      </AFormItem>
      <ASpace :size="16" direction="vertical">
        <AButton type="primary" html-type="submit" :loading="loading" long>注册</AButton>
        <AButton type="text" long @click="setLoginState(LoginStateEnum.LOGIN)">返回登录</AButton>
      </ASpace>
    </AForm>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import type { ValidatedError } from '@arco-design/web-vue/es/form/interface'
import { LoginStateEnum, useLoginState } from '../useLogin'
import FormTitle from './form-title.vue'
import useLoading from '@/hooks/useLoading'
import { BASE_HOME_PATH } from '@/router/constants'
import { useUserStore } from '@/store/modules/user'
import type { LoginParams } from '@/api/system/user/model'

const errorMessage = ref('')
const userStore = useUserStore()
const { setLoginState, getLoginState } = useLoginState()

const router = useRouter()
const { loading, setLoading } = useLoading()

const isShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)

const loginConfig = useStorage('login-config', {
  rememberPassword: true,
  username: 'admin',
  password: '123456',
})

const userInfo = reactive({
  username: loginConfig.value.username,
  password: loginConfig.value.password,
})

const setRememberPassword = (val: boolean) => {
  loginConfig.value.rememberPassword = val
}

const handleSubmit = async ({
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
      const userInfo = await userStore.login(values as LoginParams)
      if (userInfo) {
        router.replace(userInfo?.homePath || BASE_HOME_PATH)
        Message.success('登录成功')
      }
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
    <AForm ref="loginForm" :model="userInfo" layout="vertical" @submit="handleSubmit">
      <AFormItem
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <AInput v-model="userInfo.username" placeholder="用户名: admin">
          <template #prefix>
            <icon-user />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem
        field="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <AInputPassword v-model="userInfo.password" placeholder="密码: admin" allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </AInputPassword>
      </AFormItem>
      <ASpace :size="16" direction="vertical">
        <div flex justify-between>
          <ACheckbox
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any"
          >
            记住密码
          </ACheckbox>
          <ALink>忘记密码</ALink>
        </div>
        <AButton type="primary" html-type="submit" :loading="loading" long>登录</AButton>
        <AButton type="text" long @click="setLoginState(LoginStateEnum.REGISTER)">注册账号</AButton>
      </ASpace>
    </AForm>
  </div>
</template>

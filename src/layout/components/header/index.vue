<script setup lang="ts">
import GlobalSettings from '../../components/settings/index.vue'
import Notify from '../../components/notify/index.vue'
import Menu from '../../components/menu/index.vue'
import { useAppStore, usePermissionStore, useUserStore } from '@/store'

const appStore = useAppStore()
const userStore = useUserStore()
const permissionStore = usePermissionStore()

const toggleDrawerMenu = inject('toggleDrawerMenu') as (ev: MouseEvent) => any

const topMenu = computed(() => appStore.topMenu && permissionStore.menuList)

const appShortTitle = import.meta.env.VITE_APP_SHORT_TITLE as string

// theme
const theme = computed(() => {
  return appStore.theme
})
const themeColor = computed(() => {
  return appStore.themeColor
})
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    appStore.toggleTheme(dark)
  },
})
const toggleTheme = useToggle(isDark)
const handleToggleTheme = () => {
  toggleTheme()
}

// message box
const msgBoxRef = ref()
const setMessageBoxVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  msgBoxRef.value.dispatchEvent(event)
}

// full scene
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

// settings
const settingsRef = ref()
const setSettingsVisible = () => {
  settingsRef.value.visible = true
}
// user
const avatar = computed(() => {
  return userStore.avatar
})
const handleLogout = () => {
  userStore.logout()
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <a-space>
        <img alt="logo" src="../../../assets/images/logo.png" />
        <a-typography-title :style="{ marginTop: '0.8rem', fontSize: '18px' }" :heading="5">
          {{ appShortTitle }}
        </a-typography-title>
        <icon-menu-fold
          v-if="!topMenu && appStore.isMobile"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
    <div class="navbar-center">
      <Menu v-if="topMenu" />
    </div>
    <ul class="navbar-right">
      <!-- search -->
      <!-- <li>
        <a-tooltip content="搜索">
          <a-button class="nav-btn" type="outline" shape="circle">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li> -->
      <!-- theme -->
      <li>
        <a-tooltip :content="theme === 'light' ? '点击切换为暗黑模式' : '点击切换为明亮模式'">
          <a-button class="nav-btn" type="outline" shape="circle" @click="handleToggleTheme">
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- message-box -->
      <li>
        <a-tooltip content="消息通知">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button class="nav-btn" type="outline" shape="circle" @click="setMessageBoxVisible">
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover
          trigger="click"
          :arrow-style="{ display: 'none' }"
          :content-style="{ padding: 0, minWidth: '400px' }"
          content-class="message-popover"
        >
          <div ref="msgBoxRef" class="ref-btn" />
          <template #content>
            <Notify />
          </template>
        </a-popover>
      </li>
      <!-- full scene -->
      <li>
        <a-tooltip :content="isFullscreen ? '点击退出全屏模式' : '点击切换全屏模式'">
          <a-button class="nav-btn" type="outline" shape="circle" @click="toggleFullScreen">
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- settings -->
      <li>
        <a-tooltip content="页面配置">
          <a-button class="nav-btn" type="outline" shape="circle" @click="setSettingsVisible">
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <!-- user -->
      <li>
        <a-dropdown trigger="click">
          <a-avatar :size="28" :style="{ cursor: 'pointer', backgroundColor: themeColor }">
            <img v-if="avatar" alt="avatar" :src="avatar" />
            <span v-else>{{ userStore.username }}</span>
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span>退出登录</span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
    <!-- page settings -->
    <GlobalSettings ref="settingsRef" />
  </div>
</template>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.navbar-left {
  display: flex;
  align-items: center;
  padding-left: 20px;
  img {
    width: 28px;
    margin-right: 8px;
  }
}

.navbar-center {
  flex: 1;
}

.navbar-right {
  display: flex;
  padding-right: 20px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 14px;
  }
  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }
  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>

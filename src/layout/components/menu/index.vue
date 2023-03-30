<script lang="tsx" setup>
import { compile } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import useMenuTree from './use-menu-tree'
import { listenerRouteChange } from '@/utils/route-listener'
import { openWindow, regexUrl } from '@/utils/url'
import { useAppStore } from '@/store'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const { menuTree } = useMenuTree()
const openKeys = ref<string[]>([])
const selectedKey = ref<string[]>([])

const topMenu = computed(() => appStore.topMenu)

const collapsed = computed({
  get() {
    if (!appStore.isMobile) return appStore.sidebarCollapsed
    return false
  },
  set(value: boolean) {
    appStore.updateSettings({ sidebarCollapsed: value })
  },
})

const setCollapse = (val: boolean) => {
  if (!appStore.isMobile) appStore.updateSettings({ sidebarCollapsed: val })
}

const goto = (item: RouteRecordRaw) => {
  // Open external link
  if (regexUrl.test(item.path)) {
    openWindow(item.path)
    selectedKey.value = [item.name as string]
    return
  }
  // Eliminate external link side effects
  const { hideInMenu, activeMenu } = item.meta as RouteMeta
  if (route.name === item.name && !hideInMenu && !activeMenu) {
    selectedKey.value = [item.name as string]
    return
  }
  // Trigger router change
  router.push({
    name: item.name,
  })
}

const findMenuOpenKeys = (target: string) => {
  const result: string[] = []
  let isFind = false
  const backtrack = (item: RouteRecordRaw, keys: string[]) => {
    if (item.name === target) {
      isFind = true
      result.push(...keys, item.name as string)
      return
    }
    if (item.children?.length) {
      item.children.forEach((el) => {
        backtrack(el, [...keys, el.name as string])
      })
    }
  }
  menuTree.value.forEach((el: RouteRecordRaw) => {
    if (isFind) return // Performance optimization
    backtrack(el, [el.name as string])
  })
  return result
}

listenerRouteChange((newRoute) => {
  const { ignoreAuth, activeMenu, hideInMenu } = newRoute.meta
  if (!ignoreAuth && (!hideInMenu || activeMenu)) {
    const menuOpenKeys = findMenuOpenKeys((activeMenu || newRoute.name) as string)
    const keySet = new Set([...menuOpenKeys, ...openKeys.value])
    openKeys.value = [...keySet]
    selectedKey.value = [(activeMenu || menuOpenKeys[menuOpenKeys.length - 1]) as string]
  }
}, true)

const renderSubMenu = () => {
  function travel(_route: RouteRecordRaw[], nodes = []) {
    if (_route) {
      _route.forEach((element) => {
        // This is demo, modify nodes as needed
        const icon = element?.meta?.icon ? () => h(compile(`<${element?.meta?.icon}/>`)) : null
        const node =
          element?.children && element?.children.length !== 0 ? (
            <a-sub-menu
              key={element?.name}
              v-slots={{
                icon,
                title: () => element?.meta?.title,
              }}
            >
              {travel(element?.children)}
            </a-sub-menu>
          ) : (
            <a-menu-item key={element?.name} v-slots={{ icon }} onClick={() => goto(element)}>
              {element?.meta?.title || ''}
            </a-menu-item>
          )
        nodes.push(node as never)
      })
    }
    return nodes
  }
  return travel(menuTree.value)
}
const Render = () => (
  <a-menu
    mode={topMenu.value ? 'horizontal' : 'vertical'}
    v-model:collapsed={collapsed.value}
    v-model:open-keys={openKeys.value}
    show-collapse-button={!appStore.isMobile}
    auto-open={false}
    selected-keys={selectedKey.value}
    auto-open-selected={true}
    level-indent={34}
    onCollapse={setCollapse}
    style="height: 100%"
  >
    {renderSubMenu()}
  </a-menu>
)
</script>

<template>
  <Render />
</template>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  // padding: 0px 20px;
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }
  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
// :deep(.arco-menu-pop::after) {
//   bottom: -10px;
//   height: 10px;
// }
// :deep(.arco-menu-selected-label) {
//   bottom: -10px;
// }
</style>

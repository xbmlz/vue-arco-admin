/// <reference types="vite/client">


declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

interface ImportMetaEnv {
	readonly VITE_PORT: number
	readonly VITE_APP_TITLE: string
	readonly VITE_PUBLIC_PATH: string
	readonly VITE_BASE_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

interface AppSettings {
  // 是否从服务器加载菜单
  backMenu: boolean
}

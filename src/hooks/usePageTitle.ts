import { REDIRECT_ROUTE_NAME } from '@/router/constants'

export function usePageTitle() {
  const { currentRoute } = useRouter()
  const pageTitle = useTitle()

  watch(
    () => currentRoute.value.path,
    () => {
      const appTitle = import.meta.env.VITE_APP_TITLE as string
      const route = unref(currentRoute)
      if (route.name === REDIRECT_ROUTE_NAME) return
      const title = route?.meta?.title as string
      pageTitle.value = title ? `${title} - ${appTitle}` : `${appTitle}`
    },
    {
      immediate: true,
    }
  )
}

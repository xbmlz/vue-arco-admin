// TODO
export function useTableScroll() {
  // const tableEl = unref(tableRef.$el)
  const scrollX = ref(500)
  // const tableBodyEl = tableEl.querySelector('.arco-table-body') as HTMLElement
  const scrollY = ref(2500)

  // get arco table instance
  return {
    scrollX,
    scrollY,
  }
}

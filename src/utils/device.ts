/**
 * 是否为移动端
 */
export function isMobile() {
  const rect = document.body.getBoundingClientRect()
  return rect.width - 1 < 992
}

import { browser } from "$app/environment"

type Props = {
  handler: (visible: boolean) => void
  disabled?: boolean
}

export default function scrollDetectAction(
  node: HTMLElement,
  { handler, disabled = false }: Props,
) {
  if (!browser || disabled) return

  const checkScroll = () => {
    const { scrollLeft, clientWidth, scrollWidth } = node
    const isRightVisible = scrollLeft + clientWidth < scrollWidth - 1
    handler(isRightVisible)
  }

  let timeout: ReturnType<typeof setTimeout> | undefined

  const checkScrollDebounced = () => {
    clearTimeout(timeout)
    timeout = setTimeout(checkScroll, 50)
  }

  checkScroll()
  window.addEventListener("resize", checkScroll)
  node.addEventListener("scroll", checkScrollDebounced)

  return {
    update(params: {
      handler: (visible: boolean) => void
      disabled?: boolean
    }) {
      disabled = params.disabled ?? false
      handler = params.handler
      checkScroll()
    },
    destroy() {
      window.removeEventListener("resize", checkScroll)
      node.removeEventListener("scroll", checkScrollDebounced)
    },
  }
}

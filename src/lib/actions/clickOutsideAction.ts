type Props = {
  handler: () => void
  events?: (keyof DocumentEventMap)[]
}

export default function clickOutsideAction(
  node: HTMLElement,
  { handler, events = ["mousedown"] }: Props,
) {
  const handle = (e: Event) => {
    const target = e.target as Node
    if (!node.contains(target)) {
      handler()
    }
  }

  events.forEach((event) => {
    document.addEventListener(event, handle)
  })

  return {
    destroy() {
      events.forEach((event) => {
        document.removeEventListener(event, handle)
      })
    },
  }
}

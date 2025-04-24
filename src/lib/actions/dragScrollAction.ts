import { browser } from "$app/environment"

interface DragScrollOptions {
  onDragStart?: () => void
  onDrag?: () => void
  onDragEnd?: () => void
  disabled?: boolean
  sensitivity?: number
  momentum?: number
}

export default function dragScrollAction(
  node: HTMLElement,
  options: DragScrollOptions = {},
) {
  if (!browser) return { destroy: () => {} }

  const config = {
    sensitivity: 1.2,
    momentum: 400,
    disabled: false,
    ...options,
  }

  let isDown = false
  let startX = 0
  let scrollLeft = 0
  let momentumID: number | null = null
  let velocityX = 0
  let lastPageX = 0
  let lastTime = 0

  function getPageX(e: MouseEvent | TouchEvent): number {
    return "touches" in e ? e.touches[0].pageX : e.pageX
  }

  function clearMomentum() {
    if (momentumID !== null) {
      cancelAnimationFrame(momentumID)
      momentumID = null
    }
  }

  function handleMouseDown(e: MouseEvent | TouchEvent) {
    if (config.disabled) return

    isDown = true
    node.classList.add("dragging")

    const pageX = getPageX(e)
    startX = pageX
    lastPageX = pageX
    lastTime = Date.now()
    scrollLeft = node.scrollLeft
    velocityX = 0

    clearMomentum()
    config.onDragStart?.()
  }

  function handleMouseMove(e: MouseEvent | TouchEvent) {
    if (!isDown || config.disabled) return
    e.preventDefault()

    const pageX = getPageX(e)
    const now = Date.now()
    const elapsed = now - lastTime

    if (elapsed > 0) {
      const newVelocity = (pageX - lastPageX) / elapsed
      velocityX = 0.8 * velocityX + 0.2 * newVelocity
    }

    lastPageX = pageX
    lastTime = now

    const walk = (pageX - startX) * config.sensitivity
    node.scrollLeft = scrollLeft - walk

    config.onDrag?.()
  }

  function handleMouseUp() {
    if (!isDown || config.disabled) return

    isDown = false
    node.classList.remove("dragging")

    if (Math.abs(velocityX) > 0.05 && config.momentum > 0) {
      applyMomentum()
    }

    config.onDragEnd?.()
  }

  function applyMomentum() {
    const initialVelocity = velocityX * 20
    const startTime = Date.now()
    const decayFactor = 0.95

    function momentumStep() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / config.momentum, 1)

      const easeOutFactor = 1 - Math.pow(1 - progress, 3)
      const currentVelocity = initialVelocity * (1 - easeOutFactor)

      if (Math.abs(currentVelocity) > 0.1) {
        node.scrollLeft -= currentVelocity
        momentumID = requestAnimationFrame(momentumStep)
      } else {
        clearMomentum()
      }
    }

    clearMomentum()
    momentumID = requestAnimationFrame(momentumStep)
  }

  node.addEventListener("mousedown", handleMouseDown)
  node.addEventListener("touchstart", handleMouseDown, { passive: false })

  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("touchmove", handleMouseMove, { passive: false })

  window.addEventListener("mouseup", handleMouseUp)
  window.addEventListener("touchend", handleMouseUp)

  node.addEventListener("mouseleave", () => isDown && handleMouseUp())

  return {
    update(newOptions: DragScrollOptions) {
      Object.assign(config, newOptions)

      if (config.disabled && isDown) {
        isDown = false
        node.classList.remove("dragging")
        clearMomentum()
      }
    },
    destroy() {
      node.removeEventListener("mousedown", handleMouseDown)
      node.removeEventListener("touchstart", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchend", handleMouseUp)
      node.removeEventListener("mouseleave", () => isDown && handleMouseUp())
      clearMomentum()
    },
  }
}

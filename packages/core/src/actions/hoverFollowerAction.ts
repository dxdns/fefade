import type { OrientationType } from "../types/index.js"

type Props = {
	orientation?: OrientationType
	bgColor?: string
}

export default function hoverFollowerAction(node: HTMLElement, props?: Props) {
	const { orientation, bgColor } = props ?? {}
	const startIn = 0

	const childs = Array.from(node.children)
	const overlay = document.createElement("div")

	overlay.style.background = bgColor !== undefined ? bgColor : ""
	overlay.style.position = "absolute"
	overlay.style.top = "0"
	overlay.style.left = "0"
	overlay.style.width = "100%"
	overlay.style.borderRadius = "8px"
	overlay.style.opacity = "0"
	overlay.style.zIndex = "1"
	overlay.style.pointerEvents = "none"
	overlay.style.margin = "0"

	if (orientation === "vertical") {
		overlay.style.transition =
			"transform 0.3s ease, height 0.3s ease, opacity 0.2s ease"
	} else {
		overlay.style.transition =
			"transform 0.3s ease, width 0.3s ease, height 0.3s ease, opacity 0.2s ease"
	}

	node.appendChild(overlay)

	function getTransparentColor(s: string, alpha = 0.2) {
		const parts = s.match(/\d+/g)
		if (parts && parts.length >= 3) {
			const [r, g, b] = parts.map(Number)
			return `rgba(${r}, ${g}, ${b}, ${alpha})`
		}
		return `rgba(0, 0, 0, ${alpha})`
	}

	function handleEnter(el: HTMLElement) {
		const containerRect = node.getBoundingClientRect()
		const elRect = el.getBoundingClientRect()

		if (orientation === "vertical") {
			const offset = elRect.top - containerRect.top
			const height = elRect.height
			overlay.style.transform = `translateY(${offset}px)`
			overlay.style.height = `${height}px`
		} else {
			const offsetY = elRect.top - containerRect.top
			const offsetX = elRect.left - containerRect.left

			overlay.style.width = `${elRect.width}px`
			overlay.style.height = `${elRect.height}px`
			overlay.style.transform = `translate(${offsetX}px, ${offsetY}px)`
		}

		overlay.style.opacity = "1"
	}

	function handleLeave() {
		overlay.style.opacity = "0"
	}

	const enterListeners = new Map<HTMLElement, (event: MouseEvent) => void>()
	const leaveListeners = new Map<HTMLElement, (event: MouseEvent) => void>()

	function handleAdd(el: HTMLElement) {
		el.style.position = "relative"
		const child = el.firstElementChild as HTMLElement | null

		if (child) {
			child.style.flex = "1"
			child.style.margin = "0"
		}

		const hasBgOverlay = overlay.style.background !== ""
		const bgColor = hasBgOverlay
			? getComputedStyle(overlay).background
			: getComputedStyle(el).background

		overlay.style.backgroundColor = getTransparentColor(bgColor, 0.2)

		const enterListener = (event: MouseEvent) => {
			if (event.target === el) {
				handleEnter(el)
			}
		}

		const leaveListener = (event: MouseEvent) => {
			if (event.target === el) {
				handleLeave()
			}
		}

		enterListeners.set(el, enterListener)
		leaveListeners.set(el, leaveListener)

		el.addEventListener("mouseenter", enterListener)
		el.addEventListener("mouseleave", leaveListener)
	}

	function handleRemove(el: HTMLElement) {
		el.style.position = ""
		el.style.background = ""

		const enterListener = enterListeners.get(el)
		const leaveListener = leaveListeners.get(el)

		if (enterListener) {
			el.removeEventListener("mouseenter", enterListener)
			enterListeners.delete(el)
		}

		if (leaveListener) {
			el.removeEventListener("mouseleave", leaveListener)
			leaveListeners.delete(el)
		}
	}

	childs.slice(startIn).forEach((childNode) => {
		handleAdd(childNode as HTMLElement)
	})

	return {
		destroy() {
			childs.slice(startIn).forEach((childNode) => {
				handleRemove(childNode as HTMLElement)
			})
			overlay.remove()
		}
	}
}

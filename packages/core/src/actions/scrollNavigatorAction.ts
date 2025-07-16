type Props = {
	onChange?: (isFirst: boolean, isLast: boolean, isScrollable: boolean) => void
}

export default function scrollNavigatorAction(node: HTMLElement, props: Props) {
	const { onChange } = props ?? {}

	function getChilds() {
		return Array.from(node.children) as HTMLElement[]
	}

	function getNextElement() {
		const childs = getChilds()
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft === 0 && childs.length > 1) {
			return childs[1]
		}

		for (const child of childs) {
			if (child.offsetLeft > scrollLeft + scrollWidth) {
				return child
			}
		}
		return childs[childs.length - 1]
	}

	function getPrevElement() {
		const childs = getChilds()
		const scrollLeft = node.scrollLeft
		const scrollWidth = node.clientWidth / 3

		if (scrollLeft < scrollWidth && childs.length > 0) {
			return childs[0]
		}

		for (let i = childs.length - 1; i >= 0; i--) {
			if (childs[i].offsetLeft < scrollLeft - scrollWidth / 2) {
				return childs[i]
			}
		}
		return childs[0]
	}

	function scrollToElement(element: HTMLElement) {
		if (!element) return

		const isFirst = element === node.firstElementChild

		node.scrollTo({
			left: isFirst ? 0 : element.offsetLeft,
			behavior: "smooth"
		})
	}

	function handleChange(el: HTMLElement) {
		const firstChild = node.firstElementChild === el
		const lastChild = node.lastElementChild === el
		const isScrollable = node.scrollWidth > el.clientWidth

		onChange?.(firstChild, lastChild, isScrollable)
	}

	const controls = {
		prev: () => {
			const el = getPrevElement()
			scrollToElement(el)
			handleChange(el)
		},
		next: () => {
			const el = getNextElement()
			scrollToElement(el)
			handleChange(el)
		},
		goTo: (index: number) => {
			const childs = getChilds()
			const clampedIndex = Math.max(0, Math.min(index, childs.length - 1))
			const el = childs[clampedIndex]
			scrollToElement(el)
			handleChange(el)
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (!node.contains(document.activeElement)) return

		if (e.key === "ArrowRight") {
			controls.next()
			e.preventDefault()
		} else if (e.key === "ArrowLeft") {
			controls.prev()
			e.preventDefault()
		}
	}

	function update() {
		onChange?.(
			node.scrollLeft === 0,
			node.scrollLeft + node.clientWidth >= node.scrollWidth - 2,
			node.scrollWidth > node.clientWidth
		)
	}

	const allListeners = {
		scroll: [node, "scroll", update],
		resize: [window, "resize", update],
		keyboard: [window, "keydown", handleKeyDown as EventListener]
	} as const

	const attachedListeners: [
		EventTarget,
		string,
		EventListenerOrEventListenerObject
	][] = []

	const keys = Object.keys(allListeners)
	const listeners = node.dataset.listeners
	const listenersFiltered = listeners
		?.split(",")
		.filter((s) => keys.includes(s))

	for (const key of listenersFiltered ?? ["keyboard"]) {
		const [target, event, handler] =
			allListeners[key as keyof typeof allListeners]
		target.addEventListener(event, handler)
		attachedListeners.push([target, event, handler])
	}

	requestAnimationFrame(update)

	return {
		destroy() {
			for (const [target, event, handler] of attachedListeners) {
				target.removeEventListener(event, handler)
			}
		},
		controls
	}
}

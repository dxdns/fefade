export default function scrollNavigatorAction(node: HTMLElement) {
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

	const controls = {
		prev: () => {
			const el = getPrevElement()
			scrollToElement(el)
		},
		next: () => {
			const el = getNextElement()
			scrollToElement(el)
		},
		goTo: (index: number) => {
			const childs = getChilds()
			const clampedIndex = Math.max(0, Math.min(index, childs.length - 1))
			const el = childs[clampedIndex]
			scrollToElement(el)
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

	node.addEventListener("keydown", handleKeyDown)

	return {
		destroy() {
			node.removeEventListener("keydown", handleKeyDown)
		},
		controls
	}
}

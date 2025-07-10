export default function autoAlignAction(node: HTMLElement) {
	const OFFSET = 8

	function update() {
		node.style.left = ""
		node.style.right = ""

		const rect = node.getBoundingClientRect()
		const viewportWidth = window.innerWidth

		if (rect.right > viewportWidth - OFFSET) {
			node.style.right = `${OFFSET}px`
		} else if (rect.left < OFFSET) {
			node.style.left = `${OFFSET}px`
		} else {
			node.style.left = "0"
		}
	}

	requestAnimationFrame(update)

	const observer = new ResizeObserver(update)
	observer.observe(node)

	window.addEventListener("resize", update)

	return {
		destroy() {
			window.removeEventListener("resize", update)
			observer.disconnect()
		}
	}
}

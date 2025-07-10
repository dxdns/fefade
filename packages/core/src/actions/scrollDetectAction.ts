type Props = {
	onChange?: (isFirst: boolean, isLast: boolean) => void
}

export default function scrollDetectAction(
	node: HTMLElement,
	{ onChange }: Props
) {
	function updateByScrollPosition() {
		const { scrollLeft, clientWidth, scrollWidth } = node
		const isFirst = scrollLeft <= 1
		const isLast = scrollLeft + clientWidth >= scrollWidth - 1

		onChange?.(isFirst, isLast)
	}

	let timeout: ReturnType<typeof setTimeout> | undefined

	function checkScrollDebounced() {
		clearTimeout(timeout)
		timeout = setTimeout(updateByScrollPosition, 50)
	}

	window.addEventListener("resize", checkScrollDebounced)
	node.addEventListener("scroll", checkScrollDebounced)

	updateByScrollPosition()

	return {
		destroy() {
			window.removeEventListener("resize", checkScrollDebounced)
			node.removeEventListener("scroll", checkScrollDebounced)
		}
	}
}

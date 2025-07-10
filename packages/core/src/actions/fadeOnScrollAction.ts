type Props = {
	start?: number
	end?: number
}

export default function fadeOnScrollAction(
	node: HTMLElement,
	props: Props = {}
) {
	if (node.dataset.fadeOnScroll === "false") return

	const { start = 0, end = window.innerHeight } = props

	function handleScroll() {
		const scrollY = window.scrollY
		const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1)
		node.style.opacity = `${1 - progress}`
	}

	handleScroll()
	window.addEventListener("scroll", handleScroll)
	window.addEventListener("resize", handleScroll)

	return {
		destroy() {
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("resize", handleScroll)
		}
	}
}

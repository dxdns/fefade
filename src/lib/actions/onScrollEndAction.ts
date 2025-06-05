export default function onScrollEndAction(
	node: HTMLElement,
	callback: () => void
) {
	const firstChild = node.firstElementChild as HTMLElement | null
	if (!firstChild) return

	const sentinel = document.createElement("div")
	sentinel.style.height = "1px"
	sentinel.style.width = "100%"
	sentinel.style.visibility = "hidden"

	firstChild.appendChild(sentinel)

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					callback()
				}
			}
		},
		{
			root: node,
			threshold: 1.0
		}
	)

	observer.observe(sentinel)

	return {
		destroy() {
			observer.disconnect()
			sentinel.remove()
		}
	}
}

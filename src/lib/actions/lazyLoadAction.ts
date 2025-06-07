export default function lazyLoadAction(node: HTMLImageElement) {
	const loaded = () => {
		node.style.opacity = "1"
	}

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				if (node.complete) {
					loaded()
				} else {
					node.addEventListener("load", loaded)
				}

				observer.unobserve(node)
			}
		},
		{
			root: null,
			rootMargin: "0px",
			threshold: 0
		}
	)

	observer.observe(node)

	return {
		destroy() {
			node.removeEventListener("load", loaded)
		}
	}
}

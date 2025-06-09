export default function lazyLoadAction(node: HTMLImageElement) {
	node.style.opacity = "0"

	const loaded = () => {
		node.style.opacity = "1"
		delete node.dataset.src
		node.removeEventListener("load", loaded)
	}

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				const src = node.dataset.src

				if (src) node.src = src

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

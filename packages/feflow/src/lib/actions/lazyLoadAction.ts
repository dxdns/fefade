export default function lazyLoadAction(node: HTMLImageElement) {
	node.style.opacity = "0"

	function finalize(shouldClearDataset = true) {
		node.style.opacity = "1"
		removeListeners()
		if (shouldClearDataset) {
			delete node.dataset.src
			delete node.dataset.fallback
		}
	}

	function onLoad() {
		finalize()
	}

	function onError() {
		const fallback = node.dataset.fallback
		if (fallback) {
			removeListeners()
			node.addEventListener("load", onLoad)
			node.src = fallback
		} else {
			finalize()
		}
	}

	function removeListeners() {
		node.removeEventListener("load", onLoad)
		node.removeEventListener("error", onError)
	}

	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return

			const src = node.dataset.src
			if (src) node.src = src

			if (node.complete && node.naturalWidth !== 0) {
				finalize()
			} else {
				node.addEventListener("load", onLoad)
				node.addEventListener("error", onError)
			}

			observer.unobserve(node)
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
			removeListeners()
		}
	}
}

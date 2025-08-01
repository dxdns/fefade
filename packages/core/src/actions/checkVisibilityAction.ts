type Props = {
	callback: (isVisible: boolean) => void
	options?: IntersectionObserverInit
}

export default function checkVisibilityAction(
	node: HTMLElement,
	{ callback, options }: Props
) {
	const handleIntersect: IntersectionObserverCallback = ([entry]) => {
		callback(entry.isIntersecting)
	}

	const observer = new IntersectionObserver(handleIntersect, {
		...options,
		root: null,
		threshold: 0,
		rootMargin: "0px"
	})

	observer.observe(node)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}

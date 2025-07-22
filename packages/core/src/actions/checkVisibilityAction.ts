type Props = {
	callback: (isVisible: boolean) => void
	threshold?: number
}

export default function checkVisibilityAction(
	node: HTMLElement,
	{ callback, threshold = 0 }: Props
) {
	const handleIntersect: IntersectionObserverCallback = ([entry]) => {
		callback(entry.isIntersecting)
	}

	const observer = new IntersectionObserver(handleIntersect, {
		root: null,
		threshold
	})

	observer.observe(node)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}

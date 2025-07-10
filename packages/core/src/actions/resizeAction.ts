type Props = {
	handler: (rect: DOMRectReadOnly) => void
}

export default function resizeAction(node: HTMLElement, { handler }: Props) {
	const observer = new ResizeObserver(([entry]) => {
		if (entry) {
			handler(entry.contentRect)
		}
	})

	observer.observe(node)

	return {
		destroy() {
			observer.disconnect()
		}
	}
}

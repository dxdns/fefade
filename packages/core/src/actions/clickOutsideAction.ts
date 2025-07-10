type Props = {
	handler: () => void
	events?: (keyof DocumentEventMap)[]
}

export default function clickOutsideAction(node: HTMLElement, props: Props) {
	let { handler, events = ["mousedown"] } = props

	const handle = (e: Event) => {
		const target = e.target as Node
		if (!node.contains(target)) {
			handler()
		}
	}

	const setupListeners = () => {
		events.forEach((event) => {
			document.addEventListener(event, handle)
		})
	}

	const removeListeners = () => {
		events.forEach((event) => {
			document.removeEventListener(event, handle)
		})
	}

	setupListeners()

	return {
		update(newProps: Props) {
			handler = newProps.handler
			events = newProps.events ?? ["mousedown"]
		},
		destroy() {
			removeListeners()
		}
	}
}

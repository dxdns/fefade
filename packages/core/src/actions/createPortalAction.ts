import { tick } from "svelte"

type Props = {
	target: HTMLElement
	id: string
}

const portals = new Map<string, HTMLElement>()

export default function createPortalAction(
	node: HTMLElement,
	props: Props = { target: document.body, id: "default" }
) {
	const { target, id } = props

	const key = `$$portal.${id}`
	let destroy: (() => void) | undefined

	if (!portals.has(key)) {
		portals.set(key, target)
	}

	const mountNode = (node: HTMLElement) => {
		const host = portals.get(key)
		if (!host) throw new Error(`Unknown portal host "${key}"`)
		host.appendChild(node)
		return () => host.contains(node) && host.removeChild(node)
	}

	const tryMount = async () => {
		if (!portals.has(key)) {
			await tick()
		}
		destroy = mountNode(node)
	}

	tryMount()

	return {
		destroy: () => {
			destroy?.()
			destroy = undefined
		}
	}
}
